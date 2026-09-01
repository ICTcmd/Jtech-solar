# Deployment Guide - JTech Solar-Pro

This guide walks you through deploying the JTech Solar-Pro website to GitHub and Vercel.

## 📋 Prerequisites

- [x] Git installed (verified: v2.55.0)
- [ ] GitHub account (create at https://github.com/signup)
- [ ] Vercel account (create at https://vercel.com/signup)

## 🚀 Step 1: Push to GitHub

### Option A: Using GitHub CLI (Recommended)

If you have GitHub CLI installed:

```bash
# Login to GitHub
gh auth login

# Create a new repository
gh repo create jtech-solar-pro --public --source=. --remote=origin --push

# Done! Your code is now on GitHub
```

### Option B: Using GitHub Web Interface (Manual)

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `jtech-solar-pro`
   - Description: `High-end residential solar company website with Next.js, TypeScript, and Tailwind CSS`
   - Visibility: Public (or Private if you prefer)
   - ❌ Do NOT initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Connect your local repository to GitHub:**

```bash
# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/jtech-solar-pro.git

# Push your code
git branch -M main
git push -u origin main
```

3. **Verify on GitHub:**
   - Navigate to `https://github.com/YOUR_USERNAME/jtech-solar-pro`
   - You should see all 41 files

## 🌐 Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**

```bash
npm install -g vercel
```

2. **Deploy:**

```bash
# Login to Vercel
vercel login

# Deploy (follow the prompts)
vercel

# For production deployment
vercel --prod
```

### Option B: Using Vercel Web Interface (Easiest)

1. **Go to Vercel:**
   - Navigate to https://vercel.com/new
   - Click "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

2. **Import your repository:**
   - Find `jtech-solar-pro` in the list
   - Click "Import"

3. **Configure project:**
   - **Project Name:** `jtech-solar-pro` (or your preferred name)
   - **Framework Preset:** Next.js (should auto-detect)
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)
   - **Install Command:** `npm install` (auto-filled)

4. **Environment Variables (if needed):**
   - Currently no environment variables required
   - Add any future API keys here

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `https://jtech-solar-pro-xxx.vercel.app`

## ✅ Post-Deployment Checklist

After deployment, verify:

- [ ] Home page loads correctly
- [ ] Hero section displays with gradient background
- [ ] Trust badge is visible
- [ ] Roof estimator is interactive (3 steps work)
- [ ] Energy visualizer loads
- [ ] Day/Night toggle switches modes
- [ ] Animated particles flow along paths
- [ ] All metrics display correctly
- [ ] Responsive design works on mobile
- [ ] No console errors

## 🔧 Vercel Configuration

### Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `jtechsolar.com`)
3. Follow DNS configuration instructions
4. Wait for DNS propagation (5-60 minutes)

### Environment Variables

Currently, no environment variables are required. In the future, add:

- API keys for contact form
- Analytics tracking IDs
- CMS credentials
- Any other sensitive data

**Add via:**
- Vercel Dashboard → Project → Settings → Environment Variables
- Or via `vercel env add`

### Build Settings

Current optimal settings:
- **Node.js Version:** 18.x (or latest LTS)
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### Performance Optimizations

Vercel automatically provides:
- ✅ Global CDN distribution
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Edge caching
- ✅ Gzip/Brotli compression
- ✅ HTTP/2 support

## 📊 Expected Build Output

```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (4/4)
✓ Finalizing page optimization

Route (app)                   Size      First Load JS
┌ ○ /                         6.41 kB   109 kB
└ ○ /_not-found              995 B      104 kB

○  (Static)  prerendered as static content
```

**Total Build Time:** ~2-3 minutes  
**Deployment Time:** ~30 seconds  

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:

1. **Make changes locally**
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. **Vercel auto-deploys** (triggered by GitHub push)
4. **Check deployment status** at https://vercel.com/dashboard

### Branch Deployments

Every branch and PR gets its own preview URL:
- `main` branch → Production: `jtech-solar-pro.vercel.app`
- `feature-x` branch → Preview: `jtech-solar-pro-git-feature-x.vercel.app`

## 🐛 Troubleshooting

### Build Fails on Vercel

**Check:**
1. Build logs in Vercel dashboard
2. Ensure `package.json` dependencies are correct
3. Run `npm run build` locally first
4. Check Node.js version compatibility

**Common Issues:**
- Missing dependencies → Add to `package.json`
- TypeScript errors → Fix locally first
- Environment variables → Add in Vercel settings

### Page Not Loading

**Check:**
1. Vercel deployment status (should show "Ready")
2. Browser console for errors
3. Network tab for failed requests
4. Vercel function logs for SSR errors

### Images Not Displaying

**Fix:**
1. Move images to `public/` folder
2. Reference as `/image.jpg` (not `./image.jpg`)
3. Use Next.js `<Image>` component
4. Check image format support (jpg, png, webp, svg)

### Slow Performance

**Optimize:**
1. Enable Vercel Analytics
2. Check Lighthouse scores
3. Optimize images with Next.js Image
4. Enable lazy loading
5. Check bundle size

## 📱 Mobile Testing

Test on real devices or use:
- Chrome DevTools (F12 → Device toolbar)
- https://www.browserstack.com/
- https://www.lambdatest.com/

## 🔒 Security

Vercel provides:
- ✅ Automatic HTTPS (SSL/TLS)
- ✅ DDoS protection
- ✅ Security headers
- ✅ Password protection (Pro/Enterprise)

## 📈 Analytics

Enable Vercel Analytics:
1. Go to Project → Analytics
2. Enable "Vercel Analytics"
3. Add to your site:
   ```tsx
   import { Analytics } from '@vercel/analytics/react'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   ```

## 🎯 Next Steps

After successful deployment:

1. **Share the URL** with stakeholders
2. **Set up custom domain** (if applicable)
3. **Enable analytics** to track performance
4. **Continue development:**
   - Task 6: Hardware Specification Grid
   - Task 7: Slide-Over Specification Drawer
   - Task 8: Savings Slider
   - Task 9: Lead Capture Form
   - Task 10: Footer

5. **Future enhancements:**
   - Connect contact form to email service
   - Add Google Analytics
   - Integrate CMS for content management
   - Add blog section
   - Implement A/B testing

## 📞 Support

**Vercel Support:**
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/next.js/discussions
- Email: support@vercel.com

**GitHub Support:**
- Documentation: https://docs.github.com
- Community: https://github.community

## 🎉 Success!

Your JTech Solar-Pro website is now live!

**What you've deployed:**
- ✅ Modern Next.js 15 application
- ✅ Interactive Hero section
- ✅ 3-step Roof Potential Calculator
- ✅ Animated Energy Flow Visualizer
- ✅ Fully responsive design
- ✅ TypeScript type safety
- ✅ Tailwind CSS styling
- ✅ Optimized for performance

**Share your site:**
- Production URL: `https://your-site.vercel.app`
- GitHub Repository: `https://github.com/YOUR_USERNAME/jtech-solar-pro`

Congratulations! 🎊
