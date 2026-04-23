# Docker 部署说明（位于 app/ 内的辅助文档）

构建镜像：

```bash
cd muse
docker build -t muse:latest .
```

运行容器：

```bash
docker run -p 80:80 muse:latest
```

使用 docker-compose：

```bash
cd muse
docker-compose up --build -d
```

构建会使用 `npm run build` 生成 `dist`，并用 `nginx` 提供静态文件，支持 SPA 回退到 `index.html`。
