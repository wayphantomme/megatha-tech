"use client";

import { useLanguage } from "../../lib/LanguageContext";

const services = [
  {
    id: "web-dev",
    category: "Web App Development",
    description:
      "We build products that work under real pressure. Fast, clean, and ready to scale from day one.",
    tags: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Cloud Infrastructure", "API"],
    gradient: "from-slate-900 via-slate-800 to-slate-700",
    accentColor: "bg-blue-400",
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
    category: "AI Automation Development",
    description:
      "We automate your operations so you stop doing tasks manually and start scaling. One connected system. Zero downtime.",
    tags: ["n8n", "OpenAI", "Claude", "Gemini", "WhatsApp", "Airtable"],
    gradient: "from-violet-900 via-violet-800 to-indigo-700",
    accentColor: "bg-violet-300",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Central node */}
        <circle cx="32" cy="32" r="7" fill="white" fillOpacity="0.95"/>
        {/* Orbiting nodes */}
        <circle cx="32" cy="10" r="4.5" stroke="white" strokeWidth="2" strokeOpacity="0.8" fill="white" fillOpacity="0.15"/>
        <circle cx="54" cy="32" r="4.5" stroke="white" strokeWidth="2" strokeOpacity="0.8" fill="white" fillOpacity="0.15"/>
        <circle cx="32" cy="54" r="4.5" stroke="white" strokeWidth="2" strokeOpacity="0.8" fill="white" fillOpacity="0.15"/>
        <circle cx="10" cy="32" r="4.5" stroke="white" strokeWidth="2" strokeOpacity="0.8" fill="white" fillOpacity="0.15"/>
        {/* Diagonal nodes */}
        <circle cx="16" cy="16" r="3" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="white" fillOpacity="0.1"/>
        <circle cx="48" cy="16" r="3" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="white" fillOpacity="0.1"/>
        <circle cx="16" cy="48" r="3" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="white" fillOpacity="0.1"/>
        <circle cx="48" cy="48" r="3" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="white" fillOpacity="0.1"/>
        {/* Connections */}
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

export default function CapabilitiesSection() {
  const { t } = useLanguage();
  const c = t.capabilities;

  return (
    <section
      id="services"
      className="bg-[#F8FAFC] px-6 py-28 md:py-36"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            {c.eyebrow}
          </p>
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight leading-tight mx-auto"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            {c.h2}
          </h2>
          <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
            {c.sub}
          </p>
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="card-hover group flex flex-col rounded-[var(--radius-card)] bg-white border border-slate-100 overflow-hidden"
            >
              {/* Gradient visual panel with SVG icon */}
              <div className={`h-52 bg-gradient-to-br ${service.gradient} flex items-center justify-center relative overflow-hidden`}>
                {/* Subtle noise/glow layer */}
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.3) 0%, transparent 60%)" }}
                />
                <div className="w-24 h-24 relative z-10 drop-shadow-lg">
                  {service.icon}
                </div>
                {/* Accent dot */}
                <div className={`absolute bottom-4 right-4 w-2 h-2 rounded-full ${service.accentColor} opacity-80`} />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-8">
                <h3 className="text-xl font-bold text-[#111111] mb-3 leading-snug">
                  {service.category}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <a
                    href="https://calendly.com/wayanphantomme/30min"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-xs font-semibold text-slate-600 transition-all duration-300 group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111]"
                  >
                    {c.learnMore}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
