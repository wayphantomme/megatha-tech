"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useLanguage } from "../../lib/LanguageContext";

function AnimatedWord({
  text,
  index,
  dim,
  total,
  scrollYProgress,
}: {
  text: string;
  index: number;
  dim?: boolean;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const windowSize = 2 / total;
  const start = (index / total) * 0.75;
  const end = Math.min(1, start + windowSize);

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const blur = useTransform(scrollYProgress, [start, end], [8, 0]);
  const blurFilter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.span
      style={{ opacity, filter: blurFilter }}
      className={`inline-block ${dim ? "text-slate-400" : ""}`}
    >
      {text}&nbsp;
    </motion.span>
  );
}

export default function PainPointSection() {
  const { t } = useLanguage();
  const words = t.painPoint.words;

  const containerRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress: h2Progress } = useScroll({
    target: h2Ref,
    offset: ["start 0.85", "center 0.4"],
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
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
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(241,245,249,0.8) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl">
        <h2
          id="pain-point-heading"
          ref={h2Ref}
          className="fade-in-up delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
        >
          {words.map((word, i) => (
            <AnimatedWord
              key={`${word.text}-${i}`}
              text={word.text}
              index={i}
              dim={"dim" in word ? word.dim : undefined}
              total={words.length}
              scrollYProgress={h2Progress}
            />
          ))}
        </h2>
      </div>
    </section>
  );
}
