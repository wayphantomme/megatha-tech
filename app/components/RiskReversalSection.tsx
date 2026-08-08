"use client";

import { useLanguage } from "../../lib/LanguageContext";

export default function RiskReversalSection() {
  const { t } = useLanguage();
  const r = t.riskReversal;

  return (
    <section
      id="risk-reversal"
      className="relative bg-white px-6 py-28 md:py-36 border-t border-slate-100"
      aria-labelledby="risk-reversal-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
            {r.eyebrow}
          </p>
          <h2
            id="risk-reversal-heading"
            className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight leading-tight max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            {r.h2Part1}
            <br />
            <span className="text-slate-400">{r.h2Part2}</span>
          </h2>
          <p className="mt-4 text-slate-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            {r.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {r.guarantees.map((item) => (
            <div
              key={item.title}
              className="rounded-[var(--radius-card)] border border-slate-100 bg-[#F8FAFC] p-8 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#111111] mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
