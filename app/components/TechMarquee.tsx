"use client";

const techBadges = [
  { label: "Next.js",     bg: "#111111", color: "#ffffff", dot: "#FFFFFF" },
  { label: "TypeScript",  bg: "#3178C6", color: "#ffffff", dot: "#93C5FD" },
  { label: "Tailwind CSS",bg: "#0EA5E9", color: "#ffffff", dot: "#BAE6FD" },
  { label: "Solana",      bg: "#9333EA", color: "#ffffff", dot: "#D8B4FE" },
  { label: "Rust",        bg: "#B91C1C", color: "#ffffff", dot: "#FCA5A5" },
  { label: "Node.js",     bg: "#15803D", color: "#ffffff", dot: "#86EFAC" },
  { label: "PostgreSQL",  bg: "#1D4ED8", color: "#ffffff", dot: "#93C5FD" },
  { label: "Go",          bg: "#0369A1", color: "#ffffff", dot: "#7DD3FC" },
  { label: "Docker",      bg: "#1E40AF", color: "#ffffff", dot: "#93C5FD" },
  { label: "GraphQL",     bg: "#BE185D", color: "#ffffff", dot: "#F9A8D4" },
  { label: "Prisma",      bg: "#0F172A", color: "#ffffff", dot: "#94A3B8" },
  { label: "Redis",       bg: "#DC2626", color: "#ffffff", dot: "#FCA5A5" },
];

const industryBadges = [
  { label: "Fintech",      bg: "#F8FAFC", color: "#1E293B", border: "#E2E8F0" },
  { label: "Web3",         bg: "#FAF5FF", color: "#6D28D9", border: "#DDD6FE" },
  { label: "SaaS",         bg: "#EFF6FF", color: "#1D4ED8", border: "#BFDBFE" },
  { label: "E-Commerce",   bg: "#FFF7ED", color: "#C2410C", border: "#FED7AA" },
  { label: "Enterprise AI",bg: "#F0FDF4", color: "#166534", border: "#BBF7D0" },
  { label: "DeFi",         bg: "#FAF5FF", color: "#7C3AED", border: "#DDD6FE" },
  { label: "HealthTech",   bg: "#FFF1F2", color: "#BE123C", border: "#FECDD3" },
  { label: "EdTech",       bg: "#ECFEFF", color: "#0E7490", border: "#A5F3FC" },
  { label: "PropTech",     bg: "#FFF7ED", color: "#9A3412", border: "#FED7AA" },
  { label: "InsurTech",    bg: "#F0FDF4", color: "#14532D", border: "#BBF7D0" },
];

interface TechBadge {
  label: string;
  bg: string;
  color: string;
  dot: string;
}
interface IndustryBadge {
  label: string;
  bg: string;
  color: string;
  border: string;
}

function TechBadgeItem({ badge }: { badge: TechBadge }) {
  return (
    <span
      className="inline-flex items-center gap-2 mx-3 rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap select-none"
      style={{ backgroundColor: badge.bg, color: badge.color }}
    >
      <span
        className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: badge.dot }}
        aria-hidden="true"
      />
      {badge.label}
    </span>
  );
}

function IndustryBadgeItem({ badge }: { badge: IndustryBadge }) {
  return (
    <span
      className="inline-flex items-center mx-3 rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap select-none border"
      style={{
        backgroundColor: badge.bg,
        color: badge.color,
        borderColor: badge.border,
      }}
    >
      {badge.label}
    </span>
  );
}

export default function TechMarquee() {
  return (
    <section
      id="tech-stack"
      className="marquee-outer relative w-full overflow-hidden py-10 border-y border-slate-100 bg-white"
      aria-label="Technology stack and client industries"
    >
      {/* Fade edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{ background: "linear-gradient(to right, white, transparent)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{ background: "linear-gradient(to left, white, transparent)" }}
      />

      {/* Row 1 — Tech stack (left → right) */}
      <div className="mb-3 overflow-hidden" aria-hidden="true">
        <div className="marquee-track">
          {[...techBadges, ...techBadges].map((badge, i) => (
            <TechBadgeItem key={`tech-${i}`} badge={badge} />
          ))}
        </div>
      </div>

      {/* Row 2 — Industries (right → left) */}
      <div className="overflow-hidden" aria-hidden="true">
        <div className="marquee-track-reverse">
          {[...industryBadges, ...industryBadges].map((badge, i) => (
            <IndustryBadgeItem key={`industry-${i}`} badge={badge} />
          ))}
        </div>
      </div>
    </section>
  );
}
