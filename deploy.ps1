# SolStrategy Website Deployment Script for Cloudflare Pages (PowerShell)
# This script builds and deploys the website to Cloudflare Pages

$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting SolStrategy Website Deployment..." -ForegroundColor Cyan
Write-Host ""

# Check if wrangler is installed
try {
    wrangler --version | Out-Null
} catch {
    Write-Host "❌ Wrangler CLI is not installed." -ForegroundColor Red
    Write-Host "📦 Installing Wrangler..." -ForegroundColor Yellow
    npm install -g wrangler
}

# Check if logged in to Cloudflare
Write-Host "🔐 Checking Cloudflare authentication..." -ForegroundColor Cyan
try {
    wrangler whoami | Out-Null
} catch {
    Write-Host "🔑 Please login to Cloudflare..." -ForegroundColor Yellow
    wrangler login
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Cyan
npm install

# Run type check
Write-Host "🔍 Running type check..." -ForegroundColor Cyan
npm run type-check

# Build the project
Write-Host "🏗️  Building project..." -ForegroundColor Cyan
npm run build

# Check if build was successful
if (-not (Test-Path "dist")) {
    Write-Host "❌ Build failed! dist directory not found." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful!" -ForegroundColor Green
Write-Host ""

# Deploy to Cloudflare Pages
Write-Host "🌐 Deploying to Cloudflare Pages..." -ForegroundColor Cyan
wrangler pages deploy dist --project-name=solstrategy-website

Write-Host ""
Write-Host "✨ Deployment complete!" -ForegroundColor Green
Write-Host "🎉 Your website is now live on Cloudflare Pages!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 View your deployment:" -ForegroundColor Cyan
Write-Host "   https://dash.cloudflare.com/" -ForegroundColor White
Write-Host ""
