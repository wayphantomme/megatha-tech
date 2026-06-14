const services = [
  {
    id: "ai",
    badge: "AI Automation",
    title: "Automate Business 24/7 without You",
    description:
      "We automate your operations so you stop doing tasks manually and start scaling. One connected system. Zero downtime.",
    tags: ["n8n", "OpenAI", "Claude", "Gemini", "WhatsApp", "Airtable"],
  },
  {
    id: "fullstack",
    badge: "Full Stack",
    title: "Software That Grows With Your Business",
    description:
      "We build products that work under real pressure. Fast, clean, and ready to scale from day one.",
    tags: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Cloud Infrastructure", "API"],
  },
  {
    id: "web3",
    badge: "Web3",
    title: "Blockchain Infrastructure Users Can Trust",
    description:
      "Secure smart contracts and scalable backends built for real transaction volume. Built to last, not just to launch.",
    tags: ["Smart Contracts", "Solana", "Rust", "Anchor", "EVM", "Web3 APIs"],
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="services"
      className="bg-[#F8FAFC] px-6 py-28 md:py-36"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
              our services
            </p>
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight max-w-lg leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Automate. Build. Scale.
            </h2>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-md">
              We build systems that reduce manual work, increase efficiency, and unlock new revenue streams. Powered by modern engineering, AI automation, and scalable infrastructure.
            </p>
          </div>
          <a
            href="#contact"
            className="self-start md:self-auto flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-[#111111]
                       transition-all duration-300 hover:border-slate-400 hover:shadow-md whitespace-nowrap"
          >
            <span>Make for You</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </a>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="card-hover group flex flex-col rounded-[var(--radius-card)] bg-white p-8 border border-slate-100"
            >
              {/* Pill Badge */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-200 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#111111] mb-3 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              {/* Tags */}
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

              {/* Hover CTA */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <a
                  href="#contact"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-xs font-semibold text-slate-600 transition-all duration-300 group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111]"
                >
                  Consult for Free →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
