import Image from "next/image";

const services = [
  {
    id: "fullstack",
    icon: "https://placehold.co/100x100/F3F4F6/111111?text=FS",
    title: "High-performance apps that scale without crashing",
    description:
      "We build fast, secure frontends and backends that handle sudden traffic spikes. Clean code, zero downtime, and robust performance under load.",
    tags: ["Next.js", "React Native", "Node.js", "PostgreSQL"],
    accent: "#F8FAFC",
  },
  {
    id: "web3",
    icon: "https://placehold.co/100x100/F0EBFF/6D28D9?text=W3",
    title: "Secure Web3 infrastructure engineered for transaction volume",
    description:
      "From audited smart contracts to high-throughput dApp backends. We deploy robust protocol architectures that protect user assets and scale cleanly.",
    tags: ["Solana", "Rust", "Anchor", "EVM", "Smart Contracts"],
    accent: "#FAF5FF",
  },
  {
    id: "ai",
    icon: "https://placehold.co/100x100/ECFDF5/065F46?text=AI",
    title: "AI agents that automate work and cut overhead",
    description:
      "Custom LLM integrations and automated workflows designed to handle manual operations, reduce error rates, and scale your operations without increasing headcount.",
    tags: ["LLM APIs", "LangChain", "Automation", "RAG", "Vector DBs"],
    accent: "#F0FDF4",
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
              Our Capabilities
            </p>
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight max-w-lg leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Three Disciplines.
              <br />
              One Elite Team.
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start md:self-auto rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-[#111111]
                       transition-all duration-300 hover:border-slate-400 hover:shadow-md whitespace-nowrap"
          >
            Discuss your project →
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
              {/* Icon */}
              <div className="mb-6">
                <Image
                  src={service.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="rounded-[var(--radius-icon)] object-cover"
                  aria-hidden="true"
                />
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
                <span className="text-xs font-semibold text-slate-400 group-hover:text-[#111111] transition-colors duration-200">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
