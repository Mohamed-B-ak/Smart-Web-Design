# Replit MD

## Overview

Sondos AI is a marketing/product website for an AI-powered call center platform. It's a full-stack application with a React frontend showcasing the product across 14+ pages (homepage, pricing, partner/white-label, 9 industry verticals, blog) and an Express backend that handles contact form submissions. The site supports bilingual content (English and Arabic with RTL support) and uses a light theme with purple accent colors.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **Feb 2026**: Migrated from state-based navigation to wouter routing with 14+ routes
- **Feb 2026**: Created reusable IndustryPage template component for 9 industry verticals
- **Feb 2026**: Built comprehensive Pricing page with 4 plans, savings calculator, and feature comparison table
- **Feb 2026**: Created Partner/White Label page with profit calculator and partnership details
- **Feb 2026**: Updated Hero section with new bilingual content and stats bar
- **Feb 2026**: Added Industries dropdown to Navigation with all 9 industry links
- **Feb 2026**: Switched to light color theme (bg #f8f9fc, purple accent #7c5cfc)
- **Feb 2026**: Added FinalCTA component shared across all pages

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, built using Vite
- **Routing**: wouter-based routing with 14+ routes defined in App.tsx. Routes include: `/` (home), `/pricing`, `/partner`, `/healthcare`, `/ecommerce`, `/call-center`, `/real-estate`, `/services`, `/restaurant`, `/legal`, `/car-dealership`, `/debt-collection`, `/blog`, `/blog/:slug`
- **Styling**: Tailwind CSS with CSS custom properties for theming. Light theme (background: `#f8f9fc`, accent: `#7c5cfc` purple). shadcn/ui components available in `client/src/components/ui/`
- **Component Organization**: 
  - `client/src/sections/` — Full-page sections (Hero, Features, Demo, FAQ, etc.) used on the landing page
  - `client/src/components/` — Reusable components (IndustryPage template, FinalCTA, Navbar, Footer, FeatureCard) and shadcn/ui primitives
  - `client/src/pages/` — Standalone pages (Pricing, Partner, Healthcare, Ecommerce, CallCenter, RealEstate, Services, Restaurant, Legal, CarDealership, DebtCollection)
- **Internationalization**: Custom context-based i18n system (`client/src/context/LanguageContext`) supporting English (`en`) and Arabic (`ar`) with RTL layout support. Translation keys used via `t()` function. Extensive translations for all pages.
- **Animations**: Framer Motion for component animations, plus custom canvas-based particle background (`AnimatedBackground.tsx`). Intersection Observer for scroll-triggered fade-in animations (`.fi` class → `.vis` class)
- **State Management**: TanStack React Query for server state, React local state for UI (pricing toggles, calculator sliders, etc.)
- **Fonts**: Manrope (Latin), IBM Plex Sans Arabic (Arabic), Instrument Sans (headings)
- **Key Components**:
  - `IndustryPage.tsx` — Reusable template for all 9 industry pages (hero, use cases grid, cost comparison, served list, FinalCTA)
  - `FinalCTA.tsx` — Shared call-to-action section at bottom of all pages
  - `Navigation.tsx` — Top nav with Industries dropdown (hover-based), language toggle, mobile menu

### Backend Architecture
- **Framework**: Express 5 on Node.js with TypeScript (run via `tsx`)
- **API Pattern**: RESTful API with a single endpoint currently (`POST /api/contact`)
- **Validation**: Zod schemas shared between client and server via `shared/` directory. `drizzle-zod` generates Zod schemas from database table definitions
- **Storage Layer**: Database storage abstracted through an `IStorage` interface (`server/storage.ts`) with a `DatabaseStorage` implementation
- **Shared Code**: The `shared/` directory contains database schema (`schema.ts`) and API route definitions (`routes.ts`) used by both frontend and backend

### Data Storage
- **Database**: PostgreSQL via `drizzle-orm` with `node-postgres` driver
- **Schema Management**: Drizzle Kit for migrations (`drizzle.config.ts`), push-based schema sync via `npm run db:push`
- **Current Schema**: Single table `contact_requests` with fields: id, name, email, company (optional), message, createdAt
- **Connection**: Uses `DATABASE_URL` environment variable

### Build System
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Vite builds the client to `dist/public`, esbuild bundles the server to `dist/index.cjs`
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

## External Dependencies

### Required Environment Variables
- `DATABASE_URL` — PostgreSQL connection string (required)

### Key NPM Packages
- **Frontend**: React, Vite, TanStack React Query, Framer Motion, shadcn/ui (Radix UI primitives), Tailwind CSS, wouter (routing), lucide-react (icons), react-hook-form with zod resolver, @radix-ui/react-slider
- **Backend**: Express 5, drizzle-orm, node-postgres (pg), zod, drizzle-zod
- **Build**: esbuild (server bundling), tsx (TypeScript execution)

### Third-Party Services
- Google Fonts (Manrope, IBM Plex Sans Arabic, Instrument Sans)
- Unsplash (blog post images, loaded via URL)

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal` — Runtime error overlay
- `@replit/vite-plugin-cartographer` — Dev tooling (dev only)
- `@replit/vite-plugin-dev-banner` — Dev banner (dev only)
