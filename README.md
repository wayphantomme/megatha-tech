# Megatha Tech — Company Website

Official website for **Megatha Tech**, a software house based in Bali, Indonesia. Built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

Live: [megatha-tech.vercel.app](https://megatha-tech.vercel.app)

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
- **PDF catalog** — downloadable service catalog in footer and services section
- **Floating WhatsApp button**

---

## Analytics & Tracking

| Service | ID / Tag | Status |
|---|---|---|
| Google Tag Manager | `GTM-TGVXDZRZ` | ✅ Active |
| Google Analytics 4 | `G-G2DCXCXDCX` | ✅ Active |
| Google Search Console | `NLaB6g1bAhwifsuvLJEXay6w568aZtoi5WiDPEk7KmA` | ✅ Verified |

GTM and GA4 scripts are injected in `app/layout.tsx` via `next/script` with `strategy="afterInteractive"`.
Search Console verification is handled via the `metadata.verification.google` field in the same file.

---

## SEO Infrastructure

Dokumentasi lengkap tentang apa yang sudah dipasang, fungsinya, dan apa yang masih perlu dilakukan.

---

### ✅ Sudah Diimplementasi

#### 1. Next.js SSR (Server-Side Rendering)
**File:** `app/page.tsx`, semua component

**Fungsi bisnis:** Halaman website dirender di server, bukan di browser pengguna. Artinya saat Google datang crawl, konten halaman sudah siap dibaca — tidak perlu tunggu JavaScript jalan dulu.

**Fungsi teknis:** Next.js App Router menggunakan React Server Components by default. Halaman di-generate saat request masuk, sehingga Google Googlebot dan crawler lain mendapat HTML penuh dengan semua konten teks.

**Kapan ini penting:** Tanpa SSR (misalnya React SPA biasa), Google sering tidak bisa baca konten halaman karena JavaScript belum selesai jalan saat crawler tiba. SSR eliminasi masalah ini.

---

#### 2. Metadata (Title, Description, Keywords)
**File:** `app/layout.tsx` → `export const metadata`

**Fungsi bisnis:** Teks yang muncul di hasil pencarian Google — baris pertama (judul) dan paragraf pendek di bawahnya (deskripsi). Ini yang pertama dilihat calon klien sebelum klik.

**Fungsi teknis:** Next.js `Metadata` API generate tag `<title>`, `<meta name="description">`, `<meta name="keywords">` secara otomatis ke semua halaman.

**Cara update:**
```ts
// app/layout.tsx
export const metadata: Metadata = {
  title: "Judul baru di sini",
  description: "Deskripsi baru di sini",
};
```

---

#### 3. Open Graph Image (OG Image)
**File:** `app/opengraph-image.tsx`
**URL:** `https://megatha-tech.vercel.app/opengraph-image`

**Fungsi bisnis:** Gambar preview yang muncul saat link website dibagikan di WhatsApp, LinkedIn, Twitter, atau platform lain. Tanpa ini, preview hanya teks kosong atau gambar acak.

**Fungsi teknis:** Next.js `ImageResponse` generate gambar PNG 1200×630 secara dinamis di edge runtime. Tidak perlu upload file gambar manual — gambar di-render dari kode setiap request.

**Cara update:** Edit komponen di `app/opengraph-image.tsx` — ubah teks, warna, atau layout sesuai kebutuhan.

---

#### 4. robots.txt
**File:** `app/robots.ts`
**URL:** `https://megatha-tech.vercel.app/robots.txt`

**Fungsi bisnis:** Instruksi untuk semua mesin pencari tentang halaman mana yang boleh dan tidak boleh di-index. Seperti tanda "silakan masuk" atau "dilarang masuk" untuk robot Google.

**Fungsi teknis:** Next.js generate file `robots.txt` otomatis dari `app/robots.ts`. Saat ini semua halaman diizinkan (`allow: /`) dan sitemap URL disertakan.

**Kapan perlu diubah:** Jika ada halaman yang tidak mau diindex (misalnya halaman admin, halaman staging), tambahkan `disallow` di file ini.

---

#### 5. Sitemap XML
**File:** `app/sitemap.ts`
**URL:** `https://megatha-tech.vercel.app/sitemap.xml`

**Fungsi bisnis:** Daftar semua halaman website yang dikirim ke Google. Membantu Google menemukan dan meng-index halaman lebih cepat — terutama penting untuk halaman baru.

**Fungsi teknis:** Next.js generate `/sitemap.xml` otomatis dari array yang dikembalikan `app/sitemap.ts`. Field `lastModified` otomatis pakai tanggal sekarang.

**Cara tambah halaman baru:**
```ts
// app/sitemap.ts
return [
  { url: BASE_URL, priority: 1.0 },
  { url: `${BASE_URL}/blog`, priority: 0.8 },  // ← tambah di sini
];
```

**Setelah deploy:** Submit URL sitemap di Google Search Console → menu Sitemaps.

---

#### 6. Organization Schema (JSON-LD)
**File:** `app/components/OrganizationSchema.tsx`

**Fungsi bisnis:** Data terstruktur yang kasih tahu Google secara eksplisit: ini perusahaan apa, lokasinya di mana, kontaknya apa, dan ada di platform mana. Meningkatkan kemungkinan muncul di Knowledge Panel Google (kotak info di sisi kanan hasil pencarian).

**Fungsi teknis:** JSON-LD `Organization` schema di-inject sebagai `<script type="application/ld+json">` di setiap halaman. Google baca ini terpisah dari konten HTML biasa.

**Cara update:** Edit objek schema di `app/components/OrganizationSchema.tsx` — misalnya tambah nomor telepon baru, update social links, atau tambah layanan baru di `knowsAbout`.

---

### 🔜 Belum Diimplementasi — Roadmap

#### 1. Halaman-halaman Terpisah (Multi-page)
**Prioritas:** Tinggi

**Fungsi bisnis:** Setiap layanan punya halaman sendiri (`/layanan/web-app`, `/layanan/ai-automation`) sehingga bisa muncul di pencarian spesifik seperti "jasa bikin web app Bali" atau "otomasi bisnis Indonesia".

**Kenapa penting:** Saat ini semua konten ada di satu halaman `/`. Google hanya bisa index satu URL, satu keyword utama. Halaman terpisah = lebih banyak entry point dari Google.

---

#### 2. Blog / Artikel
**Prioritas:** Tinggi (untuk SEO jangka panjang)

**Fungsi bisnis:** Artikel seperti "Cara pilih software house yang tepat" atau "Kapan bisnis perlu sistem otomasi" menarik calon klien yang lagi cari informasi — bukan hanya yang sudah siap beli. Ini yang bikin website muncul di ribuan keyword berbeda.

**Fungsi teknis:** Next.js MDX atau CMS (Notion, Sanity, atau Contentful) untuk manage konten artikel. Setiap artikel punya sitemap entry dan metadata sendiri.

---

#### 3. Testimonial / Review Schema
**Prioritas:** Sedang

**Fungsi bisnis:** Ulasan klien yang muncul langsung di hasil pencarian Google — rating bintang di bawah nama website. Meningkatkan click-through rate secara signifikan.

**Fungsi teknis:** `Review` atau `AggregateRating` JSON-LD schema ditambahkan ke halaman.

---

#### 4. FAQ Schema
**Prioritas:** Sedang

**Fungsi bisnis:** Pertanyaan-jawaban yang muncul langsung di Google (expandable accordion di hasil pencarian), tanpa perlu klik masuk website. Meningkatkan visibility dan kepercayaan.

**Fungsi teknis:** `FAQPage` JSON-LD schema. Butuh komponen FAQ section di website terlebih dulu.

---

#### 5. Canonical URL untuk Versi ID/EN
**Prioritas:** Rendah (untuk sekarang)

**Fungsi bisnis:** Memberi tahu Google bahwa versi ID dan EN adalah konten yang sama, bukan duplikasi. Mencegah Google "bingung" dan menurunkan ranking karena dianggap duplicate content.

**Fungsi teknis:** `hreflang` tag dan canonical URL per bahasa. Relevan jika website berkembang ke routing `/id` dan `/en` terpisah.

---

#### 6. Core Web Vitals Optimization
**Prioritas:** Sedang

**Fungsi bisnis:** Google pakai kecepatan dan performa halaman sebagai salah satu faktor ranking. Website yang lambat di mobile bisa diturunkan di hasil pencarian.

**Fungsi teknis:** Audit via Google PageSpeed Insights / Lighthouse. Area yang biasa perlu dioptimasi: image lazy loading, font display swap, bundle size reduction.

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
