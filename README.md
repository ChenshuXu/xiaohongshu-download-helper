# 小红书下载助手（个人维护版）

这是 `waelun` 发布的 Greasy Fork 脚本 `522922` 的个人维护版。原脚本标注为 MIT License；原 Greasy Fork 页面和更新地址已不可用，且未找到可验证的公开 GitHub 上游。

## 安装

1. 安装 Tampermonkey 或兼容的 userscript 管理器。
2. [点击安装脚本](https://raw.githubusercontent.com/ChenshuXu/xiaohongshu-download-helper/main/xiaohongshu-download-helper.user.js)。

脚本保留了原来的 `@name` 和 `@namespace`，从 Raw 链接安装时可替换已有的同名脚本。

## 更新

`@updateURL` 和 `@downloadURL` 都指向 `main` 分支的 Raw 脚本。以后每次发布都要同时提高 `@version`；Tampermonkey 检查更新时会自动获取新版本。

## 当前修复

- 多文件逐项下载，失败自动重试 3 次；一张失败后继续处理其余文件。
- 使用 Tampermonkey 的下载完成回调确认结果，保存最近 2000 项完成记录；再次点击或刷新后自动跳过已完成项。
- 下载面板显示进度、完成数和失败序号，下载期间阻止重复启动。
- 部分选择和补下载始终保留照片在原笔记中的序号。
- 兼容 `rednote.com` 和 `/discovery/item/<id>`。
- 从页面内嵌状态恢复笔记资源。
- 图片原图 key 解析失败时从 URL path 回退。
- 优先保留资源 `file_id` 的地区路径，避免 RedNote 原图地址丢失 `oss-ae/notes/` 等前缀；下载链接统一使用 HTTPS。
- Live Photo 和普通视频兼容 H.264、H.265、AV1 及备用地址。
- 默认文件名包含发布者、小红书号、标题、时间和多文件序号。

## 多图下载

更新到 **2.1.3** 后刷新笔记页，选择照片并点击“浏览器下载”。面板会一直显示进度，下载失败时自动重试；仍有失败项时，再次点击会只补下载未完成项。普通、高清、JPG 和实况的完成记录分别计算。

完成记录保存在当前浏览器的 Tampermonkey 中，各设备独立。如果已经删除了下载文件、换了保存位置，或希望再次下载，点击“清除本篇下载记录（允许重新下载）”。该操作只清除记录，不删除文件。旧版下载的文件没有完成记录，首次使用新版时不会自动识别它们。

脚本新增了 `GM_download`、`GM_getValue` 和 `GM_setValue` 权限。如面板提示下载功能或权限未开启，请在 Tampermonkey 设置中检查下载模式和下载权限；后缀被拦截时按提示加入允许列表。下载完成回调及权限说明见 [Tampermonkey 官方文档](https://www.tampermonkey.net/documentation.php?locale=en&q=GM_download)。aria2 的实际下载结果仍以 aria2 为准。

## 验证

```sh
node --check xiaohongshu-download-helper.user.js
node --test tests/downloads.test.cjs
```
