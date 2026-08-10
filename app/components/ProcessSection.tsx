"use client";

import { useLanguage } from "../../lib/LanguageContext";

export default function ProcessSection() {
  const { t } = useLanguage();
  const p = t.process;

  return (
    <section
      id="process"
      className="w-full bg-[#F8FAFC] py-16 md:py-28 px-4 sm:px-6"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-5xl flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-2 items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            {p.sub}
          </p>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            {p.h2}
          </h2>
        </div>

        {/* Steps — single column on mobile, 2-col on sm, 4-col on md */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {p.steps.map((step, i) => (
            <div
              key={step.number}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5"
            >
              {/* Number + duration row on mobile */}
              <div className="flex items-center justify-between gap-2">
                <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center text-sm font-black flex-shrink-0">
                  {step.number}
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-500 whitespace-nowrap">
                  {step.duration}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-sm font-extrabold text-[#111111] leading-snug"
                style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-500 leading-relaxed flex-1">
                {step.description}
              </p>

              {/* Progress dots */}
              <div className="flex gap-1 pt-1">
                {p.steps.map((_, j) => (
                  <span
                    key={j}
                    className={`h-0.5 rounded-full ${
                      j === i ? "w-4 bg-[#111111]" : j < i ? "w-2 bg-slate-300" : "w-2 bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA box */}
        <div className="rounded-2xl border border-slate-100 bg-white w-full p-6 sm:p-8 text-center flex flex-col items-center">
          <h3
            className="text-lg sm:text-xl font-bold text-[#111111] mb-2"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            {p.ctaBox.h3}
          </h3>
          <p className="text-slate-500 text-sm mb-5 max-w-sm mx-auto leading-relaxed">
            {p.ctaBox.p}
          </p>
          <a
            id="process-cta"
            href="https://calendly.com/wayanphantomme/30min"
            className="inline-flex rounded-full bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-xl"
          >
            {p.ctaBox.cta}
          </a>
        </div>

      </div>
    </section>
  );
}
