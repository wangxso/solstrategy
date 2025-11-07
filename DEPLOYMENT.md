# Cloudflare Pages Deployment Guide

This guide explains how to deploy the SolStrategy website to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account (free tier works fine)
2. Node.js 20+ installed locally
3. Git repository for your project

## Deployment Methods

### Method 1: Automatic Deployment via Git (Recommended)

1. **Push your code to GitHub/GitLab**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to "Workers & Pages" → "Pages"
   - Click "Create application" → "Connect to Git"
   - Select your repository
   - Configure build settings:
     - **Framework preset**: Vue
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Root directory**: `solstrategy-website`
     - **Node version**: 20

3. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy your site
   - Every push to main branch will trigger a new deployment

### Method 2: Manual Deployment via Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build the project**
   ```bash
   cd solstrategy-website
   npm install
   npm run build
   ```

4. **Deploy to Cloudflare Pages**
   ```bash
   wrangler pages deploy dist --project-name=solstrategy-website
   ```

### Method 3: Direct Upload via Dashboard

1. **Build the project locally**
   ```bash
   cd solstrategy-website
   npm install
   npm run build
   ```

2. **Upload to Cloudflare Pages**
   - Go to Cloudflare Dashboard → Workers & Pages → Pages
   - Click "Upload assets"
   - Drag and drop the `dist` folder
   - Click "Deploy site"

## Configuration Files

### wrangler.toml
Main configuration file for Cloudflare Workers/Pages deployment.

### public/_redirects
Handles SPA routing by redirecting all routes to index.html.

### public/_headers
Sets security headers and caching policies for better performance and security.

### functions/_middleware.ts
Cloudflare Pages Functions middleware for handling SPA routing at the edge.

## Environment Variables

If you need to add environment variables:

1. Go to Cloudflare Dashboard → Your Pages Project → Settings → Environment variables
2. Add variables for Production and Preview environments
3. Rebuild the project

Example variables:
- `VITE_API_URL`: API endpoint URL
- `VITE_CONTACT_EMAIL`: Contact email address

## Custom Domain

To add a custom domain:

1. Go to your Pages project → Custom domains
2. Click "Set up a custom domain"
3. Enter your domain (e.g., `www.solstrategy.com`)
4. Follow DNS configuration instructions
5. Cloudflare will automatically provision SSL certificate

## Build Settings

Current build configuration:
- **Framework**: Vue 3 + Vite
- **Node Version**: 20
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Performance Optimizations

The deployment includes:
- ✅ Static asset caching (1 year)
- ✅ HTML no-cache policy
- ✅ Security headers (XSS, Frame Options, etc.)
- ✅ SPA routing support
- ✅ Automatic HTTPS
- ✅ Global CDN distribution
- ✅ Automatic minification

## Monitoring

Monitor your deployment:
- **Analytics**: Cloudflare Dashboard → Your Project → Analytics
- **Logs**: Cloudflare Dashboard → Your Project → Functions → Logs
- **Build History**: Cloudflare Dashboard → Your Project → Deployments

## Rollback

To rollback to a previous deployment:
1. Go to Cloudflare Dashboard → Your Project → Deployments
2. Find the deployment you want to rollback to
3. Click "..." → "Rollback to this deployment"

## Troubleshooting

### Build Fails
- Check Node version matches (20+)
- Verify all dependencies are in package.json
- Check build logs in Cloudflare Dashboard

### 404 Errors on Routes
- Ensure `_redirects` file is in the `public` folder
- Verify SPA routing is configured correctly
- Check that `functions/_middleware.ts` is deployed

### Assets Not Loading
- Check asset paths are relative (not absolute)
- Verify `base` in vite.config.ts is set correctly
- Check browser console for CORS errors

## Support

For issues:
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Cloudflare Community: https://community.cloudflare.com/
- Vite Docs: https://vitejs.dev/

## Deployment Checklist

Before deploying:
- [ ] Run `npm run build` locally to test
- [ ] Check all routes work correctly
- [ ] Verify images and assets load
- [ ] Test on mobile devices
- [ ] Check console for errors
- [ ] Verify email links work (mailto:)
- [ ] Test form submissions
- [ ] Check SEO meta tags
- [ ] Verify analytics tracking (if configured)

## Estimated Costs

Cloudflare Pages Free Tier includes:
- Unlimited requests
- Unlimited bandwidth
- 500 builds per month
- 1 build at a time
- 20,000 files per deployment

This is more than sufficient for most websites!
