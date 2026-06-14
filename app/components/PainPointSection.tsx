"use client";

import { useEffect, useRef } from "react";

export default function PainPointSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = containerRef.current?.querySelectorAll(".fade-in-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pain-point"
      className="relative bg-white px-6 py-28 md:py-36"
      aria-labelledby="pain-point-heading"
      ref={containerRef}
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(241,245,249,0.8) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Section label */}
        <p className="fade-in-up text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">
          The Problem We Solve
        </p>

        {/* Bold question */}
        <h2
          id="pain-point-heading"
          className="fade-in-up delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-[1.1] tracking-tight mb-12"
          style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
        >
          Tired of chasing developers and{" "}
          <span className="text-slate-400">still missing deadlines?</span>
        </h2>

        {/* Divider */}
        <div className="fade-in-up delay-2 w-16 h-px bg-slate-200 mb-12" />

        {/* Pain points block */}
        <div className="fade-in-up delay-3 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "⏳",
              title: "Slow Developers",
              body: "Communication black holes, delayed milestones, and endless excuses that stall your go-to-market plan.",
            },
            {
              icon: "🐛",
              title: "Messy Code & Tech Debt",
              body: "Quick-and-dirty builds that crash under traffic, forcing you to pay twice to rewrite the same codebase.",
            },
            {
              icon: "💸",
              title: "Wasted Product Budget",
              body: "Paying for features your users don't need because your engineering team builds without scoping business outcomes.",
            },
          ].map((point) => (
            <div key={point.title} className="flex flex-col gap-3">
              <span className="text-3xl" aria-hidden="true">
                {point.icon}
              </span>
              <h3 className="text-base font-bold text-[#111111]">
                {point.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {point.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <p className="fade-in-up delay-4 mt-14 text-xl md:text-2xl font-semibold text-slate-500 leading-relaxed max-w-2xl">
          No fluff.{" "}
          <span className="text-[#111111]">Just execution.</span>
        </p>
      </div>
    </section>
  );
}
