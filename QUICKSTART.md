# Quick Start Guide - Cloudflare Pages Deployment

## 🚀 Fastest Way to Deploy (5 minutes)

### Option 1: Using npm script (Recommended)

```bash
cd solstrategy-website

# Install Wrangler CLI globally (first time only)
npm install -g wrangler

# Login to Cloudflare (first time only)
wrangler login

# Deploy!
npm run deploy
```

### Option 2: Using deployment script

**On Windows (PowerShell):**
```powershell
cd solstrategy-website
.\deploy.ps1
```

**On Mac/Linux:**
```bash
cd solstrategy-website
chmod +x deploy.sh
./deploy.sh
```

### Option 3: Manual steps

```bash
cd solstrategy-website

# 1. Install dependencies
npm install

# 2. Build the project
npm run build

# 3. Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=solstrategy-website
```

## 📋 First Time Setup

### 1. Install Wrangler CLI

```bash
npm install -g wrangler
```

### 2. Login to Cloudflare

```bash
wrangler login
```

This will open your browser to authenticate with Cloudflare.

### 3. Verify Login

```bash
wrangler whoami
```

You should see your Cloudflare account information.

## 🔄 Automatic Deployment with GitHub

### Setup GitHub Actions (One-time)

1. **Get Cloudflare API Token**
   - Go to https://dash.cloudflare.com/profile/api-tokens
   - Click "Create Token"
   - Use "Edit Cloudflare Workers" template
   - Copy the token

2. **Get Cloudflare Account ID**
   - Go to https://dash.cloudflare.com/
   - Select any domain
   - Copy Account ID from the right sidebar

3. **Add Secrets to GitHub**
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Add two secrets:
     - `CLOUDFLARE_API_TOKEN`: Your API token
     - `CLOUDFLARE_ACCOUNT_ID`: Your account ID

4. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add Cloudflare deployment"
   git push origin main
   ```

Now every push to `main` branch will automatically deploy to Cloudflare Pages!

## 🌐 Access Your Website

After deployment, your website will be available at:
- Production: `https://solstrategy-website.pages.dev`
- Custom domain: Configure in Cloudflare Dashboard

## 🔧 Common Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type check
npm run type-check

# Deploy to production
npm run deploy

# Deploy to preview environment
npm run deploy:preview
```

## 📊 Monitor Your Deployment

1. Go to https://dash.cloudflare.com/
2. Navigate to "Workers & Pages"
3. Click on "solstrategy-website"
4. View:
   - Deployments history
   - Analytics
   - Custom domains
   - Environment variables

## 🆘 Troubleshooting

### "wrangler: command not found"
```bash
npm install -g wrangler
```

### "Not logged in"
```bash
wrangler login
```

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes not working (404 errors)
- Ensure `_redirects` file exists in `public` folder
- Check that build output is in `dist` folder

## 💡 Tips

1. **Preview before deploying**: Always run `npm run build` and `npm run preview` locally first
2. **Use branches**: Deploy to preview environment with `npm run deploy:preview`
3. **Monitor builds**: Check Cloudflare Dashboard for build logs
4. **Custom domain**: Add your domain in Cloudflare Pages settings
5. **Environment variables**: Add them in Cloudflare Dashboard, not in code

## 📚 Next Steps

- [ ] Add custom domain
- [ ] Configure environment variables
- [ ] Set up analytics
- [ ] Enable Web Analytics
- [ ] Configure email forwarding
- [ ] Add SSL certificate (automatic)
- [ ] Set up staging environment

## 🎉 That's it!

Your SolStrategy website is now deployed on Cloudflare's global CDN with:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Unlimited bandwidth
- ✅ DDoS protection
- ✅ 99.99% uptime SLA

Enjoy your blazing-fast website! 🚀
