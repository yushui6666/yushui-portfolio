# 玉水 · 开发者作品集

中文个人作品集，展示 AI 工具协作、智能体、钉钉智能报修、RAG 和计算机视觉项目。

## 本地预览

直接打开 `index.html`，或运行 `python3 -m http.server 8000` 后访问 http://localhost:8000。

## 部署

这是无需构建的静态网站。上传仓库根目录的所有网页文件即可。

- 构建命令：留空
- 发布目录：`.`
- GitHub Pages：选择目标分支及根目录 `/ (root)`

## 文件

- `index.html`：内容和页面结构
- `style.css`：样式和响应式布局
- `app.js`：项目筛选
- `assets/`：项目封面

项目分别提供海外 GitHub 和内地 Gitee 入口。

## Node.js / Buildpack 平台

仓库提供零依赖的静态文件服务器，适用于需要检测应用语言的容器托管平台。

- 安装命令：`npm install`
- 构建命令：`npm run build`（仅语法检查）
- 启动命令：`npm start`
- 监听地址：`0.0.0.0`
- 端口：读取环境变量 `PORT`，默认 `3000`

如果平台要求填写服务端口，填写 `3000` 或与 `PORT` 保持一致。
普通静态托管平台继续上传 HTML、CSS、JS 和 assets 即可。
