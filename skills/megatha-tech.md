Act as a Senior UI/UX and Front-End Engineer. Generate a production-ready, high-converting B2B landing page UI clone for a premium software house called "Megatha Tech". The aesthetic must adapt the Sody App layout but engineered for a high-tier agency selling elite development services. Keep it modern, high-contrast, minimalist, and mobile-first.

[TECH STACK & ARCHITECTURE]
- Framework: Tailwind CSS (v3/v4) with Semantic HTML5 layout.
- Icons: Lucide React or Phosphor Icons (clean, dual-tone or thin-line variants).
- Fonts: Inter, Plus Jakarta Sans, or SF Pro Display for sharp, tech-focused typography.

[DESIGN SYSTEM & TOKENS]
- Background: Pure White (#FFFFFF) with massive whitespace (generous padding-y and section gaps).
- Typography Color: Deep Charcoal/Jet Black (#111111) for ultra-crisp readability.
- Accent Colors: Subtle premium tech gradients (e.g., Cool Slate Grey, Metallic White, with an ultra-subtle neon electric blue or mint accent) used subtly behind the main headline.
- Border Radius: Large, modern app-like UI rounding (`rounded-3xl` / 24px-32px) on all project cards, placeholders, and CTA buttons.

[IMAGE & PLACEHOLDER SPECIFICATIONS]
- Strictly use high-quality dynamic placeholders from placehold.co for all visual assets.
- Tech/Client Logos: Use 150x50 grey-scale placeholders (e.g., `https://placehold.co/150x50/F3F4F6/333333?text=NextJS`).
- Portfolio Screenshots: Use 800x450 dark-themed 16:9 placeholders (e.g., `https://placehold.co/800x450/111111/FFFFFF?text=Project+Mockup`).
- Service/Feature Icons: Use 100x100 clean layout placeholders (e.g., `https://placehold.co/100x100/F3F4F6/111111?text=ICON`).
- Ensure all placeholder images have a 24px-32px border radius to perfectly match the UI system tokens.

[LAYOUT & STRUCTURAL COMPONENTS]
1. Announcement Bar (Top Urgency Banner):
   - Position: Top-most element of the page, full width (w-full).
   - Styling: Light grey background (#F3F4F6), centered text layout, thin vertical padding (py-3).
   - Content: "🔥 Q3 2026 Development Slots Now Open. Only 2 slots remaining for this quarter."
   - Typography: Small, crisp font (`text-sm`), medium weight (`font-medium`), muted dark grey text (`text-slate-600`).

2. Sticky Header: Positioned right below the Announcement Bar (`sticky top-0 z-50 bg-white/80 backdrop-blur-md`). Left: Clean bold text-logo "Megatha Tech". Center: Minimalist navigation links (Services, Portfolio, Process). Right: A prominent pill-shaped CTA button ("Book a Discovery Call ↗") styled in solid black with white text.

3. Hero Section: 
   - Centered alignment with high vertical padding. High-impact bold H1 headline: "We Build Production-Ready Software for High-Growth Startups & Enterprises."
   - Subheadline in medium-gray text (`text-slate-600` max-w-2xl): "Engineering premium web applications, decentralized infrastructure, and AI-driven automation workflows with high-velocity deployment."
   - Action Buttons: Dual-button setup. Primary pill-shaped "Start Your Project" (solid black) next to a secondary ghost button "View Portfolio".

4. Interactive Tech Stack & Trust Marquee (Hero Bottom): 
   - A dual-row, horizontal auto-scrolling infinite marquee mimicking Sody's layout, but adapted for B2B trust.
   - Row 1: Smooth linear scrolling of monochrome 150x50 Tech Badge placeholders (Next.js, Tailwind, Solana, Rust, Node.js, PostgreSQL).
   - Row 2: Smooth linear scrolling of 150x50 Client Industry Badge placeholders (Fintech, Web3, SaaS, E-Commerce, Enterprise AI).

5. Pain Point / Empathy Text Section:
   - Ultra-clean, spacious typography layout. A large bold statement: "Tired of slow development, buggy code, and software houses that don't understand your architecture?"
   - Followed by a staggered fade-in text block offering the solution: "We engineer clean code, optimize for local contextual intelligence, and scale your product with automated velocity. No fluff. Just execution."

6. Our Capabilities (3-Column Grid Services Menu):
   - Flex/Grid container that breaks into 1 column on mobile.
   - Column 1: "Full-Stack Web & Mobile Apps" (Next.js, premium UI/UX).
   - Column 2: "Web3 & Blockchain Infrastructure" (Smart contracts, Anchor framework, Rust).
   - Column 3: "AI Agents & Advanced Automation" (LLM integrations, custom workflows).
   - Card Style: Minimalist white cards, rich internal padding, subtle shadow on hover, crisp 100x100 icon placeholder at the top left.

7. Featured Portfolio Showcase (The High-Contrast Context Shift):
   - A distinct section background shift to dark mode (Deep Slate/Black) to dramatically showcase the portfolio.
   - Heading: "Engineered to Scale. Featured Case Studies."
   - Structure: 2 large horizontal cards (`rounded-3xl` with rich padding). Left side features an 800x450 dark portfolio screenshot placeholder. Right side displays the project name, problem-solution description, monochrome tech tags, and a "View Case Study ↗" button.

8. The Megatha Process (Staggered Vertical Layout):
   - A clean, vertical timeline explaining the onboarding: "01. Discovery & Scope" ➔ "02. UI/UX Blueprint" ➔ "03. High-Velocity Engineering" ➔ "04. Production Launch".

9. Clean Footer:
   - Structured multi-column grid layout (About Megatha Tech, Services, Our Work, Legal). 
   - Include a distinct "Let's Talk" section with a clickable professional email address and social links (GitHub, LinkedIn) using strict gray typography with subtle hover effects.

[ANIMATION & INTERACTION SPECIFICATIONS]
- Marquee: Smooth continuous linear CSS keyframe animation (`animate-marquee`). Pause on hover.
- Buttons & Cards: Micro-interactions on hover (`transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg`).
- Text Fade-in: Implement intersection observer style utility classes (`opacity-0 translate-y-4` to full opacity) for on-scroll appearance.

Generate clean, componentized, fully responsive layout matching this software house portfolio specification with the assigned placeholders.