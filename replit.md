# Replit MD

## Overview

Sondos AI is a marketing/product website for an AI-powered call center platform. It's a full-stack application with a React frontend showcasing the product (hero, features, demos, testimonials, blog, FAQ, contact form) and an Express backend that handles contact form submissions. The site supports bilingual content (English and Arabic with RTL support) and uses a dark theme with purple accent colors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, built using Vite
- **Routing**: The app uses a custom state-based page navigation system (`currentPage` state in App.tsx) for the main landing page sections, plus `wouter` for the Contact page and other standalone pages
- **Styling**: Tailwind CSS with CSS custom properties for theming. The design uses a dark theme (backgrounds: `#09090f` range, accent: `#7c5cfc` purple). shadcn/ui components are available in `client/src/components/ui/`
- **Component Organization**: 
  - `client/src/sections/` — Full-page sections (Hero, Features, Demo, FAQ, etc.) used on the landing page
  - `client/src/components/` — Reusable components (Navbar, Footer, FeatureCard) and shadcn/ui primitives
  - `client/src/pages/` — Standalone pages (Home, Contact, NotFound)
- **Internationalization**: Custom context-based i18n system (`client/src/context/LanguageContext`) supporting English (`en`) and Arabic (`ar`) with RTL layout support. Translation keys are used via a `t()` function
- **Animations**: Framer Motion for component animations, plus a custom canvas-based particle background (`AnimatedBackground.tsx`). Intersection Observer is used for scroll-triggered fade-in animations (`.fi` class → `.vis` class)
- **State Management**: TanStack React Query for server state, React local state for UI
- **Fonts**: Manrope (Latin), IBM Plex Sans Arabic (Arabic), Instrument Sans (headings)

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
- **Frontend**: React, Vite, TanStack React Query, Framer Motion, shadcn/ui (Radix UI primitives), Tailwind CSS, wouter (routing), lucide-react (icons), react-hook-form with zod resolver
- **Backend**: Express 5, drizzle-orm, node-postgres (pg), zod, drizzle-zod
- **Build**: esbuild (server bundling), tsx (TypeScript execution)

### Third-Party Services
- Google Fonts (Manrope, IBM Plex Sans Arabic, Instrument Sans)
- Unsplash (blog post images, loaded via URL)

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal` — Runtime error overlay
- `@replit/vite-plugin-cartographer` — Dev tooling (dev only)
- `@replit/vite-plugin-dev-banner` — Dev banner (dev only)