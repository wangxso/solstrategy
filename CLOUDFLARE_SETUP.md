# Cloudflare Pages 部署配置完成 ✅

## 📦 已创建的配置文件

### 核心配置文件
1. **wrangler.toml** - Cloudflare Workers/Pages 主配置文件
2. **.node-version** - 指定 Node.js 版本 (20)
3. **.cfignore** - Cloudflare 部署忽略文件

### 路由和安全配置
4. **public/_redirects** - SPA 路由重定向规则
5. **public/_headers** - 安全头和缓存策略
6. **functions/_middleware.ts** - Edge 函数中间件（处理 SPA 路由）

### 部署脚本
7. **deploy.sh** - Linux/Mac 部署脚本
8. **deploy.ps1** - Windows PowerShell 部署脚本
9. **package.json** - 添加了 `deploy` 和 `deploy:preview` 脚本

### CI/CD 配置
10. **.github/workflows/deploy.yml** - GitHub Actions 自动部署工作流

### 文档
11. **DEPLOYMENT.md** - 完整部署指南（中英文）
12. **QUICKSTART.md** - 快速开始指南
13. **CLOUDFLARE_SETUP.md** - 本文件

## 🚀 快速部署（3种方法）

### 方法 1：使用 npm 脚本（推荐）

```bash
# 首次安装 Wrangler CLI
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署到生产环境
npm run deploy

# 或部署到预览环境
npm run deploy:preview
```

### 方法 2：使用部署脚本

**Windows:**
```powershell
.\deploy.ps1
```

**Mac/Linux:**
```bash
chmod +x deploy.sh
./deploy.sh
```

### 方法 3：通过 Cloudflare Dashboard

1. 构建项目：`npm run build`
2. 访问 https://dash.cloudflare.com/
3. Workers & Pages → Create application → Upload assets
4. 上传 `dist` 文件夹

## 🔄 自动部署设置

### GitHub Actions 自动部署

1. **获取 Cloudflare API Token**
   - 访问：https://dash.cloudflare.com/profile/api-tokens
   - 创建 Token（使用 "Edit Cloudflare Workers" 模板）

2. **获取 Account ID**
   - 访问：https://dash.cloudflare.com/
   - 在任意域名页面右侧找到 Account ID

3. **添加 GitHub Secrets**
   - 仓库 Settings → Secrets and variables → Actions
   - 添加：
     - `CLOUDFLARE_API_TOKEN`
     - `CLOUDFLARE_ACCOUNT_ID`

4. **推送代码**
   ```bash
   git add .
   git commit -m "Setup Cloudflare deployment"
   git push origin main
   ```

现在每次推送到 `main` 分支都会自动部署！

## 📋 配置说明

### wrangler.toml
```toml
name = "solstrategy-website"
compatibility_date = "2024-01-01"
pages_build_output_dir = "dist"
```

### public/_redirects
```
/*    /index.html   200
```
确保所有路由都返回 index.html（SPA 路由支持）

### public/_headers
设置了：
- 安全头（XSS Protection, Frame Options 等）
- 静态资源缓存（1年）
- HTML 不缓存策略

### functions/_middleware.ts
Edge 函数中间件，在 Cloudflare 边缘处理 SPA 路由

## 🌐 部署后访问

### 默认域名
- 生产环境：`https://solstrategy-website.pages.dev`
- 预览环境：`https://[branch].solstrategy-website.pages.dev`

### 自定义域名
在 Cloudflare Dashboard 中配置：
1. Pages 项目 → Custom domains
2. 添加域名（如 `www.solstrategy.com`）
3. 按照 DNS 配置说明操作
4. 自动获得 SSL 证书

## 🔧 环境变量

如需添加环境变量：
1. Cloudflare Dashboard → 项目 → Settings → Environment variables
2. 分别为 Production 和 Preview 环境添加
3. 重新构建项目

示例变量：
```
VITE_API_URL=https://api.solstrategy.com
VITE_CONTACT_EMAIL=hr@solstrategy.com
```

## 📊 性能优化

已配置的优化：
- ✅ 全球 CDN 分发
- ✅ 自动 HTTPS
- ✅ 静态资源缓存（1年）
- ✅ Brotli/Gzip 压缩
- ✅ HTTP/2 和 HTTP/3
- ✅ 安全头配置
- ✅ DDoS 防护

## 🎯 构建配置

```json
{
  "Framework": "Vue 3 + Vite",
  "Node Version": "20",
  "Build Command": "npm run build",
  "Output Directory": "dist",
  "Install Command": "npm install"
}
```

## 📈 监控和分析

访问 Cloudflare Dashboard 查看：
- 📊 Analytics（流量、性能）
- 🚀 Deployments（部署历史）
- 📝 Functions Logs（函数日志）
- 🔍 Real-time Logs（实时日志）

## 🆘 常见问题

### 1. 路由 404 错误
**解决方案：**
- 确保 `public/_redirects` 文件存在
- 检查 `functions/_middleware.ts` 已部署

### 2. 构建失败
**解决方案：**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 3. 资源加载失败
**解决方案：**
- 检查 `vite.config.ts` 中的 `base` 配置
- 确保资源路径是相对路径

### 4. Wrangler 命令未找到
**解决方案：**
```bash
npm install -g wrangler
```

## 💰 费用说明

### Cloudflare Pages 免费套餐包含：
- ✅ 无限请求
- ✅ 无限带宽
- ✅ 每月 500 次构建
- ✅ 同时 1 个构建
- ✅ 每次部署 20,000 个文件
- ✅ 自动 SSL 证书
- ✅ 全球 CDN

**对于大多数网站来说，免费套餐完全够用！**

## 🎉 部署清单

部署前检查：
- [ ] 本地运行 `npm run build` 测试
- [ ] 检查所有路由正常工作
- [ ] 验证图片和资源加载
- [ ] 测试移动端显示
- [ ] 检查浏览器控制台无错误
- [ ] 验证邮件链接（mailto:）
- [ ] 测试表单提交
- [ ] 检查 SEO meta 标签
- [ ] 验证 Apply Now 功能
- [ ] 测试 View All Positions

## 📚 相关资源

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Wrangler CLI 文档](https://developers.cloudflare.com/workers/wrangler/)
- [Vue.js 文档](https://vuejs.org/)
- [Vite 文档](https://vitejs.dev/)

## 🎊 完成！

您的 SolStrategy 网站现在已经完全配置好，可以部署到 Cloudflare Pages 了！

运行 `npm run deploy` 开始部署吧！🚀
