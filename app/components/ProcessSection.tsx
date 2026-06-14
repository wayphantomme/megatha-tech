const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We deep-dive into your product vision, technical architecture, and business goals. Output: a detailed technical specification, feature map, and fixed project scope.",
    duration: "Week 1–2",
  },
  {
    number: "02",
    title: "Design",
    description:
      "High-fidelity wireframes and interactive prototypes. We align on every screen, interaction, and edge case before a single line of code is written.",
    duration: "Week 2–3",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Sprint-based development with daily async updates. Full test coverage, CI/CD pipelines active from day one, and weekly preview deployments you can interact with.",
    duration: "Week 3–10",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Zero-downtime deployment, performance audit, load testing, and a 30-day hypercare support window post-launch. We ship, then we make sure it stays shipped.",
    duration: "Week 10–12",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-white px-6 py-28 md:py-36"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
            How We Work
          </p>
          <h2
            id="process-heading"
            className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            The Megatha Process.
            <br />
            <span className="text-slate-400">Predictable. Transparent. Fast.</span>
          </h2>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[27px] top-0 bottom-0 w-px bg-slate-100 hidden md:block"
          />

          <div className="flex flex-col gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                id={`process-step-${step.number}`}
                className="relative flex flex-col md:flex-row gap-6 md:gap-10 group"
              >
                {/* Number bubble */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-14 h-14 rounded-full border-2 border-slate-100 bg-white flex items-center justify-center
                                font-bold text-sm text-slate-400 group-hover:border-[#111111] group-hover:text-[#111111]
                                transition-all duration-300"
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-[#111111]">
                      {step.title}
                    </h3>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                    {step.description}
                  </p>

                  {/* Arrow to next */}
                  {index < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="mt-8 hidden md:flex items-center gap-2 text-xs text-slate-300 font-medium"
                    >
                      <span className="inline-block w-8 h-px bg-slate-200" />
                      <span>then</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-[var(--radius-card)] border border-slate-100 bg-[#F8FAFC] p-10 text-center">
          <h3 className="text-2xl font-bold text-[#111111] mb-3">
            Ready to Start?
          </h3>
          <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
            Book a free 30-minute discovery call. We&apos;ll scope your project
            and tell you exactly what it will take to ship it.
          </p>
          <a
            id="process-cta"
            href="#contact"
            className="inline-flex rounded-full bg-[#111111] px-8 py-4 text-base font-semibold text-white
                       transition-all duration-300 hover:bg-slate-800 hover:scale-[1.03] hover:shadow-xl"
          >
            Book a Discovery Call →
          </a>
        </div>
      </div>
    </section>
  );
}
