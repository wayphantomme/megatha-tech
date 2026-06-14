import Image from "next/image";

const caseStudies = [
  {
    id: "case-1",
    image: "https://placehold.co/800x450/111111/FFFFFF?text=Project+Mockup",
    category: "Fintech · SaaS",
    name: "DeFi dashboard that reduced feed latency by 80%",
    problem:
      "An institutional asset manager needed real-time tracking of DeFi positions across 12+ blockchains without data feed lag.",
    solution:
      "We engineered a Next.js dashboard with a Rust-powered data pipeline and sub-50ms WebSocket updates.",
    tags: ["Next.js", "Rust", "WebSocket", "Solana", "PostgreSQL"],
    outcome: "80% reduction in feed latency",
  },
  {
    id: "case-2",
    image:
      "https://placehold.co/800x450/0F172A/94A3B8?text=AI+Platform+Mockup",
    category: "Enterprise AI · Automation",
    name: "AI operations platform that cut overhead by 65%",
    problem:
      "An enterprise company was wasting hundreds of analyst hours on repetitive, manual data mapping and processing workflows.",
    solution:
      "We built a custom LLM orchestration workflow engine with RAG retrieval pipelines in 8 weeks.",
    tags: ["LangChain", "OpenAI", "Pinecone", "Node.js", "React"],
    outcome: "65% ops overhead reduction & 12x throughput",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="bg-[#0A0A0A] px-6 py-28 md:py-36"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
              Featured Work
            </p>
            <h2
              id="portfolio-heading"
              className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Engineered to Scale.
              <br />
              <span className="text-slate-500">Featured Case Studies.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start md:self-auto rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white whitespace-nowrap
                       transition-all duration-300 hover:border-white/50 hover:bg-white/10"
          >
            All projects →
          </a>
        </div>

        {/* Case study cards */}
        <div className="flex flex-col gap-6">
          {caseStudies.map((cs) => (
            <article
              key={cs.id}
              id={cs.id}
              className="card-hover group rounded-[var(--radius-card)] border border-white/[0.06] bg-white/[0.03]
                         grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
            >
              {/* Screenshot */}
              <div className="relative overflow-hidden min-h-[240px] lg:min-h-0">
                <Image
                  src={cs.image}
                  alt={`${cs.name} project screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A]/40 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12">
                <div>
                  {/* Category */}
                  <span className="text-xs font-semibold text-slate-500 tracking-widest uppercase">
                    {cs.category}
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 text-xl md:text-2xl font-bold text-white leading-snug mb-6">
                    {cs.name}
                  </h3>

                  {/* Challenge / Solution */}
                  <div className="space-y-5 mb-6">
                    <div className="border-l-2 border-white/10 pl-4">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
                        Problem
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {cs.problem}
                      </p>
                    </div>
                    <div className="border-l-2 border-emerald-500/40 pl-4">
                      <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-1.5">
                        Solution
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* Outcome badge */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                    <span className="text-emerald-400 font-bold text-sm">
                      Result: {cs.outcome}
                    </span>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-8 self-start rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white
                             transition-all duration-300 hover:border-white/50 hover:bg-white/10 group-hover:border-white/30"
                >
                  View Case Study ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
