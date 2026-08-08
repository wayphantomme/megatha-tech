# Megatha Tech — Company Website

Official website for **Megatha Tech**, a software house based in Bali, Indonesia. Built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

Live: [megatha.tech](https://megatha.tech)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter + Plus Jakarta Sans (Google Fonts)
- **Images:** Cloudinary

---

## Features

- **Bilingual (ID / EN)** — language toggle in header, all copy managed via `lib/i18n/`
- **Dynamic announcement bar** — auto-updates month/year, no manual edits needed
- **Showcase section** — 35+ app types across 6 categories, each with prefilled WhatsApp CTA
- **Pricing section** — 4 tiers (Starter, Standard, Advanced, Enterprise) with per-tier WA/Calendly CTAs
- **Process section** — horizontal 4-card stepper
- **Client gallery** — masonry grid with show more/less
- **PDF catalog** — downloadable service catalog in footer
- **Floating WhatsApp button**

---

## Project Structure

```
app/
├── components/          # All page sections
│   ├── Header.tsx       # Sticky nav with lang toggle
│   ├── HeroSection.tsx
│   ├── TechMarquee.tsx
│   ├── PainPointSection.tsx
│   ├── CapabilitiesSection.tsx
│   ├── ShowcaseSection.tsx
│   ├── ClientsSection.tsx
│   ├── ProcessSection.tsx
│   ├── PricingSection.tsx
│   ├── RiskReversalSection.tsx
│   ├── Footer.tsx
│   └── FloatingWhatsApp.tsx
├── page.tsx             # Page layout / section order
├── layout.tsx           # Root layout, fonts, metadata
├── Providers.tsx        # LanguageProvider wrapper
└── globals.css          # Design tokens, Tailwind utilities

lib/
├── LanguageContext.tsx  # Language state (ID/EN) + useLanguage hook
└── i18n/
    ├── types.ts         # Dict interface
    ├── id.ts            # Indonesian copy
    ├── en.ts            # English copy
    └── index.ts         # Re-exports

public/
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

Create `.env.local`:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## Adding / Updating Copy

All text content lives in `lib/i18n/id.ts` (Indonesian) and `lib/i18n/en.ts` (English). Edit the relevant key — no component changes needed for copy updates.

The announcement bar month auto-updates via `new Date().toLocaleString()` — no manual edits required.

---

## Deployment

Recommended: [Vercel](https://vercel.com). Connect the repo and set environment variables in the Vercel dashboard.

```bash
npm run build   # verify build locally before deploying
```

---

## Contact

**Megatha Tech**
- WhatsApp: [+62 896 8807 2039](https://wa.me/6289688072039)
- Email: wayanphantomme@gmail.com
- Instagram: [@megatha.tech](https://www.instagram.com/megatha.tech/)
- LinkedIn: [megathatech](http://linkedin.com/company/megathatech/)
