const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");

const source = fs.readFileSync(path.join(__dirname, "../xiaohongshu-download-helper.user.js"), "utf8");
function section(start, end, offset = 0) {
  const from = source.indexOf(start, offset);
  const to = source.indexOf(end, from);
  assert.ok(from >= 0 && to > from, `Missing source section: ${start}`);
  return source.slice(from, to);
}
const constants = section("      const imageRequestBaseUrl", "      function getDefaultSetting");
const naming = section("      const globalFileNameVarMap", "      async function getRedId");
const helpers = section("      const downloadHistoryKey", "      const _hoisted_1$3");
const componentStart = source.indexOf('__name: "DownloadDilogContent"');
const setup = section("          const props = __props;", "          return (_ctx, _cache) =>", componentStart);

function harness(options = {}) {
  const store = { note: {
    note_id: "note-a", type: "normal", title: "相册", time: 1,
    user: { nickname: "作者", user_id: "author-a" },
    image_list: Array.from({ length: 5 }, (_, index) => ({ url_default: `https://cdn.example/image-${index}!preview` }))
  } };
  const settings = {
    DownloadFormatObj: { normal: 0, video: 0 }, preferLive: false,
    nameRule: "<笔记id>$.<序号>$", timeFormatRule: "YYYY", useNameAsDir: false, useTitleAsDir: false
  };
  const downloads = [], probes = [], messages = [], writes = [], waits = [];
  const context = vm.createContext({
    console: { error() {}, log() {} }, URL, Uint8Array, TextEncoder, setTimeout,
    vue: {
      reactive: (value) => value,
      ref: (value) => ({ value }),
      computed: (get) => ({ get value() { return get(); } }),
      watch: (_, callback) => callback()
    },
    GM_getValue: () => options.history || [],
    GM_setValue: (_, value) => { writes.push(Array.from(value)); options.write?.(value); },
    GM_download: (details) => {
      downloads.push(details);
      if (options.download) return options.download(details);
      queueMicrotask(() => details.onload());
    },
    _GM_xmlhttpRequest: (details) => {
      probes.push(details);
      if (options.probe) return options.probe(details);
      queueMicrotask(() => details.onload({ status: 206, response: new Uint8Array([255, 216, 255]).buffer }));
    },
    filetypeinfo: options.classify || ((bytes) => bytes[0] === 255 ? [{ mime: "image/jpeg", extension: "jpg" }] : [{ mime: "application/json", extension: ".json" }]),
    ElMessage: Object.fromEntries(["success", "warning", "error"].map((type) => [type, (message) => messages.push({ type, message })])),
    useNoteStore: () => store,
    useSettingStorageStore: () => settings,
    formatTime: () => "2026",
    getRedId: options.redId || (async () => "123"),
    reqAria2Download: async (list) => { context.aria2 = list; },
    __props: { closeDialog: () => { throw new Error("Must keep results visible"); } }
  });
  vm.runInContext(constants + naming + helpers + `
    const api = (() => {
      ${setup}
      return { state, activeTab, getDownloadUrlList, getDownloadUrls, downLoad, clearDownloadHistory };
    })();
    globalThis.api = { ...api, runDownloadBatch, downloadLargeFile, getFileExtensionFromPartialContent, completedDownloads, getFileNameByNamingRule, defaultFileNameRule };
  `, context);
  return {
    ...context.api, store, settings, downloads, probes, messages, writes, context, waits,
    wait: async (ms) => waits.push(ms)
  };
}

test("one batch retries transient errors sequentially and skips completions on the next click", async () => {
  let failures = 2, active = 0, maxActive = 0;
  const h = harness({ download(details) {
    active++;
    maxActive = Math.max(maxActive, active);
    queueMicrotask(() => {
      active--;
      if (details.url.includes("image-1") && failures-- > 0) details.onerror({ error: "not_succeeded" });
      else details.onload();
    });
  } });
  const list = await h.getDownloadUrlList();
  const result = await h.runDownloadBatch(list, () => {}, h.wait);
  assert.equal(result.completed.length, 5);
  assert.equal(result.failed.length, 0);
  assert.equal(maxActive, 1);
  assert.deepEqual(h.waits, [1000, 2000]);
  assert.equal(h.downloads.length, 7);
  const again = await h.runDownloadBatch(list, () => {}, h.wait);
  assert.equal(again.skipped, 5);
  assert.equal(h.downloads.length, 7);
  assert.equal(h.writes.at(-1).length, 5);
});

test("persistent failure does not stop later photos; the next batch downloads only the missing photo", async () => {
  let offline = true;
  const h = harness({ download(details) {
    queueMicrotask(() => offline && details.url.includes("image-2")
      ? details.ontimeout() : details.onload());
  } });
  const list = await h.getDownloadUrlList();
  const first = await h.runDownloadBatch(list, () => {}, h.wait);
  assert.equal(first.completed.length, 4);
  assert.equal(first.failed[0].item.index, 2);
  assert.deepEqual(h.waits, [1000, 2000, 4000]);
  const before = h.downloads.length;
  offline = false;
  const second = await h.runDownloadBatch(list, () => {}, h.wait);
  assert.equal(second.skipped, 4);
  assert.equal(second.completed.length, 1);
  assert.equal(h.downloads.length - before, 1);
  assert.equal(h.downloads.at(-1).name, "note-a.3.jpg");
});

test("only the download completion callback records success, and history survives a reload", async () => {
  let finish;
  const h = harness({ download(details) { finish = details.onload; } });
  h.state.checkList = [0];
  const list = await h.getDownloadUrlList();
  const pending = h.runDownloadBatch(list, () => {}, h.wait);
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(h.completedDownloads.size, 0);
  assert.equal(h.writes.length, 0);
  finish();
  await pending;
  const reloaded = harness({ history: h.writes.at(-1) });
  reloaded.state.checkList = [0];
  const result = await reloaded.runDownloadBatch(await reloaded.getDownloadUrlList(), () => {}, reloaded.wait);
  assert.equal(result.skipped, 1);
  assert.equal(reloaded.downloads.length, 0);
  reloaded.clearDownloadHistory();
  assert.equal(reloaded.completedDownloads.size, 0);
});

test("partial selection keeps original photo numbers and distinct format completion keys", async () => {
  const h = harness();
  const all = await h.getDownloadUrlList();
  h.state.checkList = [2, 4];
  const partial = await h.getDownloadUrlList();
  assert.equal(partial[0].name, "note-a.3");
  assert.equal(partial[1].name, "note-a.5");
  assert.equal(partial[0].key, all[2].key);
  h.state.checkList = [2];
  assert.equal((await h.getDownloadUrlList())[0].name, "note-a.3");
  h.settings.DownloadFormatObj.normal = 2;
  assert.notEqual((await h.getDownloadUrlList())[0].key, partial[0].key);
});

test("long Chinese titles are capped while timestamps and six original photo numbers survive", async () => {
  const h = harness();
  h.settings.nameRule = h.defaultFileNameRule;
  h.state.title = "很长的中文标题和日落照片🌅".repeat(20);
  h.store.note.image_list.push({ url_default: "https://cdn.example/image-5!preview" });
  h.state.checkList = [0, 1, 2, 3, 4, 5];
  const list = await h.getDownloadUrlList();
  await h.runDownloadBatch(list, () => {}, h.wait);
  assert.equal(new Set(h.downloads.map(({ name }) => name)).size, 6);
  h.downloads.forEach(({ name }, index) => {
    assert.ok(name.startsWith("[作者][123]"), name);
    assert.ok(!name.includes(h.state.title), name);
    assert.ok(name.includes(Array.from(h.state.title).slice(0, 40).join("")), name);
    assert.ok(name.endsWith(`(2026).${index + 1}.jpg`), name);
    assert.ok(Buffer.byteLength(name, "utf8") <= 200, name);
    assert.ok(!name.includes("\ufffd"));
  });
  assert.equal(h.state.title, "很长的中文标题和日落照片🌅".repeat(20));
  h.state.checkList = [4];
  assert.equal((await h.getDownloadUrlList())[0].name, list[4].name);
});

test("custom layouts keep their sequence location, and missing sequences are added for multiple photos", () => {
  const h = harness();
  const data = { index: 12, title: "标题🌅".repeat(100), nickname: "作者", publishTime: "2026-11-02" };
  const prefix = h.getFileNameByNamingRule(data, "$<序号>.$[<发布者昵称>]<标题>(<发布时间>)");
  assert.ok(prefix.startsWith("12.[作者]"));
  assert.ok(prefix.endsWith("(2026-11-02)"));
  const suffix = h.getFileNameByNamingRule(data, "<标题>");
  assert.ok(suffix.endsWith(".12"));
  assert.ok(!prefix.includes(data.title));
  assert.ok(!suffix.includes(data.title));
  assert.ok(Buffer.byteLength(prefix + ".jpeg", "utf8") <= 200);
  assert.ok(Buffer.byteLength(suffix + ".jpeg", "utf8") <= 200);
  const single = h.getFileNameByNamingRule(data, "<标题>$.<序号>$", true);
  assert.ok(!single.endsWith(".12"));
});

test("short names remain unchanged and oversized fields cannot truncate the original sequence", () => {
  const h = harness();
  const data = { index: 3, title: "相册", nickname: "作者", redId: "123", publishTime: "2026" };
  assert.equal(h.getFileNameByNamingRule(data, h.defaultFileNameRule), "[作者][123]相册(2026).3");
  data.nickname = "超长作者🌅".repeat(100);
  data.title = "标题".repeat(100);
  const result = h.getFileNameByNamingRule(data, h.defaultFileNameRule);
  assert.ok(result.endsWith("(2026).3"));
  assert.ok(Buffer.byteLength(result + ".jpeg", "utf8") <= 200);
});

test("the title limit counts Unicode code points and is also applied to single-photo names", () => {
  const h = harness();
  const data = { index: 1, title: "🌅".repeat(41) };
  const name = h.getFileNameByNamingRule(data, "<标题>$.<序号>$", true);
  assert.equal(name, "🌅".repeat(40));
  assert.equal(Array.from(name).length, 40);
  assert.equal(data.title, "🌅".repeat(41));
});

test("changing the note, title, selection or settings during preparation does not mix a batch", async () => {
  let release;
  const h = harness({ redId: () => new Promise((resolve) => { release = resolve; }) });
  const pending = h.getDownloadUrlList();
  h.store.note = { ...h.store.note, note_id: "note-b", title: "other" };
  h.state.title = "other";
  h.state.checkList = [];
  h.settings.DownloadFormatObj.normal = 1;
  release("123");
  const list = await pending;
  assert.equal(list.length, 5);
  assert.equal(list[0].name, "note-a.1");
  assert.equal(list[0].getUrls()[0], "https://cdn.example/image-0!preview");
});

test("double clicks cannot start overlapping batches, and results stay visible", async () => {
  let release;
  const h = harness({ redId: () => new Promise((resolve) => { release = resolve; }) });
  const first = h.downLoad();
  await h.downLoad();
  assert.equal(h.state.downloading, true);
  release("123");
  await first;
  assert.equal(h.downloads.length, 5);
  assert.equal(h.state.downloading, false);
  assert.match(h.state.downloadStatus, /完成 5 项/);
});

test("permission errors are actionable and do not trigger automatic retries", async () => {
  const h = harness({ download(details) { queueMicrotask(() => details.onerror({ error: "not_permitted" })); } });
  h.state.checkList = [0];
  const result = await h.runDownloadBatch(await h.getDownloadUrlList(), () => {}, h.wait);
  assert.equal(h.downloads.length, 1);
  assert.equal(h.waits.length, 0);
  assert.match(result.failed[0].error.message, /允许下载权限/);
  assert.equal(h.completedDownloads.size, 0);
});

test("a user-cancelled download is not automatically restarted", async () => {
  const h = harness({ download(details) { queueMicrotask(() => details.onerror({ error: "not_succeeded", details: { current: "USER_CANCELED" } })); } });
  h.state.checkList = [0];
  const result = await h.runDownloadBatch(await h.getDownloadUrlList(), () => {}, h.wait);
  assert.equal(h.downloads.length, 1);
  assert.equal(h.waits.length, 0);
  assert.match(result.failed[0].error.message, /已取消/);
});

test("HTTP errors and error documents never become successful image downloads", async () => {
  for (const response of [
    { status: 403, response: new Uint8Array([255, 216]).buffer },
    { status: 200, response: new Uint8Array([123]).buffer }
  ]) {
    const h = harness({ probe(details) { queueMicrotask(() => details.onload(response)); } });
    h.state.checkList = [0];
    const result = await h.runDownloadBatch(await h.getDownloadUrlList(), () => {}, h.wait);
    assert.equal(result.failed.length, 1);
    assert.equal(h.probes.length, 4);
    assert.equal(h.downloads.length, 0);
    assert.equal(h.completedDownloads.size, 0);
  }
});

test("bad media metadata fails independently without preventing other images", async () => {
  const h = harness();
  h.settings.DownloadFormatObj.normal = 1;
  h.store.note.image_list[1].url_default = "invalid";
  const result = await h.runDownloadBatch(await h.getDownloadUrlList(), () => {}, h.wait);
  assert.equal(result.completed.length, 4);
  assert.equal(result.failed[0].item.index, 1);
});

test("a parser exception rejects the probe instead of leaving the batch pending", async () => {
  const h = harness({ classify() { throw new Error("invalid media header"); } });
  await assert.rejects(h.getFileExtensionFromPartialContent("https://cdn.example/corrupt"), /invalid media header/);
});

test("videos do not depend on image selection and empty preferred codec arrays fall back", async () => {
  const h = harness();
  h.state.checkList = [];
  h.activeTab.value = "video";
  h.store.note.video = { media: { stream: { h265: [], h264: [{ backup_urls: ["https://video.example/file"] }] } } };
  const list = await h.getDownloadUrlList();
  assert.equal(list.length, 1);
  assert.equal(list[0].getUrls()[0], "https://video.example/file");
  h.activeTab.value = "normal";
  h.settings.preferLive = true;
  h.state.checkList = [0];
  h.store.note.image_list[0].live_photo = true;
  h.store.note.image_list[0].stream = { h264: [], EF4: [{ masterUrl: "https://live.example/file" }] };
  assert.equal((await h.getDownloadUrlList())[0].getUrls()[0], "https://live.example/file");
});

test("original and JPG download addresses retain regional directories from the file ID", async () => {
  const h = harness();
  h.state.checkList = [0];
  h.settings.DownloadFormatObj.normal = 2;
  h.store.note.image_list[0].file_id = "oss-ae/notes/image-0";
  const urls = (await h.getDownloadUrlList())[0].getUrls();
  assert.equal(urls.length, 4);
  assert.ok(urls.every((url) => url.includes("/oss-ae/notes/image-0?imageView2/2/w/format/jpg")));
});

test("CDN links use HTTPS to avoid insecure browser downloads", async () => {
  const h = harness();
  h.state.checkList = [0];
  h.store.note.image_list[0].url_default = "http://cdn.example/image-0!preview";
  assert.equal((await h.getDownloadUrlList())[0].getUrls()[0], "https://cdn.example/image-0!preview");
});

test("a history write failure never retries an already completed download", async () => {
  const h = harness({ write() { throw new Error("disk unavailable"); } });
  h.state.checkList = [0];
  const list = await h.getDownloadUrlList();
  const result = await h.runDownloadBatch(list, () => {}, h.wait);
  assert.equal(result.completed.length, 1);
  assert.equal(result.failed.length, 0);
  assert.equal(h.downloads.length, 1);
  assert.equal((await h.runDownloadBatch(list, () => {}, h.wait)).skipped, 1);
  assert.ok(h.messages.some(({ message }) => /记录保存失败/.test(message)));
});

test("aria2 dispatch stays independent from local completion history", async () => {
  const h = harness({ history: ["note-a:normal:0:0:false"] });
  h.state.checkList = [0];
  await h.downLoad(true);
  assert.equal(h.context.aria2.length, 1);
  assert.equal(h.context.aria2[0].url, "https://cdn.example/image-0!preview");
  assert.equal(h.downloads.length, 0);
  assert.equal(h.writes.length, 0);
});
