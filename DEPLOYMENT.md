# GoldMail AI - Deployment Guide

## Prerequisites

- GitHub repository connected (linked to Vercel)
- Supabase project configured
- Vercel account

## Step 1: Prepare Environment Variables

### Supabase Setup

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Create a new project or use existing one
3. Copy the following from Project Settings > API:
   - Project URL
   - Anon Key (public, safe to commit to environment variables)

### Store Environment Variables

The variables are already configured in `vercel.json` to use Vercel Secrets:

```
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

## Step 2: Deploy to Vercel

### Option A: Via GitHub Push (Recommended)

1. Ensure all changes are committed locally:
   ```bash
   git add .
   git commit -m "chore: restructure to GoldMail AI SaaS platform"
   git push origin main
   ```

2. Vercel automatically deploys when you push to main branch

3. Monitor deployment in [Vercel Dashboard](https://vercel.com/dashboard)

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

### Option C: Via Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" > "Project"
3. Import GitHub repository
4. Configure build settings (should auto-detect Vite)
5. Add environment variables
6. Click Deploy

## Step 3: Configure Environment Variables in Vercel

1. Go to your Vercel Project > Settings > Environment Variables
2. Add the following:
   - **VITE_SUPABASE_URL**: Your Supabase project URL
   - **VITE_SUPABASE_ANON_KEY**: Your Supabase anon key

3. Make sure variables are available in all environments (Production, Preview, Development)

## Step 4: Custom Domain (Optional)

1. In Vercel Project > Settings > Domains
2. Click "Add Domain"
3. Enter your domain and configure DNS records
4. Vercel will provide DNS instructions

## Verification

After deployment, verify:

- [ ] Landing page loads at `https://your-domain.com`
- [ ] Routing works (try `/docs`, `/pricing`, `/sandbox`)
- [ ] Authentication flow works at `/auth`
- [ ] Protected routes redirect unauthenticated users
- [ ] Email validation sandbox works
- [ ] API documentation loads

## Environment Variables Summary

| Variable | Type | Description |
|----------|------|-------------|
| `VITE_SUPABASE_URL` | Public | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Public | Supabase anonymous key (safe to expose in frontend) |

## Troubleshooting

### Build Fails

- Check Node version: `node --version` (should be 18+)
- Clear cache: `rm -rf node_modules .next dist`
- Reinstall: `npm install`
- Check for TypeScript errors: `npm run build`

### Environment Variables Not Working

- Verify variables are added in Vercel Dashboard
- Ensure variable names match (case-sensitive: `VITE_` prefix)
- Check that variables are enabled for all environments
- Redeploy after adding variables: `vercel --prod --force`

### 404 on Routes

- Check that React Router is configured correctly in `src/App.tsx`
- Verify `vercel.json` exists and routing is configured
- For SPA, ensure rewrites are set up (should be automatic with Vite)

### Supabase Connection Issues

- Verify `VITE_SUPABASE_URL` is correct
- Verify `VITE_SUPABASE_ANON_KEY` is correct
- Test connection locally: `npm run dev`
- Check Supabase project is active and not paused

## Monitoring

After deployment:

1. **Vercel Dashboard**: Monitor performance, deployments, and errors
2. **Supabase Dashboard**: Monitor database, auth, and API usage
3. **Logs**: View deployment logs and errors in Vercel

## Rollback

If deployment fails:

```bash
# Vercel automatically keeps previous deployments
# In Vercel Dashboard > Deployments > select previous deployment > Promote to Production
```

Or via CLI:

```bash
vercel rollback
```

## CI/CD Pipeline

The repository is configured for automatic deployment:

- **Push to `main`**: Automatic production deployment
- **Push to other branches**: Automatic preview deployment
- **Pull Requests**: Preview deployment for review

## Performance Optimization

Vercel automatically optimizes:
- Image optimization
- Code splitting
- Edge caching
- CDN distribution

## Support

- **Vercel Support**: https://vercel.com/help
- **Supabase Support**: https://supabase.com/support
- **GitHub Issues**: Check repository for known issues

## Next Steps

After successful deployment:

1. Configure custom domain
2. Set up monitoring and analytics
3. Configure email notifications for errors
4. Set up backup strategy for database
5. Plan for API rate limiting and scaling
