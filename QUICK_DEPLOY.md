# Quick Deploy Guide

## 🚀 Fast Track: Get Your Site Live in 10 Minutes

Follow these steps to deploy your JTech Solar-Pro website to GitHub and Vercel.

---

## Step 1: Create GitHub Repository (2 minutes)

1. **Go to GitHub:**
   - Open https://github.com/new in your browser
   - Log in if needed

2. **Create repository:**
   - **Repository name:** `jtech-solar-pro`
   - **Description:** `High-end residential solar company website`
   - **Visibility:** ✅ Public
   - **Important:** ❌ Do NOT check any boxes (no README, no .gitignore, no license)
   - Click **"Create repository"**

3. **Copy your repository URL:**
   - You'll see: `https://github.com/YOUR_USERNAME/jtech-solar-pro.git`
   - Keep this page open!

---

## Step 2: Push Your Code to GitHub (1 minute)

**Run these commands in your terminal (PowerShell):**

```powershell
# Make sure you're in the project directory
cd "C:\Users\OJTBEEG\Desktop\jtech solar website"

# Add GitHub as the remote (REPLACE YOUR_USERNAME!)
git remote add origin https://github.com/YOUR_USERNAME/jtech-solar-pro.git

# Rename branch to main
git branch -M main

# Push your code
git push -u origin main
```

**If prompted for credentials:**
- Username: Your GitHub username
- Password: Use a [Personal Access Token](https://github.com/settings/tokens) (NOT your password)

**Verify:** Refresh your GitHub page - you should see all your files!

---

## Step 3: Deploy to Vercel (5 minutes)

### First Time Setup:

1. **Go to Vercel:**
   - Open https://vercel.com/signup
   - Click **"Continue with GitHub"**
   - Authorize Vercel to access your repositories

### Deploy Your Site:

2. **Import Project:**
   - Go to https://vercel.com/new
   - Find **"jtech-solar-pro"** in the list
   - Click **"Import"**

3. **Configure (keep defaults):**
   - Project Name: `jtech-solar-pro` ✅
   - Framework: Next.js ✅ (auto-detected)
   - Root Directory: `./` ✅
   - Build Command: Auto-filled ✅
   - Click **"Deploy"**

4. **Wait for build:**
   - Takes 2-3 minutes
   - Watch the build logs (optional)
   - ✅ Success message appears

5. **Get your URL:**
   - Vercel gives you: `https://jtech-solar-pro-xxx.vercel.app`
   - Click **"Visit"** to see your live site!

---

## ✅ Verification Checklist

Visit your Vercel URL and check:

- [ ] Hero section loads with gradient background
- [ ] "NEXT-GEN RESIDENTIAL SOLAR" badge is visible
- [ ] Roof estimator is interactive
  - [ ] ZIP code input works
  - [ ] Bill slider moves
  - [ ] Roof orientation cards are clickable
  - [ ] Results display with savings estimate
- [ ] Energy visualizer loads
  - [ ] Day/Night toggle switches modes
  - [ ] Animated particles flow (look for emerald glowing dots)
  - [ ] Metrics update when switching modes
- [ ] Everything is responsive (try resizing browser)

---

## 🎉 You're Live!

**Your site is now publicly accessible at:**
```
https://jtech-solar-pro-xxx.vercel.app
```

**GitHub Repository:**
```
https://github.com/YOUR_USERNAME/jtech-solar-pro
```

---

## 📝 Future Updates

To update your site:

1. **Make changes locally**
2. **Commit and push:**
   ```powershell
   git add .
   git commit -m "Updated hero section"
   git push
   ```
3. **Vercel automatically rebuilds** (2-3 minutes)
4. **Check your site** - changes are live!

---

## 🆘 Troubleshooting

### "Permission denied" when pushing to GitHub
**Solution:** You need a Personal Access Token
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Check "repo" scope
4. Generate and copy the token
5. Use this token as your password when pushing

### Build fails on Vercel
**Solution:** Check the build logs
1. Click "View Build Logs" on Vercel
2. Look for the error message
3. Most common: Missing dependencies or TypeScript errors
4. Fix locally, commit, and push again

### Page doesn't load correctly
**Solution:** Check browser console
1. Press F12 to open DevTools
2. Look for errors in Console tab
3. Common issues:
   - Missing images (move to `public/` folder)
   - JavaScript errors (fix in code)
   - Network errors (check Vercel logs)

### Site is slow
**Solution:** Use Vercel Analytics
1. Go to Project → Analytics in Vercel
2. Enable Vercel Analytics
3. Monitor performance metrics
4. Optimize images and code as needed

---

## 🎯 Next Steps

Now that your site is live:

1. **Share it!** Send the URL to clients, team members, etc.
2. **Add a custom domain** (optional)
   - Go to Vercel → Project → Settings → Domains
   - Follow instructions to connect your domain
3. **Continue development:**
   - Work on Tasks 6-10 (Hardware grid, Savings slider, etc.)
   - Push updates to see them live automatically
4. **Monitor performance:**
   - Enable Vercel Analytics
   - Check load times
   - Test on real devices

---

## 💡 Pro Tips

- **Preview deployments:** Every branch gets its own URL for testing
- **Rollbacks:** Can revert to any previous deployment in seconds
- **Environment variables:** Add in Vercel Settings for API keys
- **Custom domains:** Free HTTPS certificates included
- **Analytics:** Enable Vercel Analytics to track visitors

---

## 📚 Learn More

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs

---

## 🎊 Congratulations!

You've successfully deployed a modern, production-ready website with:
- Interactive UI components
- Smooth animations
- Responsive design
- Type-safe TypeScript code
- Automated deployments

**Well done!** 🚀
