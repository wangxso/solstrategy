# SolStrategy Website

A modern, responsive corporate website for SolStrategy - a Singapore-based professional consulting firm specializing in public relations, investment advisory, and security services.

## 🚀 Tech Stack

- **Frontend Framework**: Vue.js 3 with Composition API
- **CSS Framework**: Tailwind CSS 3.x
- **Build Tool**: Vite
- **Language**: TypeScript
- **Routing**: Vue Router 4
- **Code Quality**: ESLint + Prettier

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── common/          # Generic UI components
│   ├── layout/          # Layout components (Header, Footer)
│   └── business/        # Business-specific components
├── views/               # Page components
├── router/              # Vue Router configuration
├── assets/              # Static assets
│   ├── images/
│   └── styles/
├── composables/         # Vue composables
├── utils/               # Utility functions
└── types/               # TypeScript type definitions
```

## 🛠️ Development

### Prerequisites

- Node.js 20.19.0+ or 22.12.0+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd solstrategy-website

# Install dependencies
npm install
```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Format code
npm run format

# Type checking
npm run type-check
```

## 🎨 Design System

### Brand Colors

- **Primary**: White (#FFFFFF) and Black/Gray tones
- **Accent**: Blue (#3B82F6) for highlights and CTAs
- **Gray Scale**: From #F9FAFB to #111827

### Typography

- **Font Family**: Inter (primary and headings)
- **Responsive scaling**: From 12px to 48px

### Components

- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Configurable shadow and padding
- **Layout**: Responsive grid system

## 🌐 Features

- ✅ Responsive design (mobile-first)
- ✅ TypeScript support
- ✅ Modern Vue 3 Composition API
- ✅ Tailwind CSS utility classes
- ✅ ESLint + Prettier code formatting
- ✅ Vite for fast development and building
- ✅ Component-based architecture
- ✅ SEO-ready structure

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Quick Deploy to Cloudflare Pages

```bash
# Install Wrangler CLI (first time only)
npm install -g wrangler

# Login to Cloudflare (first time only)
wrangler login

# Deploy to production
npm run deploy

# Deploy to preview environment
npm run deploy:preview
```

### Deployment Options

1. **Automatic via GitHub Actions** (Recommended)
   - Push to `main` branch triggers automatic deployment
   - See [DEPLOYMENT.md](./DEPLOYMENT.md) for setup instructions

2. **Manual via Wrangler CLI**
   - Run `npm run deploy` for production
   - Run `npm run deploy:preview` for preview environment

3. **Using deployment scripts**
   - Windows: `.\deploy.ps1`
   - Mac/Linux: `./deploy.sh`

4. **Via Cloudflare Dashboard**
   - Build: `npm run build`
   - Upload `dist/` folder to Cloudflare Pages

### Deployment Documentation

- 📖 [Complete Deployment Guide](./DEPLOYMENT.md)
- 🚀 [Quick Start Guide](./QUICKSTART.md)
- ⚙️ [Cloudflare Setup](./CLOUDFLARE_SETUP.md)

### Configuration Files

- `wrangler.toml` - Cloudflare Pages configuration
- `public/_redirects` - SPA routing rules
- `public/_headers` - Security headers and caching
- `functions/_middleware.ts` - Edge functions middleware
- `.github/workflows/deploy.yml` - GitHub Actions CI/CD

The project builds to static files in the `dist/` directory and is optimized for Cloudflare Pages with global CDN distribution.

## 📄 License

Private - SolStrategy Corporate Website

---

**SolStrategy** - Professional Investment & Security Consulting  
Headquartered in Singapore