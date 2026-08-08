"use client";

import { useLanguage } from "../../lib/LanguageContext";

export default function ProcessSection() {
  const { t } = useLanguage();
  const p = t.process;

  return (
    <section
      id="process"
      className="w-full bg-[#F8FAFC] py-20 md:py-28 px-6"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl flex flex-col gap-14">

        {/* Header */}
        <div className="flex flex-col gap-2 items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            {p.sub}
          </p>
          <h2
            id="process-heading"
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            {p.h2}
          </h2>
        </div>

        {/* Steps — horizontal scroll on mobile, grid on desktop */}
        <div className="relative">

          {/* Connecting line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-slate-200 z-0"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
            {p.steps.map((step, i) => (
              <div
                key={step.number}
                className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                {/* Number badge */}
                <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center text-sm font-black flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {step.number}
                </div>

                {/* Title + duration */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-extrabold text-[#111111] leading-snug"
                    style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}>
                    {step.title}
                  </h3>
                  <span className="inline-flex w-fit rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-500 tracking-wide">
                    {step.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed flex-1">
                  {step.description}
                </p>

                {/* Step indicator dots */}
                <div className="flex gap-1 mt-auto pt-2">
                  {p.steps.map((_, j) => (
                    <span
                      key={j}
                      className={`h-0.5 rounded-full transition-all duration-300 ${
                        j === i
                          ? "w-4 bg-[#111111]"
                          : j < i
                          ? "w-2 bg-slate-300"
                          : "w-2 bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA box */}
        <div className="rounded-[var(--radius-card)] border border-slate-100 bg-white w-full p-8 md:p-10 text-center flex flex-col items-center shadow-sm">
          <h3
            className="text-xl md:text-2xl font-bold text-[#111111] mb-3"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            {p.ctaBox.h3}
          </h3>
          <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto leading-relaxed">
            {p.ctaBox.p}
          </p>
          <a
            id="process-cta"
            href="https://calendly.com/wayanphantomme/30min"
            className="inline-flex rounded-full bg-[#111111] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:scale-[1.03] hover:shadow-xl"
          >
            {p.ctaBox.cta}
          </a>
        </div>

      </div>
    </section>
  );
}
