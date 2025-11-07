#!/bin/bash

# SolStrategy Website Deployment Script for Cloudflare Pages
# This script builds and deploys the website to Cloudflare Pages

set -e  # Exit on error

echo "🚀 Starting SolStrategy Website Deployment..."
echo ""

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler CLI is not installed."
    echo "📦 Installing Wrangler..."
    npm install -g wrangler
fi

# Check if logged in to Cloudflare
echo "🔐 Checking Cloudflare authentication..."
if ! wrangler whoami &> /dev/null; then
    echo "🔑 Please login to Cloudflare..."
    wrangler login
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run type check
echo "🔍 Running type check..."
npm run type-check

# Build the project
echo "🏗️  Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed! dist directory not found."
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Deploy to Cloudflare Pages
echo "🌐 Deploying to Cloudflare Pages..."
wrangler pages deploy dist --project-name=solstrategy-website

echo ""
echo "✨ Deployment complete!"
echo "🎉 Your website is now live on Cloudflare Pages!"
echo ""
echo "📊 View your deployment:"
echo "   https://dash.cloudflare.com/"
echo ""
