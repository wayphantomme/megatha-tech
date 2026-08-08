export interface StatItem {
  stat: string;
  label: string;
}

export interface PainWord {
  text: string;
  dim?: boolean;
}

export interface ServiceItem {
  id: string;
  category: string;
  description: string;
  tags: readonly string[];
  image: string;
}

export interface ShowcaseItem {
  name: string;
  desc: string;
}

export interface ShowcaseTab {
  key: string;
  label: string;
  items: ShowcaseItem[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration: string;
}

export interface PricingTier {
  key: string;
  name: string;
  tagline: string;
  price: string | null;
  duration: string;
  examples: string;
  features: readonly string[];
  waMsg: string | null;
  highlight: boolean;
}

export interface Guarantee {
  icon: string;
  title: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export interface Dict {
  announcement: {
    text: string;
    highlight: string;
    cta: string;
  };
  header: {
    bookCall: string;
    langToggle: string;
  };
  hero: {
    badge: string;
    h1Part1: string;
    h1Highlight: string;
    h1Part2: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    integrateWith: string;
    stats: StatItem[];
  };
  painPoint: {
    words: PainWord[];
  };
  capabilities: {
    eyebrow: string;
    h2: string;
    sub: string;
    learnMore: string;
  };
  showcase: {
    eyebrow: string;
    h2: string;
    sub: string;
    ctaCustom: string;
    waPrefix: string;
    tabs: ShowcaseTab[];
  };
  process: {
    h2: string;
    sub: string;
    ctaBox: {
      h3: string;
      p: string;
      cta: string;
    };
    steps: ProcessStep[];
  };
  pricing: {
    eyebrow: string;
    h2: string;
    sub: string;
    popular: string;
    startingFrom: string;
    perProject: string;
    ctaContact: string;
    ctaBook: string;
    duration: string;
    exampleApps: string;
    tiers: PricingTier[];
  };
  riskReversal: {
    eyebrow: string;
    h2Part1: string;
    h2Part2: string;
    sub: string;
    guarantees: Guarantee[];
  };
  clients: {
    eyebrow: string;
  };
  footer: {
    badge: string;
    h2: string;
    sub: string;
    emailLabel: string;
    socialLabel: string;
    bookCta: string;
    downloadCatalog: string;
    downloadCatalogSub: string;
    columns: FooterColumn[];
    copyright: string;
    allRightsReserved: string;
  };
}
