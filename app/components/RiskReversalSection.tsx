"use client";

import { useLanguage } from "../../lib/LanguageContext";

export default function RiskReversalSection() {
  const { t } = useLanguage();
  const r = t.riskReversal;

  return (
    <section
      id="risk-reversal"
      className="relative bg-white px-4 sm:px-6 py-16 md:py-28 border-t border-slate-100"
      aria-labelledby="risk-reversal-heading"
    >
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
            {r.eyebrow}
          </p>
          <h2
            id="risk-reversal-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight leading-[1.2] max-w-xs sm:max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            {r.h2Part1}{" "}
            <span className="text-slate-400">{r.h2Part2}</span>
          </h2>
          <p className="mt-4 text-slate-500 text-sm max-w-sm sm:max-w-md mx-auto leading-relaxed">
            {r.sub}
          </p>
        </div>

        {/* Guarantee cards — stacked on mobile, 3-col on md */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {r.guarantees.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-6"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl shadow-sm mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-[#111111] mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
