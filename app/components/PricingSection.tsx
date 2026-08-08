"use client";

import { useLanguage } from "../../lib/LanguageContext";

const WA_NUMBER = "6289688072039";
const CALENDLY = "https://calendly.com/wayanphantomme/30min";

function waLink(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function PricingSection() {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <section
      id="pricing"
      className="bg-white px-6 py-28 md:py-36 border-t border-slate-100"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            {p.eyebrow}
          </p>
          <h2
            id="pricing-heading"
            className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            {p.h2}
          </h2>
          <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
            {p.sub}
          </p>
        </div>

        {/* Tiers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {p.tiers.map((tier) => (
            <div
              key={tier.key}
              className={`relative flex flex-col rounded-[var(--radius-card)] border p-8 transition-shadow duration-300 hover:shadow-xl ${
                tier.highlight
                  ? "border-[#111111] bg-[#111111] text-white"
                  : "border-slate-100 bg-[#F8FAFC] text-[#111111]"
              }`}
            >
              {/* Popular badge */}
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#111111] px-4 py-1 text-xs font-bold shadow-md whitespace-nowrap border border-slate-100">
                    ✦ {p.popular}
                  </span>
                </div>
              )}

              {/* Tier name & tagline */}
              <div className="mb-6">
                <h3 className={`text-xl font-extrabold mb-1 ${tier.highlight ? "text-white" : "text-[#111111]"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm ${tier.highlight ? "text-slate-300" : "text-slate-500"}`}>
                  {tier.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {tier.price ? (
                  <>
                    <p className={`text-xs uppercase tracking-widest font-semibold mb-1 ${tier.highlight ? "text-slate-400" : "text-slate-400"}`}>
                      {p.startingFrom}
                    </p>
                    <p className={`text-3xl font-black tracking-tight ${tier.highlight ? "text-white" : "text-[#111111]"}`}>
                      {tier.price}
                    </p>
                    <p className={`text-xs mt-0.5 ${tier.highlight ? "text-slate-400" : "text-slate-400"}`}>
                      {p.perProject}
                    </p>
                  </>
                ) : (
                  <p className={`text-3xl font-black tracking-tight ${tier.highlight ? "text-white" : "text-[#111111]"}`}>
                    —
                  </p>
                )}
              </div>

              {/* Duration & examples */}
              <div className={`mb-6 pb-6 border-b ${tier.highlight ? "border-white/10" : "border-slate-100"}`}>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${tier.highlight ? "text-slate-400" : "text-slate-400"}`}>
                  {p.duration}
                </p>
                <p className={`text-sm font-bold mb-3 ${tier.highlight ? "text-white" : "text-[#111111]"}`}>
                  {tier.duration}
                </p>
                <p className={`text-xs ${tier.highlight ? "text-slate-400" : "text-slate-400"}`}>
                  <span className="font-semibold">{p.exampleApps}:</span> {tier.examples}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      tier.highlight ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                    }`}>
                      ✓
                    </span>
                    <span className={tier.highlight ? "text-slate-200" : "text-slate-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {tier.waMsg ? (
                <a
                  href={waLink(tier.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:scale-[1.03] ${
                    tier.highlight
                      ? "bg-white text-[#111111] hover:bg-slate-100"
                      : "bg-[#111111] text-white hover:bg-slate-800"
                  }`}
                >
                  {p.ctaContact}
                </a>
              ) : (
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center rounded-full px-6 py-3 text-sm font-bold border border-slate-200 bg-white text-[#111111] transition-all duration-300 hover:bg-[#111111] hover:text-white hover:border-[#111111] hover:scale-[1.03]"
                >
                  {p.ctaBook}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
