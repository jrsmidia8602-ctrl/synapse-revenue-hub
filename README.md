# GoldMail AI - Enterprise Email Validation SaaS

**Powered by XPEX SYSTEMS AI**

GoldMail AI is an enterprise-grade email validation platform delivering real-time API access, credit-based pricing, and intelligent email intelligence scoring at scale.

## Project Structure

```
src/
├── pages/
│   ├── Index.tsx                    # Landing page
│   ├── Auth.tsx                     # Authentication
│   ├── ApiDocs.tsx                  # API documentation
│   ├── SandboxPage.tsx              # Public email validation sandbox
│   ├── AccountSettings.tsx          # User account management
│   ├── NotFound.tsx                 # 404 page
│   ├── dashboard/                   # Protected dashboard routes
│   │   ├── DashboardOverview.tsx    # Email validation metrics
│   │   ├── DashboardUsage.tsx       # API usage analytics
│   │   ├── DashboardBilling.tsx     # Billing management
│   │   └── DashboardKeys.tsx        # API key management
│   └── institutional/               # Legal and info pages
│       ├── PricingPage.tsx          # Pricing (redirects to /#pricing)
│       ├── SecurityPage.tsx         # Security & compliance
│       ├── PrivacyPolicy.tsx        # Privacy policy
│       ├── TermsOfService.tsx       # Terms of service
│       └── ApiPage.tsx              # API redirect (to /docs)
├── components/
│   ├── landing/                     # Landing page components
│   ├── dashboard/                   # Dashboard components
│   ├── ui/                          # shadcn/ui components
│   └── ProtectedRoute.tsx           # Auth guard component
├── contexts/
│   └── AuthContext.tsx              # Authentication context
├── integrations/
│   └── supabase/                    # Supabase integration
├── App.tsx                          # Main app routing
└── index.css                        # Global styles
```

## Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm/yarn
- Supabase account for authentication and database

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd synapse-revenue-hub

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials
```

### Environment Variables

Create a `.env.local` file with the following:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

Production build output goes to `dist/`

## Technologies

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Database**: Supabase (PostgreSQL)
- **Forms**: React Hook Form + Zod
- **Data Fetching**: TanStack Query (React Query)
- **Charts**: Recharts
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Notifications**: Sonner

## Key Features

- **Real-time Email Validation**: Production-grade API with 99.9% uptime SLA
- **Public Sandbox**: Test email validation without authentication
- **API Documentation**: Interactive endpoint documentation with live examples
- **Credit-based Billing**: Transparent pricing with usage tracking
- **Dashboard**: Real-time metrics, usage analytics, and API key management
- **Enterprise Security**: Encryption, role-based access, compliance ready

## Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Public | Landing page |
| `/auth` | Public | Login & signup |
| `/sandbox` | Public | Email validation sandbox (no auth required) |
| `/docs` | Public | API documentation |
| `/pricing` | Public | Pricing page |
| `/security` | Public | Security & compliance info |
| `/privacy-policy` | Public | Privacy policy |
| `/terms-of-service` | Public | Terms of service |
| `/dashboard` | Protected | User dashboard overview |
| `/dashboard/usage` | Protected | API usage analytics |
| `/dashboard/billing` | Protected | Billing management |
| `/dashboard/keys` | Protected | API key management |
| `/account-settings` | Protected | Account settings |

## Deployment

### Deploy to Vercel

1. Push changes to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Import the repository
4. Set environment variables in Settings > Environment Variables
5. Deploy!

```bash
# Or deploy via CLI
npm i -g vercel
vercel
```

### Environment Setup on Vercel

Add these environment variables in Vercel Project Settings:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Development Workflow

1. Create a feature branch: `git checkout -b feature/description`
2. Make changes and test locally: `npm run dev`
3. Build for production: `npm run build`
4. Commit changes: `git commit -am "Description"`
5. Push to GitHub: `git push origin feature/description`
6. Create Pull Request
7. Vercel will automatically create a preview deployment

## API Integration

The app integrates with Supabase for:
- User authentication
- API key management
- Usage logging
- Billing and credits tracking
- Email validation processing

All API calls use authenticated Supabase client configured in `src/integrations/supabase/client.ts`

## Building & Testing

```bash
# Run TypeScript check
npm run type-check

# Run linter
npm run lint

# Run tests
npm run test

# Watch mode for tests
npm run test:watch
```

## Support

For issues, feature requests, or questions:
- Check existing issues on GitHub
- Create a new issue with detailed description
- Contact: support@goldmail.ai

## License

Proprietary - XPEX SYSTEMS AI
