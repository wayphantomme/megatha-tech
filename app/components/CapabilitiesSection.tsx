"use client";

import { useLanguage } from "../../lib/LanguageContext";

const services = [
  {
    id: "web-dev",
    gradient: "from-slate-900 via-slate-800 to-slate-700",
    accentColor: "bg-blue-400",
    tags: ["Tampilan Web & Mobile", "Koneksi Database", "API & Integrasi", "Deployment", "Maintenance"],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="4" y="10" width="56" height="38" rx="4" stroke="white" strokeWidth="2.5" strokeOpacity="0.9"/>
        <line x1="4" y1="22" x2="60" y2="22" stroke="white" strokeWidth="2" strokeOpacity="0.5"/>
        <circle cx="12" cy="16" r="2" fill="white" fillOpacity="0.7"/>
        <circle cx="20" cy="16" r="2" fill="white" fillOpacity="0.7"/>
        <circle cx="28" cy="16" r="2" fill="white" fillOpacity="0.7"/>
        <rect x="12" y="30" width="18" height="3" rx="1.5" fill="white" fillOpacity="0.8"/>
        <rect x="12" y="37" width="28" height="3" rx="1.5" fill="white" fillOpacity="0.5"/>
        <rect x="12" y="44" width="12" height="3" rx="1.5" fill="white" fillOpacity="0.3"/>
        <rect x="36" y="30" width="16" height="17" rx="2" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
        <line x1="20" y1="54" x2="44" y2="54" stroke="white" strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round"/>
        <line x1="32" y1="48" x2="32" y2="54" stroke="white" strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "ai-automation",
    gradient: "from-violet-900 via-violet-800 to-indigo-700",
    accentColor: "bg-violet-300",
    tags: ["Otomasi Proses Bisnis", "AI Chatbot & Assistant", "Integrasi WhatsApp", "Laporan Otomatis", "Notifikasi Pintar"],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="32" cy="32" r="7" fill="white" fillOpacity="0.95"/>
        <circle cx="32" cy="10" r="4.5" stroke="white" strokeWidth="2" strokeOpacity="0.8" fill="white" fillOpacity="0.15"/>
        <circle cx="54" cy="32" r="4.5" stroke="white" strokeWidth="2" strokeOpacity="0.8" fill="white" fillOpacity="0.15"/>
        <circle cx="32" cy="54" r="4.5" stroke="white" strokeWidth="2" strokeOpacity="0.8" fill="white" fillOpacity="0.15"/>
        <circle cx="10" cy="32" r="4.5" stroke="white" strokeWidth="2" strokeOpacity="0.8" fill="white" fillOpacity="0.15"/>
        <circle cx="16" cy="16" r="3" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="white" fillOpacity="0.1"/>
        <circle cx="48" cy="16" r="3" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="white" fillOpacity="0.1"/>
        <circle cx="16" cy="48" r="3" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="white" fillOpacity="0.1"/>
        <circle cx="48" cy="48" r="3" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="white" fillOpacity="0.1"/>
        <line x1="32" y1="25" x2="32" y2="14.5" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="39" y1="32" x2="49.5" y2="32" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="32" y1="39" x2="32" y2="49.5" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="25" y1="32" x2="14.5" y2="32" stroke="white" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="27" y1="27" x2="19" y2="19" stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
        <line x1="37" y1="27" x2="45" y2="19" stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
        <line x1="27" y1="37" x2="19" y2="45" stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
        <line x1="37" y1="37" x2="45" y2="45" stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
      </svg>
    ),
  },
];

// Service copy lives here — bilingual handled via t.capabilities keys per service id
const servicesCopy: Record<string, { id: { title: string; desc: string }; en: { title: string; desc: string } }> = {
  "web-dev": {
    id: {
      title: "Pembuatan Aplikasi & Website",
      desc: "Kami bangun tampilan depan yang rapi, sistem di balik layar yang kuat, dan pastikan semuanya terhubung dan bisa diakses online. Dari desain sampai live — kami yang urus.",
    },
    en: {
      title: "App & Website Development",
      desc: "We build clean, fast interfaces connected to a solid backend — then deploy it so it's live and accessible. From design to launch, we handle it all.",
    },
  },
  "ai-automation": {
    id: {
      title: "Otomasi & AI untuk Bisnis",
      desc: "Punya proses yang berulang dan makan waktu? Kami otomasi — mulai dari balas pesan otomatis, laporan harian, notifikasi, sampai integrasi antar aplikasi yang kamu pakai.",
    },
    en: {
      title: "Business Automation & AI",
      desc: "Got repetitive tasks eating up your team's time? We automate them — from auto-replies and daily reports to notifications and connecting the apps you already use.",
    },
  },
};

export default function CapabilitiesSection() {
  const { t, lang } = useLanguage();
  const c = t.capabilities;

  return (
    <section
      id="services"
      className="bg-[#F8FAFC] px-4 sm:px-6 py-16 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10 md:mb-14 flex flex-col items-center text-center gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            {c.eyebrow}
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            {c.h2}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-sm sm:max-w-md mx-auto">
            {c.sub}
          </p>
        </div>

        {/* 2-col on md+, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service) => {
            const copy = servicesCopy[service.id][lang];
            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="group flex flex-col rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Gradient panel */}
                <div className={`h-40 sm:h-48 bg-gradient-to-br ${service.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.3) 0%, transparent 60%)" }}
                  />
                  <div className="w-20 h-20 sm:w-24 sm:h-24 relative z-10 drop-shadow-lg">
                    {service.icon}
                  </div>
                  <div className={`absolute bottom-3 right-3 w-2 h-2 rounded-full ${service.accentColor} opacity-80`} />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 sm:p-7">
                  <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-2 leading-snug">
                    {copy.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
                    {copy.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href="https://calendly.com/wayanphantomme/30min"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600 transition-all duration-300 group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111]"
                    >
                      {c.learnMore}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Catalog download — natural placement after seeing services */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/Megatha-Tech-Katalog-Layanan.pdf"
            download
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white hover:border-slate-400 hover:shadow-sm px-6 py-3 text-sm font-semibold text-slate-600 hover:text-[#111111] transition-all duration-200"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
            </svg>
            {lang === "id" ? "Unduh Katalog Layanan Lengkap" : "Download Full Service Catalog"}
            <span className="text-xs text-slate-400 font-normal">PDF</span>
          </a>
        </div>

      </div>
    </section>
  );
}
