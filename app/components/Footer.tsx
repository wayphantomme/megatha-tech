const footerColumns = [
  {
    heading: "About Megatha Tech",
    links: [
      { label: "Our Story", href: "#" },
      { label: "Team", href: "#" },
      { label: "Culture & Values", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Full-Stack Development", href: "#services" },
      { label: "Web3 & Blockchain", href: "#services" },
      { label: "AI & Automation", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
    ],
  },
  {
    heading: "Our Work",
    links: [
      { label: "Case Studies", href: "#portfolio" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Client Reviews", href: "#" },
      { label: "Open Source", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "NDA Template", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0A0A0A] text-white px-6 pt-20 pb-10"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl">
        {/* Let's Talk block */}
        <div className="mb-16 pb-16 border-b border-white/[0.08] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
              Get In Touch
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Only 2 slots left this quarter.
              <br />
              <span className="text-slate-500">Book your call now.</span>
            </h2>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-md">
              We design and engineer high-performance systems that don&apos;t break at scale. Get a comprehensive scope blueprint and fixed-price estimate. Zero obligation.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {/* Email */}
            <a
              id="footer-email"
              href="mailto:hello@megatha.tech"
              className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5
                             group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-200"
                aria-hidden="true"
              >
                ✉
              </span>
              <span className="font-medium text-sm">hello@megatha.tech</span>
            </a>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                { label: "GitHub", icon: "GH", href: "#" },
                { label: "LinkedIn", icon: "LI", href: "#" },
                { label: "Twitter/X", icon: "X", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  id={`footer-${social.label.toLowerCase().replace("/", "-")}`}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5
                             text-xs font-bold text-slate-400
                             hover:border-white/30 hover:bg-white/10 hover:text-white
                             transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              id="footer-cta"
              href="mailto:hello@megatha.tech"
              className="self-start rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#111111]
                         transition-all duration-300 hover:bg-slate-100 hover:scale-[1.02] hover:shadow-lg"
            >
              Book a Discovery Call ↗
            </a>
          </div>
        </div>

        {/* Footer nav grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xl font-bold text-white tracking-tight">
            Megatha<span className="text-slate-600 font-light">Tech</span>
          </span>
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Megatha Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
