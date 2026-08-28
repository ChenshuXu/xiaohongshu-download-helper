# 小红书下载助手（个人维护版）

这是 `waelun` 发布的 Greasy Fork 脚本 `522922` 的个人维护版。原脚本标注为 MIT License；原 Greasy Fork 页面和更新地址已不可用，且未找到可验证的公开 GitHub 上游。

## 安装

1. 安装 Tampermonkey 或兼容的 userscript 管理器。
2. [点击安装脚本](https://raw.githubusercontent.com/ChenshuXu/xiaohongshu-download-helper/main/xiaohongshu-download-helper.user.js)。

脚本保留了原来的 `@name` 和 `@namespace`，从 Raw 链接安装时可替换已有的同名脚本。

## 更新

`@updateURL` 和 `@downloadURL` 都指向 `main` 分支的 Raw 脚本。以后每次发布都要同时提高 `@version`；Tampermonkey 检查更新时会自动获取新版本。

## 当前修复

- 兼容 `rednote.com` 和 `/discovery/item/<id>`。
- 从页面内嵌状态恢复笔记资源。
- 图片原图 key 解析失败时从 URL path 回退。
- Live Photo 和普通视频兼容 H.264、H.265、AV1 及备用地址。
- 默认文件名包含发布者、小红书号、标题、时间和多文件序号。
