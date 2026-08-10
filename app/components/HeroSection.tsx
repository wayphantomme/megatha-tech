"use client";

import { useLanguage } from "../../lib/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white px-5 pt-10 pb-8 md:pt-16 md:pb-14 lg:pt-20 lg:pb-16"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        style={{ position: "absolute", top: "-180px", left: "-160px", width: "700px", height: "700px", borderRadius: "9999px", filter: "blur(72px)", pointerEvents: "none" }}
      />
      <div
        aria-hidden="true"
        style={{ position: "absolute", top: "60px", right: "-120px", width: "480px", height: "480px", borderRadius: "9999px", background: "radial-gradient(circle, rgba(203,213,225,0.25) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }}
      />

      <div className="relative mx-auto max-w-4xl text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-6 shadow-sm">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
          {h.badge}
        </div>

        {/* H1 */}
        <h1
          id="hero-heading"
          className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-[#111111] leading-[1.15] mb-5 mx-auto"
          style={{ fontFamily: "var(--font-plus-jakarta), var(--font-inter), sans-serif" }}
        >
          {h.h1Part1}{" "}
          <span className="gradient-text">{h.h1Highlight}</span>{" "}
          {h.h1Part2}
        </h1>

        {/* Sub */}
        <p className="mx-auto max-w-sm sm:max-w-xl text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed mb-8">
          {h.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-10">
          <a
            id="hero-cta-primary"
            href="https://calendly.com/wayanphantomme/30min"
            className="rounded-full bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white text-center transition-all duration-300 hover:bg-slate-800 hover:scale-[1.03] hover:shadow-xl"
          >
            {h.ctaPrimary}
          </a>
          <a
            id="hero-cta-secondary"
            href="#services"
            className="rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#111111] text-center transition-all duration-300 hover:border-slate-400 hover:shadow-md"
          >
            {h.ctaSecondary}
          </a>
        </div>

        {/* Integration logos — single row, scrollable on mobile */}
        <div className="border-t border-slate-100 pt-8">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-5">
            {h.integrateWith}
          </p>
          <div className="flex items-center justify-center gap-5 sm:gap-8 flex-wrap">
            {[
              { label: "GitHub", slug: "github" },
              { label: "Vercel", slug: "vercel" },
              { label: "Claude", slug: "anthropic" },
              { label: "Gemini", slug: "googlegemini" },
              { label: "n8n", slug: "n8n" },
            ].map((logo) => (
              <div
                key={logo.label}
                className="flex items-center gap-1.5 opacity-40 hover:opacity-80 transition-opacity duration-300 select-none"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${logo.slug}/1e293b`}
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                  aria-hidden="true"
                />
                <span className="text-xs font-bold text-[#1e293b] tracking-tight">{logo.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats — 2x2 on mobile, single row on sm+ */}
        <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-3">
          {h.stats.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-4 py-2"
            >
              <span className="text-sm font-bold text-[#111111]">{item.stat}</span>
              <span className="text-xs text-slate-500">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
