import type { Dict } from "./types";

export const id: Dict = {
  announcement: {
    text: "Slot Development {month} Sudah Dibuka.",
    highlight: "Hanya tersisa 2 slot bulan ini.",
    cta: "Amankan sekarang →",
  },

  header: {
    bookCall: "Book a Call",
    langToggle: "EN",
  },

  hero: {
    badge: "Software House · Bali, Indonesia",
    h1Part1: "Ide bisnis kamu",
    h1Highlight: "layak punya software",
    h1Part2: "yang benar-benar bekerja.",
    sub: "Kami bangun web app, sistem otomasi, dan platform digital dari nol sampai live. Tepat waktu, harga transparan, tanpa ribet.",
    ctaPrimary: "Mulai Proyek Kamu",
    ctaSecondary: "Lihat Layanan",
    integrateWith: "Terintegrasi dengan",
    stats: [
      { stat: "20+", label: "Produk Diluncurkan" },
      { stat: "4 minggu", label: "Rata-rata Pengiriman" },
      { stat: "100%", label: "Dilindungi NDA" },
      { stat: "5+", label: "Negara Terlayani" },
    ],
  },

  painPoint: {
    words: [
      { text: "Bosan" },
      { text: "nguber" },
      { text: "developer" },
      { text: "tapi" },
      { text: "deadline", dim: true },
      { text: "tetap", dim: true },
      { text: "meleset?", dim: true },
    ],
  },

  capabilities: {
    eyebrow: "layanan kami",
    h2: "Automate. Build. Scale.",
    sub: "Kami bantu bisnis kamu berjalan lebih efisien lewat teknologi yang tepat — bukan sekadar kode, tapi solusi yang beneran kepake.",
    learnMore: "Pelajari Lebih",
  },

  showcase: {
    eyebrow: "apa yang bisa kita buat",
    h2: "35+ Jenis Aplikasi yang Bisa Kami Bangun",
    sub: "Dari website profil perusahaan sampai platform bisnis skala besar. Klik item untuk tanya langsung via WhatsApp.",
    ctaCustom: "Nggak nemu yang kamu cari? Kita custom build juga →",
    waPrefix: "Halo, saya tertarik bikin",
    tabs: [
      {
        key: "business",
        label: "Operasional Bisnis",
        items: [
          { name: "Company Profile", desc: "Website resmi perusahaan, portofolio, atau landing page" },
          { name: "Kasir (POS)", desc: "Aplikasi kasir untuk toko retail, kafe, atau restoran" },
          { name: "Manajemen Gudang", desc: "Pantau stok barang dan kelola gudang lebih mudah" },
          { name: "Aplikasi Keuangan", desc: "Catat pemasukan, buat invoice, dan kelola pajak" },
          { name: "Kasir + Stok Hybrid", desc: "Kasir dan manajemen stok dalam satu sistem" },
          { name: "Manajemen Armada", desc: "Kelola kendaraan operasional bisnis kamu" },
        ],
      },
      {
        key: "sales",
        label: "Penjualan & Pelanggan",
        items: [
          { name: "Toko Online", desc: "Jual produk secara online lewat website sendiri" },
          { name: "CRM", desc: "Kelola data dan hubungan dengan pelanggan dalam satu tempat" },
          { name: "Chatbot CS", desc: "Layani pelanggan otomatis 24 jam dengan AI" },
          { name: "Helpdesk", desc: "Sistem tiket untuk menangani keluhan pelanggan" },
          { name: "Payment / Dompet Digital", desc: "Terima pembayaran online dengan aman" },
          { name: "Lelang Online", desc: "Platform lelang produk secara digital" },
          { name: "Crowdfunding", desc: "Galang dana atau donasi dari publik secara online" },
        ],
      },
      {
        key: "people",
        label: "SDM & Organisasi",
        items: [
          { name: "HRIS / HRM", desc: "Kelola karyawan, gaji, dan absensi dalam satu aplikasi" },
          { name: "LMS", desc: "Platform pelatihan dan kursus online untuk tim atau publik" },
          { name: "Portal Kerja", desc: "Platform lowongan kerja dan rekrutmen online" },
          { name: "Manajemen Sekolah / Kampus", desc: "Sistem akademik, nilai, dan kehadiran siswa" },
          { name: "Manajemen Proyek", desc: "Pantau progres tim dan tugas secara real-time" },
        ],
      },
      {
        key: "platform",
        label: "Platform & Marketplace",
        items: [
          { name: "Marketplace", desc: "Platform jual beli multi-penjual seperti Tokopedia" },
          { name: "Sistem Reservasi", desc: "Booking hotel, tiket, atau jadwal janji temu online" },
          { name: "Platform Properti", desc: "Listing jual dan sewa properti secara digital" },
          { name: "Platform Sewa", desc: "Sewa alat, kendaraan, atau properti secara online" },
          { name: "Pesan Antar Makanan", desc: "Aplikasi order makanan dengan tracking pengiriman" },
          { name: "Transportasi Online", desc: "Platform ojek atau taksi online" },
          { name: "Multi-tenant SaaS", desc: "Aplikasi yang dijual sebagai layanan berlangganan" },
        ],
      },
      {
        key: "content",
        label: "Konten & Komunitas",
        items: [
          { name: "CMS / Blog", desc: "Website berita, blog, atau portal media online" },
          { name: "Forum / Komunitas", desc: "Platform diskusi dan tanya jawab online" },
          { name: "Platform Media Sosial", desc: "Buat jejaring sosial sendiri dengan fitur posting dan follow" },
          { name: "Portal Berita", desc: "Situs berita, artikel, atau majalah digital" },
          { name: "Manajemen Event", desc: "Kelola registrasi dan tiket acara secara online" },
          { name: "Form & Survei", desc: "Kumpulkan data, feedback, atau kuesioner dari pengguna" },
        ],
      },
      {
        key: "enterprise",
        label: "Enterprise & Logistik",
        items: [
          { name: "ERP", desc: "Satu sistem untuk kelola seluruh operasional perusahaan" },
          { name: "Logistik & Ekspedisi", desc: "Lacak pengiriman dan kelola armada kurir" },
          { name: "Telemedicine", desc: "Konsultasi dokter online dan rekam medis digital" },
          { name: "Dashboard Analitik", desc: "Pantau data bisnis dan buat laporan dalam satu layar" },
        ],
      },
    ],
  },

  process: {
    h2: "Cara Kami Bekerja",
    sub: "Terstruktur. Transparan. Tepat Waktu.",
    ctaBox: {
      h3: "Siap Mulai?",
      p: "Konsultasi gratis 30 menit. Kami dengarkan kebutuhan kamu, jelaskan solusinya, dan kasih estimasi biaya di hari yang sama.",
      cta: "Jadwalkan Konsultasi Gratis →",
    },
    steps: [
      {
        number: "01",
        title: "Diskusi Kebutuhan",
        description:
          "Kami duduk bareng dan pahami betul apa yang kamu butuhkan — bisnis kamu, masalahnya, dan tujuannya. Dari sini kami buat rencana yang jelas: fitur apa saja, berapa lama, dan berapa biayanya.",
        duration: "Minggu 1–2",
      },
      {
        number: "02",
        title: "Desain Tampilan",
        description:
          "Sebelum mulai bangun, kamu sudah bisa lihat seperti apa aplikasinya. Kami buat tampilan lengkap setiap halaman supaya tidak ada yang perlu ditebak.",
        duration: "Minggu 2–3",
      },
      {
        number: "03",
        title: "Proses Pembangunan",
        description:
          "Kami mulai bangun aplikasinya. Setiap minggu kamu bisa coba versi terbarunya secara langsung — bukan sekadar laporan, tapi produk nyata yang bisa diklik.",
        duration: "Minggu 3–10",
      },
      {
        number: "04",
        title: "Peluncuran & Dukungan",
        description:
          "Aplikasi tayang tanpa gangguan. Setelah live, kami tetap standby selama 30 hari untuk pastikan semua berjalan lancar dan tidak ada kendala.",
        duration: "Minggu 10–12",
      },
    ],
  },

  pricing: {
    eyebrow: "Harga",
    h2: "Pilih Paket yang Pas",
    sub: "Harga transparan sejak awal. Tidak ada biaya kejutan, tidak ada negosiasi alot. Semua paket termasuk konsultasi gratis.",
    popular: "Paling Populer",
    startingFrom: "mulai dari",
    perProject: "/ proyek",
    ctaContact: "Tanya via WhatsApp",
    ctaBook: "Jadwalkan Konsultasi",
    duration: "Estimasi Waktu",
    exampleApps: "Cocok untuk",
    tiers: [
      {
        key: "starter",
        name: "Starter",
        tagline: "Untuk yang mau mulai cepat",
        price: "Rp 4.500.000",
        duration: "1–3 minggu",
        examples: "Company profile, landing page, form online sederhana",
        features: [
          "Desain tampilan custom",
          "Tampil rapi di semua perangkat",
          "Tombol WhatsApp & form kontak",
          "Langsung online di domain kamu",
          "Revisi hingga 2x",
        ],
        waMsg: "Halo, mau tanya paket Starter",
        highlight: false,
      },
      {
        key: "standard",
        name: "Standard",
        tagline: "Untuk bisnis yang mulai berkembang",
        price: "Rp 15.000.000",
        duration: "1–2 bulan",
        examples: "Toko online, sistem kasir, booking, CRM",
        features: [
          "Semua fitur Starter",
          "Fitur login pengguna & hak akses",
          "Koneksi ke layanan pihak ketiga",
          "Panel admin untuk kelola data",
          "Revisi hingga 3x",
        ],
        waMsg: "Halo, mau tanya paket Standard",
        highlight: true,
      },
      {
        key: "advanced",
        name: "Advanced",
        tagline: "Untuk sistem yang lebih kompleks",
        price: "Rp 45.000.000",
        duration: "2–4 bulan+",
        examples: "ERP, marketplace multi-vendor, LMS, ride-hailing",
        features: [
          "Semua fitur Standard",
          "Notifikasi real-time",
          "Laporan dan dashboard data bisnis",
          "Pengujian menyeluruh sebelum live",
          "Pendampingan 30 hari setelah launch",
        ],
        waMsg: "Halo, mau tanya paket Advanced",
        highlight: false,
      },
      {
        key: "enterprise",
        name: "Enterprise",
        tagline: "Kebutuhan khusus skala besar",
        price: null,
        duration: "Diskusi bersama",
        examples: "Sistem terintegrasi, platform multi-klien, SaaS",
        features: [
          "Semua fitur Advanced",
          "Sistem white-label atau multi-klien",
          "Integrasi dengan sistem yang sudah ada",
          "Tim dedicated & SLA tertulis",
          "Kerahasiaan penuh dengan NDA",
        ],
        waMsg: null,
        highlight: false,
      },
    ],
  },

  riskReversal: {
    eyebrow: "Tanpa Risiko",
    h2Part1: "Kamu Tidak Perlu",
    h2Part2: "Percaya Dulu Sebelum Lihat Buktinya.",
    sub: "Kami tahu menyerahkan proyek ke tim baru itu butuh kepercayaan. Makanya kami yang tanggung risikonya dulu.",
    guarantees: [
      {
        icon: "🤝",
        title: "Konsultasi Gratis, Tanpa Kewajiban",
        description:
          "Ceritakan ide atau masalah bisnis kamu. Kami dengarkan, beri masukan, dan jelaskan solusinya — gratis 30 menit, tanpa syarat apapun.",
      },
      {
        icon: "📋",
        title: "Harga & Waktu Jelas di Awal",
        description:
          "Sebelum kamu setuju lanjut, kami kasih dokumen lengkap: fitur apa saja yang akan dibangun, berapa biayanya, dan kapan selesainya. Tidak ada angka yang berubah di tengah jalan.",
      },
      {
        icon: "👁️",
        title: "Kamu Bisa Lihat Progres Setiap Minggu",
        description:
          "Setiap minggu kamu dapat link untuk coba langsung versi terbaru aplikasinya. Tidak perlu nunggu selesai untuk tahu pengerjaannya sudah sejauh mana.",
      },
    ],
  },

  clients: {
    eyebrow: "KLIEN & PROYEK SEBELUMNYA",
  },

  footer: {
    badge: "Hubungi Kami",
    h2: "Mulai dari ngobrol dulu.",
    sub: "Tidak perlu langsung commit. Ceritakan kebutuhan kamu, kami bantu cari solusi terbaik dan kasih estimasi biayanya — gratis.",
    emailLabel: "Email Langsung",
    socialLabel: "Media Sosial",
    bookCta: "Jadwalkan Konsultasi Gratis ↗",
    downloadCatalog: "Unduh Katalog Layanan",
    downloadCatalogSub: "PDF · Semua layanan, harga, dan proses",
    columns: [
      {
        heading: "Tentang Megatha Tech",
        links: [
          { label: "Cerita Kami", href: "#" },
          { label: "Tim", href: "#" },
          { label: "Budaya & Nilai", href: "#" },
          { label: "Karir", href: "#" },
        ],
      },
      {
        heading: "Layanan",
        links: [
          { label: "Web App Development", href: "#services" },
          { label: "AI & Automation", href: "#services" },
          { label: "UI/UX Design", href: "#services" },
          { label: "Konsultasi Teknologi", href: "#services" },
        ],
      },
      {
        heading: "Karya Kami",
        links: [
          { label: "Portfolio Klien", href: "#clients" },
          { label: "Showcase Produk", href: "#showcase" },
          { label: "Ulasan Klien", href: "#" },
          { label: "Katalog Layanan", href: "/Megatha-Tech-Katalog-Layanan.pdf" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Kebijakan Privasi", href: "#" },
          { label: "Syarat Layanan", href: "#" },
          { label: "Kebijakan Cookie", href: "#" },
          { label: "Template NDA", href: "#" },
        ],
      },
    ],
    copyright: "©",
    allRightsReserved: "Megatha Tech. Semua hak dilindungi.",
  },
};
