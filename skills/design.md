Act as a Senior UI/UX and Front-End Engineer. Generate a production-ready, high-converting landing page UI clone inspired by Sody App. Focus on a modern, high-contrast, minimalist, and mobile-first discovery platform aesthetic. [Sody App](https://sody.app/)

[TECH STACK & ARCHITECTURE]
- Framework: Tailwind CSS (v3/v4) with Semantic HTML5 layout.
- Icons: Lucide React or Phosphor Icons (clean, dual-tone or thin-line variants).
- Fonts: Inter, Plus Jakarta Sans, or SF Pro Display for sharp, modern, premium sans-serif typography.

[DESIGN SYSTEM & TOKENS]
- Background: Pure White (#FFFFFF) with high whitespace (generous padding-y and section gaps).
- Typography Color: Deep Charcoal/Jet Black (#111111) for ultra-crisp readability.
- Accent Colors: Soft pastel bubbles/gradients (e.g., Lavender #E0D7FF, Soft Pink #FFD3E8) used subtly behind the main headline.
- Border Radius: Large, premium rounding for modern app-like UI (`rounded-3xl` / 24px-32px) on major action elements and buttons.

[LAYOUT & STRUCTURAL COMPONENTS]
1. Announcement Bar (Top Banner):
   - Position: Top-most element of the page, full width (w-full).
   - Styling: Light grey background (#F3F4F6), centered text layout, thin vertical padding (py-2 or py-3).
   - Content: "Download Sody App. Available on iOS & Android."
   - Typography: Small, crisp font (`text-sm`), medium weight (`font-medium`), muted dark grey text color (`text-slate-600`).
2. Sticky Header: Minimalist top-bar positioned right below the Announcement Bar (`sticky top-0 z-50`). Left: Clean text-logo (bold sans-serif). Right: A prominent pill-shaped CTA button ("Marketplace ↗") styled in solid black with white text.
3. Hero Section: 
   - Centered alignment. High-impact bold H1 headline ("Singapore's No.1 Salon Discovery App") with a custom floating pastel bubble graphic backdrop.
   - Subheadline in medium-gray text (`text-slate-600`).
   - Primary CTA: Large pill-shaped button ("Get the App") with a smooth hover state.
4. Interactive UGC Marquee (Hero Bottom): 
   - A dual-row, horizontal auto-scrolling infinite marquee.
   - Contains creator profile cards. Each card must have: a soft-shadow rounded container, a circular avatar (`rounded-full`), and bold handle text (e.g., "@nails.bymiko").
5. Pain Point / Empathy Text Section:
   - Large, spacious typography layout. A bold question statement, followed by text with a staggered fade-in visual styling. Use expressive, clean emojis naturally within the prose.
6. User Core Features (3-Column Grid):
   - Flex/Grid container that breaks into 1 column on mobile.
   - Features: "Find nearby salons", "Browse for inspiration" (mention filter tags like hair length, nail color), "Book appointments" (real-time booking).
   - Card Style: Minimalist card, no heavy borders, rich whitespace, simple icon at the top.
7. B2B / Partner Section (Split Context):
   - Dark mode or distinctive background shift to signify the vendor side.
   - Heading: "Managing your salon. It's never been easier."
   - Include prominent App Store and Google Play SVG download badges.
   - 3-Column sub-features: "Powerful Software", "Supercharged Bookings", "All in your Pocket".
8. Clean Footer:
   - Structured multi-column grid layout (Connect, Talk, Press, Apps). 
   - Use strict gray typography links with a distinct hover color-shift effect.

[ANIMATION & INTERACTION SPECIFICATIONS]
- Marquee: Smooth continuous linear CSS keyframe animation (`animate-marquee`). Pause on hover.
- Buttons & Badges: Micro-interactions on hover (`transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-90`).
- Text Fade-in: Implement intersection observer style utility classes (`opacity-0 translate-y-4` to full opacity) for on-scroll appearance.

Generate clean, componentized, fully responsive layout matching this specification.