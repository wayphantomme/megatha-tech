export default function AuthoritySection() {
  return (
    <section
      id="authority"
      className="relative bg-slate-50 px-6 py-28 md:py-36 border-y border-slate-100"
      aria-labelledby="authority-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
            How We Work
          </p>
          <h2
            id="authority-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-[1.08] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            We don&apos;t just build.
            <br />
            We design systems that{" "}
            <span className="text-slate-400">don&apos;t break at scale.</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
            Most software agencies ship code that works today but collapses tomorrow. We build with operational discipline, treating software engineering as a rigorous discipline rather than a series of shortcuts.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              title: "Architecture-First Scoping",
              description:
                "We design and document all database models, API specs, and service dependencies before writing a single line of code. No guess work, no alignment issues.",
              number: "01",
            },
            {
              title: "Production-Hardened Defaults",
              description:
                "Every project is built with automated CI/CD pipelines, robust testing suites, and containerized staging environments. We ship to production cleanly from week one.",
              number: "02",
            },
            {
              title: "Senior-Only Team",
              description:
                "We don't hand off your project to junior developers. You work directly with senior software engineers who have designed systems for high-scale applications.",
              number: "03",
            },
          ].map((pillar) => (
            <div
              key={pillar.number}
              className="flex flex-col gap-4 border-l border-slate-200 pl-6 md:pl-8 py-2"
            >
              <span className="text-sm font-bold text-slate-400 tracking-wider">
                {pillar.number}
              </span>
              <h3 className="text-xl font-bold text-[#111111]">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
