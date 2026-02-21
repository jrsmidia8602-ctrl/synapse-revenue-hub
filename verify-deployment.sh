#!/bin/bash
# Verify project is ready for deployment

echo "🔍 GoldMail AI - Pre-Deployment Verification"
echo "=============================================="
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

errors=0
warnings=0

# Function to check status
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 exists"
    else
        echo -e "${RED}✗${NC} $1 missing"
        errors=$((errors+1))
    fi
}

check_string() {
    if grep -q "$2" "$1"; then
        echo -e "${GREEN}✓${NC} $1 contains '$2'"
    else
        echo -e "${RED}✗${NC} $1 missing '$2'"
        errors=$((errors+1))
    fi
}

check_not_string() {
    if ! grep -q "$2" "$1"; then
        echo -e "${GREEN}✓${NC} $1 does NOT contain '$2'"
    else
        echo -e "${YELLOW}⚠${NC} $1 still contains '$2'"
        warnings=$((warnings+1))
    fi
}

echo "📁 Configuration Files:"
check_file "package.json"
check_file "tsconfig.json"
check_file "vercel.json"
check_file ".env.example"
check_file ".gitignore"
echo ""

echo "📄 Documentation Files:"
check_file "README.md"
check_file "DEPLOYMENT.md"
check_file "DEPLOYMENT_CHECKLIST.md"
check_file "READY_FOR_DEPLOYMENT.md"
check_file "AUTHENTICATION_SYSTEM.md"
echo ""

echo "🗂️  Core Application Files:"
check_file "src/App.tsx"
check_file "src/main.tsx"
check_file "src/pages/Index.tsx"
check_file "src/pages/SandboxPage.tsx"
check_file "src/pages/ApiDocs.tsx"
check_file "src/pages/Auth.tsx"
check_file "src/pages/AccountSettings.tsx"
check_file "src/pages/dashboard/DashboardOverview.tsx"
echo ""

echo "🧹 Cleanup Verification:"
check_not_string "src/App.tsx" "BrainDetail"
check_not_string "src/App.tsx" "Marketplace"
check_not_string "src/App.tsx" "/enterprise"
check_not_string "src/App.tsx" "/overview"
check_not_string "src/pages/Index.tsx" "ModulesSection"
echo ""

echo "🏷️  Branding Verification:"
check_string "src/components/landing/Navbar.tsx" "GoldMail AI"
check_string "src/components/landing/Hero.tsx" "Email Validation"
check_string "src/components/landing/Pricing.tsx" "Plans for Every Business Stage"
echo ""

echo "🔐 Security & Compliance:"
check_file "src/pages/institutional/SecurityPage.tsx"
check_file "src/pages/institutional/PrivacyPolicy.tsx"
check_file "src/pages/institutional/TermsOfService.tsx"
echo ""

echo "📊 Dashboard:"
check_file "src/pages/dashboard/DashboardBilling.tsx"
check_file "src/pages/dashboard/DashboardUsage.tsx"
check_file "src/pages/dashboard/DashboardKeys.tsx"
check_not_string "src/pages/dashboard/DashboardOverview.tsx" "português"
echo ""

echo "📋 Summary:"
echo "=============="
echo -e "Errors:   ${RED}$errors${NC}"
echo -e "Warnings: ${YELLOW}$warnings${NC}"
echo ""

if [ $errors -eq 0 ]; then
    echo -e "${GREEN}✅ Project is ready for deployment!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. git add ."
    echo "2. git commit -m 'feat: restructure Synapse to GoldMail AI standalone SaaS platform'"
    echo "3. git push origin main"
    echo ""
    exit 0
else
    echo -e "${RED}❌ Please fix the errors above before deploying${NC}"
    exit 1
fi
