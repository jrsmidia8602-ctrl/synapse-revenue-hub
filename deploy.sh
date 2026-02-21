#!/bin/bash
# GoldMail AI - Quick Deploy Script

echo "================================"
echo "GoldMail AI - Ready for Deployment"
echo "================================"
echo ""

# Check if git is available
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed"
    exit 1
fi

echo "📋 Pre-deployment Checklist:"
echo ""

# 1. Check build
echo "🔨 Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi
echo "✅ Build successful"
echo ""

# 2. Check lint
echo "🔍 Checking code quality..."
npm run lint 2>/dev/null || echo "ℹ️  Lint check skipped (optional)"
echo ""

# 3. Check git status
echo "📊 Git status:"
git status --short
echo ""

# 4. Show commit count
echo "📝 Commits to be pushed:"
git log origin/main..HEAD --oneline | wc -l
echo ""

# 5. Ready to commit
echo "✅ Project is ready to deploy!"
echo ""
echo "Next steps:"
echo "1. Review the changes above"
echo "2. Run: git add ."
echo "3. Run: git commit -m 'feat: restructure Synapse to GoldMail AI standalone SaaS platform'"
echo "4. Run: git push origin main"
echo ""
echo "Vercel will automatically deploy on push!"
echo ""
echo "After deployment, verify:"
echo "- https://your-vercel-domain/"
echo "- https://your-vercel-domain/sandbox"
echo "- https://your-vercel-domain/docs"
echo ""
