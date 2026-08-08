import type { Dict } from "./types";

export const en: Dict = {
  announcement: {
    text: "{month} Development Slots Now Open.",
    highlight: "Only 2 slots remaining this month.",
    cta: "Secure yours →",
  },

  header: {
    bookCall: "Book a Call",
    langToggle: "ID",
  },

  hero: {
    badge: "Software House · Bali, Indonesia",
    h1Part1: "Your business idea deserves",
    h1Highlight: "software that actually",
    h1Part2: "works.",
    sub: "We build web apps, automation systems, and digital platforms from zero to live. On time, transparent pricing, no drama.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "See Our Services",
    integrateWith: "Integrate with",
    stats: [
      { stat: "20+", label: "Products Shipped" },
      { stat: "4 weeks", label: "Avg Delivery" },
      { stat: "100%", label: "NDA Protected" },
      { stat: "5+", label: "Countries Served" },
    ],
  },

  painPoint: {
    words: [
      { text: "Tired" },
      { text: "of" },
      { text: "chasing" },
      { text: "developers" },
      { text: "and" },
      { text: "still", dim: true },
      { text: "missing", dim: true },
      { text: "deadlines?", dim: true },
    ],
  },

  capabilities: {
    eyebrow: "our services",
    h2: "Automate. Build. Scale.",
    sub: "We build systems that reduce manual work, increase efficiency, and unlock new revenue streams. Powered by modern engineering, AI automation, and scalable infrastructure.",
    learnMore: "Learn More",
  },

  showcase: {
    eyebrow: "what we can build",
    h2: "35+ Types of Apps We Can Build",
    sub: "From landing pages to multi-tenant SaaS platforms. Click any item to ask via WhatsApp.",
    ctaCustom: "Can't find what you need? We do custom builds too →",
    waPrefix: "Hi, I'm interested in building a",
    tabs: [
      {
        key: "business",
        label: "Business Ops",
        items: [
          { name: "Company Profile", desc: "Company profile, portfolio, landing page" },
          { name: "POS (Point of Sale)", desc: "Cashier & retail/restaurant transactions" },
          { name: "Inventory / Warehouse Management", desc: "Stock & warehouse management" },
          { name: "Accounting / Finance App", desc: "Bookkeeping, invoicing, tax" },
          { name: "POS + Inventory Hybrid", desc: "Combined cashier and inventory for retail" },
          { name: "Fleet Management", desc: "Vehicle fleet management" },
        ],
      },
      {
        key: "sales",
        label: "Sales & Customer",
        items: [
          { name: "E-commerce", desc: "Online store, product marketplace" },
          { name: "CRM", desc: "Customer relationship management, sales pipeline" },
          { name: "Chatbot / Customer Service", desc: "Live chat, AI assistant" },
          { name: "Ticketing / Helpdesk System", desc: "Support tickets, customer complaints" },
          { name: "Payment Gateway / Wallet", desc: "Digital wallet, online transactions" },
          { name: "Auction Platform", desc: "Online auction" },
          { name: "Crowdfunding Platform", desc: "Donations, fundraising" },
        ],
      },
      {
        key: "people",
        label: "People & Org",
        items: [
          { name: "HRIS / HRM", desc: "Employee management, payroll, attendance" },
          { name: "LMS (Learning Management System)", desc: "Online learning platform, courses" },
          { name: "Job Portal", desc: "Job listings, CV matching" },
          { name: "School / Campus Management", desc: "Academics, grades, student attendance" },
          { name: "Project Management Tool", desc: "Kanban, task tracking" },
        ],
      },
      {
        key: "platform",
        label: "Platform & Marketplace",
        items: [
          { name: "Marketplace", desc: "Multi-vendor, mini Tokopedia/Shopee style" },
          { name: "Booking / Reservation System", desc: "Hotel reservations, tickets, appointments" },
          { name: "Real Estate Platform", desc: "Property listings, rental/sale" },
          { name: "Rental Platform", desc: "Equipment, vehicle, property rental" },
          { name: "Food Delivery", desc: "Food ordering, order tracking" },
          { name: "Ride-hailing", desc: "Online transportation" },
          { name: "Multi-tenant SaaS", desc: "App sold as a service to multiple clients" },
        ],
      },
      {
        key: "content",
        label: "Content & Community",
        items: [
          { name: "CMS (Content Management System)", desc: "Blog, news portal, media" },
          { name: "Forum / Community Platform", desc: "Discussion, Q&A" },
          { name: "Social Media Platform", desc: "Feed, follow, posting" },
          { name: "News / Media Portal", desc: "News, articles, online magazine" },
          { name: "Event Management", desc: "Ticketing, event registration" },
          { name: "Survey / Form Builder", desc: "Questionnaires, feedback" },
        ],
      },
      {
        key: "enterprise",
        label: "Enterprise & Logistics",
        items: [
          { name: "ERP", desc: "Enterprise resource management (inventory, accounting, HR)" },
          { name: "Logistics / Expedition", desc: "Shipment tracking, courier & warehouse management" },
          { name: "Healthcare / Telemedicine", desc: "Online doctor consultations, medical records" },
          { name: "Analytics Dashboard", desc: "Data monitoring & business reporting" },
        ],
      },
    ],
  },

  process: {
    h2: "The Megatha Process",
    sub: "Predictable. Transparent. Fast.",
    ctaBox: {
      h3: "Ready to Start?",
      p: "Book a free 30-minute discovery call. We'll scope your project and tell you exactly what it will take to ship it.",
      cta: "Book a Discovery Call →",
    },
    steps: [
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
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    h2: "Pick the Right Plan",
    sub: "Transparent pricing, no hidden fees. All plans include a free initial consultation.",
    popular: "Most Popular",
    startingFrom: "starting from",
    perProject: "/ project",
    ctaContact: "Contact Us",
    ctaBook: "Book a Discovery Call",
    duration: "Estimated",
    exampleApps: "Example apps",
    tiers: [
      {
        key: "starter",
        name: "Starter",
        tagline: "For getting started fast",
        price: "Rp 4,500,000",
        duration: "1–3 weeks",
        examples: "Company profile, landing page, simple form builder",
        features: [
          "Custom UI/UX design",
          "Responsive on all devices",
          "WhatsApp / contact integration",
          "Deploy to your domain",
          "Up to 2 revisions",
        ],
        waMsg: "Hi, I'd like to ask about the Starter package",
        highlight: false,
      },
      {
        key: "standard",
        name: "Standard",
        tagline: "For scaling businesses",
        price: "Rp 15,000,000",
        duration: "1–2 months",
        examples: "POS, simple CRM, booking system, basic e-commerce",
        features: [
          "Everything in Starter",
          "Custom backend + database",
          "User auth & roles",
          "Third-party API integrations",
          "Basic admin panel",
          "Up to 3 revisions",
        ],
        waMsg: "Hi, I'd like to ask about the Standard package",
        highlight: true,
      },
      {
        key: "advanced",
        name: "Advanced",
        tagline: "For complex systems",
        price: "Rp 45,000,000",
        duration: "2–4 months+",
        examples: "ERP, multi-vendor marketplace, LMS, ride-hailing",
        features: [
          "Everything in Standard",
          "Microservice / modular architecture",
          "Full CI/CD pipeline",
          "Real-time notifications",
          "Analytics reports & dashboard",
          "QA & load testing",
          "30-day hypercare support",
        ],
        waMsg: "Hi, I'd like to ask about the Advanced package",
        highlight: false,
      },
      {
        key: "enterprise",
        name: "Enterprise",
        tagline: "Custom requirements",
        price: null,
        duration: "To be discussed",
        examples: "Multi-tenant SaaS, multi-platform integrations",
        features: [
          "Everything in Advanced",
          "End-to-end custom architecture",
          "Multi-tenant / white-label",
          "Enterprise system integrations",
          "SLA & dedicated support",
          "Full NDA & confidentiality",
        ],
        waMsg: null,
        highlight: false,
      },
    ],
  },

  riskReversal: {
    eyebrow: "Zero Risk",
    h2Part1: "Guaranteed Delivery.",
    h2Part2: "Zero Risk to Get Started.",
    sub: "We eliminate the anxiety of hiring software houses by taking on the risk ourselves. Here is how we ensure your project is a success:",
    guarantees: [
      {
        icon: "🤝",
        title: "Zero-Risk Discovery",
        description:
          "Book a free 30-minute call. We'll audit your existing architecture or product idea, providing immediate, actionable insights with no obligation.",
      },
      {
        icon: "📋",
        title: "Fixed-Price Blueprint",
        description:
          "Before signing a development agreement, we build a detailed technical scope document. You know the exact price and timeline up front.",
      },
      {
        icon: "👁️",
        title: "Transparent Sprints",
        description:
          "Every Friday, we push updates to a live staging URL. You see progress week by week, ensuring there are no late-stage surprises.",
      },
    ],
  },

  clients: {
    eyebrow: "PREVIOUS CLIENTS AND PROJECTS",
  },

  footer: {
    badge: "Get In Touch",
    h2: "Book your call now.",
    sub: "We design and engineer high-performance systems that don't break at scale. Get a comprehensive scope blueprint and fixed-price estimate. Zero obligation.",
    emailLabel: "Direct Email",
    socialLabel: "Social Channels",
    bookCta: "Book a Discovery Call ↗",
    downloadCatalog: "Download Service Catalog",
    downloadCatalogSub: "PDF · All services, pricing & process",
    columns: [
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
    ],
    copyright: "©",
    allRightsReserved: "Megatha Tech. All rights reserved.",
  },
};
