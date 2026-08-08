# Megatha Tech — Website Update Plan
## Bilingual (ID/EN) + Showcase + Pricing Section

Status: planning doc (belum kode). Dipakai sebagai referensi sebelum implementasi ke `megatha-tech-main`.

---

## 1. Strategi Bilingual (ID/EN)

- Default bahasa: **ID** (audiens utama lokal/Bali & Indonesia). Toggle di header untuk switch ke **EN**.
- Simpan semua copy sebagai dictionary per section (mis. `lib/i18n/id.ts` & `lib/i18n/en.ts`), bukan hardcode di tiap komponen.
- Terjemahan harus **lokal, bukan literal** — gaya bicara ID lebih santai/direct, EN lebih formal-tech.
- Skip dulu: geolocation auto-detect, `/en` `/id` subpath routing + hreflang (baru relevan kalau serius push SEO).

---

## 2. Showcase Section — "Apa Aja yang Bisa Kita Buat"

Ditempatkan **setelah** `CapabilitiesSection` (masih fase Solution di funnel). Format: tab per kategori, bukan list 35 item mentah. Klik item → CTA WhatsApp dengan pesan prefilled per aplikasi.

### Kategori 1 — Business Operations
| Aplikasi (EN) | Aplikasi (ID) | Deskripsi singkat (ID) |
|---|---|---|
| Company Profile | Company Profile | Profil perusahaan, portofolio, landing page |
| POS (Point of Sale) | Kasir (POS) | Kasir & transaksi retail/resto |
| Inventory/Warehouse Management | Manajemen Gudang | Stok barang, gudang |
| Accounting/Finance App | Aplikasi Keuangan | Pembukuan, invoice, pajak |
| POS + Inventory Hybrid | Kasir + Stok Hybrid | Kasir sekaligus manajemen stok, biasa buat retail |
| Fleet Management | Manajemen Armada | Manajemen armada kendaraan |

### Kategori 2 — Sales & Customer
| Aplikasi (EN) | Aplikasi (ID) | Deskripsi singkat (ID) |
|---|---|---|
| E-commerce | Toko Online | Toko online, marketplace produk |
| CRM | CRM | Manajemen relasi customer, sales pipeline |
| Chatbot/Customer Service | Chatbot CS | Live chat, AI assistant |
| Ticketing/Helpdesk System | Helpdesk | Support ticket, customer complaint |
| Payment Gateway/Wallet | Payment/Wallet | Dompet digital, transaksi online |
| Auction Platform | Lelang Online | Lelang online |
| Crowdfunding Platform | Crowdfunding | Donasi, penggalangan dana |

### Kategori 3 — People & Organization
| Aplikasi (EN) | Aplikasi (ID) | Deskripsi singkat (ID) |
|---|---|---|
| HRIS/HRM | HRIS/HRM | Manajemen karyawan, payroll, absensi |
| LMS (Learning Management System) | LMS | Platform belajar online, kursus |
| Job Portal | Portal Kerja | Lowongan kerja, CV matching |
| School/Campus Management | Manajemen Sekolah/Kampus | Akademik, nilai, absensi siswa |
| Project Management Tool | Manajemen Proyek | Kanban, task tracking |

### Kategori 4 — Platform & Marketplace
| Aplikasi (EN) | Aplikasi (ID) | Deskripsi singkat (ID) |
|---|---|---|
| Marketplace | Marketplace | Multi-vendor, versi mini Tokopedia/Shopee |
| Booking/Reservation System | Reservasi | Reservasi hotel, tiket, appointment |
| Real Estate Platform | Platform Properti | Listing properti, sewa/jual rumah |
| Rental/Sewa Platform | Platform Sewa | Sewa alat, kendaraan, properti |
| Food Delivery | Pesan Antar Makanan | Pesan antar makanan, tracking order |
| Ride-hailing | Transportasi Online | Transportasi online |
| Multi-tenant SaaS | Multi-tenant SaaS | Aplikasi dijual sebagai layanan ke banyak klien |

### Kategori 5 — Content & Community
| Aplikasi (EN) | Aplikasi (ID) | Deskripsi singkat (ID) |
|---|---|---|
| CMS (Content Management System) | CMS | Blog, portal berita, media |
| Forum/Community Platform | Forum/Komunitas | Diskusi, Q&A |
| Social Media Platform | Platform Media Sosial | Feed, follow, posting |
| News/Media Portal | Portal Berita | Berita, artikel, majalah online |
| Event Management | Manajemen Event | Ticketing, registrasi event |
| Survey/Form Builder | Form Builder | Kuesioner, feedback |

### Kategori 6 — Enterprise & Logistik
| Aplikasi (EN) | Aplikasi (ID) | Deskripsi singkat (ID) |
|---|---|---|
| ERP | ERP | Manajemen resource perusahaan (inventory, akuntansi, HR) |
| Expedisi/Logistik | Expedisi/Logistik | Tracking pengiriman, manajemen kurir & gudang |
| Healthcare/Telemedicine | Telemedicine | Konsultasi dokter online, rekam medis |
| Analytics Dashboard | Dashboard Analitik | Monitoring data & laporan bisnis |

**Kartu penutup di ujung showcase:** "Nggak nemu yang kamu cari? Kita custom build juga →" (CTA ke WhatsApp).

---

## 3. Pricing Section — 4 Tier

Ditempatkan **setelah** `ProcessSection`, **sebelum** `RiskReversalSection`. Semua angka = **placeholder awal**, sesuaikan dengan cost tim/developer real kamu sebelum publish (pakai formula markup yang udah kita bahas: harga jual ≈ cost ÷ 0.45).

| Tier | ID | EN | Contoh aplikasi | Estimasi durasi | Harga (mulai dari, placeholder) | CTA |
|---|---|---|---|---|---|---|
| Starter | Untuk yang mau mulai cepat | For getting started fast | Company profile, landing page, form builder sederhana | 1–3 minggu | Rp 4.500.000 | WA: "Halo, mau tanya paket Starter" |
| Standard | Untuk bisnis yang mulai scale | For scaling businesses | POS, CRM sederhana, booking system, e-commerce basic | 1–2 bulan | Rp 15.000.000 | WA: "Halo, mau tanya paket Standard" |
| Advanced | Untuk sistem kompleks | For complex systems | ERP, marketplace multi-vendor, LMS, ride-hailing | 2–4 bulan+ | Rp 45.000.000 | WA: "Halo, mau tanya paket Advanced" |
| Enterprise/Custom | Kebutuhan khusus | Custom requirements | Multi-tenant SaaS, integrasi banyak platform | Diskusi | Request Quote (tanpa angka) | Calendly: Book a Discovery Call |

**Aturan konten pricing:**
- Jangan pasang harga fix per 35 aplikasi individual.
- Enterprise **tanpa angka sama sekali** — biar nggak jadi patokan nego turun untuk klien besar.
- Tiap tier CTA beda pesan WhatsApp prefilled, biar kamu tahu dari mana leads-nya masuk.
- Tidak perlu kalkulator harga otomatis / payment gateway di tahap ini — tujuan section ini closing ke chat, bukan checkout.

---

## 4. Urutan Layout Final

| # | Section | Status |
|---|---|---|
| 1 | Hero | sudah ada |
| 2 | TechMarquee (trust strip) | sudah ada |
| 3 | PainPoint | sudah ada |
| 4 | Capabilities (3 kategori besar) | sudah ada |
| 5 | **Showcase (35 item, tab 6 kategori)** | baru |
| 6 | Portfolio (proof) | sudah ada |
| 7 | Process | sudah ada |
| 8 | **Pricing (4 tier)** | baru |
| 9 | RiskReversal | sudah ada |
| 10 | Final CTA + Footer | sudah ada |

---

## 5. Do / Don't Ringkas

**Do:**
- Toggle bahasa simpel & persistent di header
- Showcase dikelompokkan per kategori, bukan wall of text
- Pricing pakai range "mulai dari", bukan angka pasti final
- CTA WhatsApp/Calendly berbeda pesan per section/tier

**Don't:**
- Terjemahan literal/Google-translate style
- List 35 aplikasi mentah tanpa pengelompokan
- Harga fix per aplikasi individual
- Payment gateway/checkout di landing page ini