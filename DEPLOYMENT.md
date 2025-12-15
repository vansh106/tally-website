# Deployment Guide

This guide covers deploying your Tech Account website to various platforms.

## 🚀 Vercel (Recommended)

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project or create new
   - Confirm settings (should auto-detect Vite)
   - Deploy!

4. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub (Recommended for CI/CD)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Automatic deployments**:
   - Every push to `main` branch = production deployment
   - Every pull request = preview deployment

## 🌐 Netlify

You already have a `netlify.toml` file configured!

### Option 1: Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   ```

2. **Login**:
   ```bash
   netlify login
   ```

3. **Deploy**:
   ```bash
   netlify deploy
   ```
   
   For production:
   ```bash
   netlify deploy --prod
   ```

### Option 2: Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Drag and drop your `dist` folder, OR
4. Connect to GitHub for automatic deployments

## 📦 Build Locally First (Optional)

Test your build before deploying:

```bash
npm install
npm run build
npm run preview
```

This will:
- Install dependencies
- Build the project to `dist/` folder
- Preview the production build locally

## 🔧 Configuration Files

- **`vercel.json`**: Vercel deployment configuration
- **`netlify.toml`**: Netlify deployment configuration
- **`vite.config.ts`**: Vite build configuration

## 📝 Environment Variables

If you need environment variables:

### Vercel:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

### Netlify:
1. Go to Site Settings → Environment Variables
2. Add your variables
3. Redeploy

## 🎯 Quick Deploy Commands

```bash
# Build locally
npm run build

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod
```

## ✅ Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify logo displays properly
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify contact forms/links work
- [ ] Check console for errors
- [ ] Test on different browsers

## 🆘 Troubleshooting

### Build fails:
- Check Node version (should be 18+)
- Run `npm install` locally first
- Check for TypeScript errors: `npm run lint`

### Logo not showing:
- Ensure logo is in `public/` folder
- Check path in Navbar component
- Clear browser cache

### 404 errors on routes:
- Ensure SPA rewrite rules are configured (already in vercel.json)

