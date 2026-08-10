# Megatha Tech — Company Website

Official website for [**Megatha Tech**](https://megatha-tech.vercel.app), a software house based in Bali, Indonesia specializing in web app development and business automation.

**Live:** [megatha-tech.vercel.app](https://megatha-tech.vercel.app)

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Updating Copy](#updating-copy)
- [Analytics & Tracking](#analytics--tracking)
- [SEO Infrastructure](#seo-infrastructure)
- [Deployment](#deployment)
- [Contact](#contact)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev) |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) + [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) |
| Images | [Cloudinary](https://cloudinary.com) |
| Deployment | [Vercel](https://vercel.com) |

---

## Features

| Feature | Description |
|---|---|
| Bilingual (ID / EN) | Language toggle in header. All copy managed in `lib/i18n/` — no component changes needed for text updates |
| Dynamic announcement bar | Auto-updates current month and year via `new Date()` — zero manual maintenance |
| Showcase section | 35+ app types across 6 categories. Each item links to WhatsApp with a prefilled message |
| Pricing section | 4 tiers (Starter, Standard, Advanced, Enterprise) each with dedicated WhatsApp or Calendly CTA |
| Process section | 4-step card grid showing how projects run from discovery to launch |
| Client gallery | Masonry grid with show more / show less toggle |
| PDF catalog | Downloadable service catalog available in the Services section and Footer |
| Floating WhatsApp button | Persistent contact button across all sections |

---

## Project Structure

```
megatha-tech/
├── app/
│   ├── components/
│   │   ├── Header.tsx              # Sticky nav, language toggle
│   │   ├── HeroSection.tsx
│   │   ├── TechMarquee.tsx
│   │   ├── PainPointSection.tsx
│   │   ├── CapabilitiesSection.tsx # Services with bilingual tags
│   │   ├── ShowcaseSection.tsx     # 35+ app types, tab UI
│   │   ├── ClientsSection.tsx      # Client gallery, show more
│   │   ├── ProcessSection.tsx      # 4-step process grid
│   │   ├── PricingSection.tsx      # 4 pricing tiers
│   │   ├── RiskReversalSection.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   └── OrganizationSchema.tsx  # JSON-LD structured data
│   ├── page.tsx                    # Section order / page layout
│   ├── layout.tsx                  # Root layout, metadata, GTM, GA4
│   ├── Providers.tsx               # LanguageProvider wrapper
│   ├── sitemap.ts                  # Auto-generates /sitemap.xml
│   ├── robots.ts                   # Auto-generates /robots.txt
│   ├── opengraph-image.tsx         # Auto-generates OG preview image
│   └── globals.css                 # Design tokens, Tailwind base
│
├── lib/
│   ├── LanguageContext.tsx         # ID/EN state + useLanguage hook
│   └── i18n/
│       ├── types.ts                # Dict interface (type contract)
│       ├── id.ts                   # Indonesian copy
│       ├── en.ts                   # English copy
│       └── index.ts                # Re-exports
│
└── public/
    ├── Megatha-Logo-Black.svg
    ├── Megatha-Logo-White.svg
    └── Megatha-Tech-Katalog-Layanan.pdf
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## Updating Copy

All website text lives in two files:

| Language | File |
|---|---|
| Indonesian | `lib/i18n/id.ts` |
| English | `lib/i18n/en.ts` |

Edit the relevant key and the change reflects everywhere that key is used — no component changes needed. The type contract in `lib/i18n/types.ts` ensures both files stay in sync.

The announcement bar month label auto-updates via `new Date().toLocaleString()` — no manual edits required.

---

## Analytics & Tracking

| Service | ID / Tag | Status | Docs |
|---|---|---|---|
| Google Tag Manager | `GTM-TGVXDZRZ` | ✅ Active | [gtm.google.com](https://tagmanager.google.com) |
| Google Analytics 4 | `G-G2DCXCXDCX` | ✅ Active | [analytics.google.com](https://analytics.google.com) |
| Google Search Console | `NLaB6g1bAhwifsuvLJEXay6w568aZtoi5WiDPEk7KmA` | ✅ Verified | [search.google.com/search-console](https://search.google.com/search-console) |

**Implementation details:**
- GTM and GA4 scripts → `app/layout.tsx` via [`next/script`](https://nextjs.org/docs/app/building-your-application/optimizing/scripts) with `strategy="afterInteractive"` (non-blocking)
- GTM noscript fallback → `<noscript>` iframe immediately after `<body>`
- Search Console verification → `metadata.verification.google` in `app/layout.tsx`

---

## SEO Infrastructure

### ✅ Implemented

#### Next.js SSR
**What it does:** Pages are rendered on the server, so search engine crawlers receive complete HTML — not a blank page waiting for JavaScript.

**Why it matters:** Without SSR (e.g. plain React SPA), Google often can't read page content because JS hasn't run yet when the crawler arrives. SSR eliminates this problem entirely.

**File:** All components in `app/` — default behavior of Next.js App Router.

---

#### Metadata (Title, Description, Keywords)
**What it does:** Controls the title and description snippet shown in Google search results — the first thing a potential client sees before clicking.

**Why it matters:** A relevant, keyword-rich description increases click-through rate from search results.

**File:** `app/layout.tsx` → `export const metadata`

**How to update:**
```ts
export const metadata: Metadata = {
  title: "Your new title",
  description: "Your new description",
};
```

**Docs:** [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

---

#### Open Graph Image
**What it does:** The preview image shown when the website link is shared on WhatsApp, LinkedIn, Twitter, and other platforms.

**Why it matters:** Without an OG image, shared links show a blank preview or a random screenshot — significantly less engaging.

**File:** `app/opengraph-image.tsx`
**Live URL:** [megatha-tech.vercel.app/opengraph-image](https://megatha-tech.vercel.app/opengraph-image)

Uses Next.js [`ImageResponse`](https://nextjs.org/docs/app/api-reference/file-conventions/opengraph-image) to generate a 1200×630 PNG at runtime — no manual image upload needed.

---

#### robots.txt
**What it does:** Tells all search engine crawlers which pages they are allowed to index. Also points them to the sitemap.

**Why it matters:** Without this file, some crawlers may skip the site or behave unexpectedly.

**File:** `app/robots.ts`
**Live URL:** [megatha-tech.vercel.app/robots.txt](https://megatha-tech.vercel.app/robots.txt)

**Docs:** [Next.js robots.txt](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)

---

#### Sitemap XML
**What it does:** A structured list of all pages on the website, submitted to Google so it knows what to crawl and index.

**Why it matters:** Speeds up indexing, especially for new pages. Required for proper Search Console monitoring.

**File:** `app/sitemap.ts`
**Live URL:** [megatha-tech.vercel.app/sitemap.xml](https://megatha-tech.vercel.app/sitemap.xml)

**How to add a new page:**
```ts
// app/sitemap.ts
return [
  { url: BASE_URL, priority: 1.0 },
  { url: `${BASE_URL}/blog`, priority: 0.8 }, // add here
];
```

**After deploying:** Submit `sitemap.xml` in [Google Search Console → Sitemaps](https://search.google.com/search-console).

**Docs:** [Next.js sitemap.xml](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)

---

#### Organization Schema (JSON-LD)
**What it does:** Structured data that tells Google explicitly: what this company is, where it's located, how to contact it, and where it exists online.

**Why it matters:** Increases the chance of appearing in Google's Knowledge Panel (the info box on the right side of search results). Also improves how Google understands and categorizes the business.

**File:** `app/components/OrganizationSchema.tsx`

Injected as `<script type="application/ld+json">` on every page.

**How to update:** Edit the schema object in `OrganizationSchema.tsx` — e.g. add new services to `knowsAbout`, update social links in `sameAs`.

**Docs:** [Schema.org Organization](https://schema.org/Organization) · [Google Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)

---

### 🔜 Planned

| Feature | Priority | What it unlocks |
|---|---|---|
| **Dedicated service pages** (`/services/web-app`, etc.) | High | Each service can rank for its own search keywords independently |
| **Blog / articles** | High | Long-term SEO traffic from informational searches ("how to choose a software house") |
| **Review / Testimonial schema** | Medium | Star ratings shown directly in Google search results |
| **FAQ schema** | Medium | Expandable Q&A accordion in search results without clicking through |
| **hreflang for ID/EN** | Low | Tells Google both languages are the same site, not duplicate content |
| **Core Web Vitals audit** | Medium | Google uses page speed as a ranking factor — especially on mobile |

---

## Deployment

The site deploys automatically to [Vercel](https://vercel.com) on every push to `main`.

```bash
npm run build   # verify build passes locally before pushing
```

Set environment variables in the [Vercel dashboard](https://vercel.com/dashboard) under Project → Settings → Environment Variables.

---

## Contact

**Megatha Tech** — Software House, Bali, Indonesia

| Channel | Link |
|---|---|
| WhatsApp | [+62 896 8807 2039](https://wa.me/6289688072039) |
| Email | [wayanphantomme@gmail.com](mailto:wayanphantomme@gmail.com) |
| Instagram | [@megatha.tech](https://www.instagram.com/megatha.tech/) |
| LinkedIn | [megathatech](http://linkedin.com/company/megathatech/) |
| Twitter / X | [@megathatech](https://x.com/megathatech) |
| GitHub | [wayphantomme](https://github.com/wayphantomme) |
