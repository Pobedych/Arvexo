import type { IconName } from "@/components/Icons";

export const telegramUrl = "https://t.me/arvexoai";
export const emailUrl = "mailto:arvexoai@gmail.com";
export const githubUrl = "/contacts";

export const navigation = [
  { label: "Shop", href: "/shop" },
  { label: "Family Ecosystem", href: "/family-ecosystem" },
  { label: "Robots R&D", href: "/robots-rd" },
  { label: "About", href: "/about" }
];

export const mobileNavigation = [...navigation, { label: "Contacts", href: "/contacts" }];

export type StatusTone = "active" | "available" | "development" | "future" | "secure" | "muted";
export type ProductPanelVariant =
  | "command"
  | "vpn"
  | "bots"
  | "family"
  | "robot"
  | "shop"
  | "contact";

export type Direction = {
  slug: "vpn" | "telegram-bots" | "family-ecosystem" | "robots-rd";
  href: string;
  label: string;
  eyebrow: string;
  title: string;
  homeTitle: string;
  status: string;
  tone: StatusTone;
  icon: IconName;
  panel: ProductPanelVariant;
  intro: string;
  description: string;
  points: string[];
  features: Array<{ title: string; description: string }>;
  benefits: Array<{ title: string; description: string }>;
  cta: string;
};

export type LandingDirection = {
  label: string;
  title: string;
  description: string;
  tags: string[];
  mockupTitle: string;
  rows: Array<{ label: string; status: string }>;
};

export type RoadmapStep = {
  step: string;
  title: string;
  description: string;
  labels: string[];
};

export type Benefit = {
  icon: IconName;
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const heroMetrics = [
  "Privacy tools",
  "Telegram automation",
  "Family assistant",
  "Robotics R&D"
];

export const landingDirections: LandingDirection[] = [
  {
    label: "Active Product",
    title: "AI Shop",
    description:
      "Digital products by Arvexo: VPN access, Telegram bots, AI subscriptions, mini apps and automation tools.",
    tags: ["VPN", "Telegram bots", "Mini Apps", "AI Services"],
    mockupTitle: "AI Shop",
    rows: [
      { label: "VPN Access", status: "Available" },
      { label: "Telegram Bots", status: "Available" },
      { label: "Mini Apps", status: "In development" },
      { label: "AI Services", status: "Planned" }
    ]
  },
  {
    label: "Core startup direction",
    title: "Family Ecosystem",
    description:
      "A family-focused digital ecosystem with profiles, AI assistant, shared tasks, reminders, personal services and one secure space for everyday life.",
    tags: ["Family Chat", "Family Profiles", "Secure Space", "AI Assistant"],
    mockupTitle: "Family Ecosystem",
    rows: [
      { label: "Family profiles", status: "Synced" },
      { label: "AI Assistant", status: "Ready" },
      { label: "Shared tasks", status: "Today" },
      { label: "Secure space", status: "Protected" }
    ]
  },
  {
    label: "Future R&D",
    title: "Robots R&D",
    description:
      "A future research direction focused on care robots, AI-powered devices and technologies that can support families in everyday life.",
    tags: ["Care Robot", "AI devices", "Research Phase", "Future Technology"],
    mockupTitle: "Robots R&D",
    rows: [
      { label: "Care scenarios", status: "Research" },
      { label: "AI behavior model", status: "Concept" },
      { label: "Prototype planning", status: "Future" },
      { label: "Device layer", status: "Exploration" }
    ]
  }
];

export const roadmapSteps: RoadmapStep[] = [
  {
    step: "Step 1",
    title: "AI Shop",
    description:
      "Digital products by Arvexo: VPN access, Telegram bots, AI services and mini apps for real everyday tasks.",
    labels: ["VPN Access", "Telegram Bots", "AI Services", "Mini Apps"]
  },
  {
    step: "Step 2",
    title: "Family Ecosystem",
    description:
      "A family-focused platform with profiles, AI assistant, shared tasks, reminders and secure digital space.",
    labels: ["Family profiles", "AI Assistant", "Shared tasks", "Secure space"]
  },
  {
    step: "Step 3",
    title: "Robots R&D",
    description:
      "A future research direction focused on care robots, AI-powered devices and technologies for family support.",
    labels: ["Care scenarios", "AI devices", "Prototype planning", "Future R&D"]
  },
  {
    step: "Step 4",
    title: "Unified Platform",
    description:
      "One Arvexo account, dashboard, subscriptions, connected services and future device integration.",
    labels: ["Arvexo account", "Connected services", "Family dashboard", "Device integration"]
  }
];

export const visionFocus = [
  "AI Shop - digital products, VPN, Telegram bots and AI services",
  "Family Ecosystem - profiles, assistant, shared tasks and secure space",
  "Robots R&D - future care robots, AI devices and family support technologies",
  "Unified Platform - one account, dashboard and connected services"
];

export const benefits: Benefit[] = [
  {
    icon: "shield",
    title: "Privacy-first",
    description:
      "Digital products and family services should be built around secure access and protected digital activity."
  },
  {
    icon: "bolt",
    title: "AI automation",
    description:
      "Telegram bots, mini apps and assistant workflows help automate routine tasks and daily processes."
  },
  {
    icon: "bag",
    title: "Active products",
    description:
      "AI Shop gives Arvexo a practical commercial layer: VPN access, Telegram bots, AI services and mini apps."
  },
  {
    icon: "network",
    title: "Family-centered platform",
    description:
      "Family Ecosystem focuses on profiles, shared tasks, reminders, personal services and AI assistance."
  },
  {
    icon: "flask",
    title: "Future robotics vision",
    description:
      "Robots R&D explores care robots, AI-powered devices and technologies that can support families."
  },
  {
    icon: "apps",
    title: "Long-term ecosystem",
    description:
      "The goal is not one product, but a connected platform where services, family tools and future devices work together."
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "What is Arvexo?",
    answer:
      "Arvexo is a digital ecosystem that combines AI Shop, Family Ecosystem and future Robots R&D into one long-term technology platform."
  },
  {
    question: "What is AI Shop?",
    answer:
      "AI Shop is the active product direction of Arvexo. It includes digital products such as VPN access, Telegram bots, AI services, mini apps and automation tools."
  },
  {
    question: "What is Family Ecosystem?",
    answer:
      "Family Ecosystem is the core startup direction of Arvexo. It focuses on family profiles, AI assistant, shared tasks, reminders, personal services and one secure digital space for everyday life."
  },
  {
    question: "What is Robots R&D?",
    answer:
      "Robots R&D is a future research direction focused on care robots, AI-powered devices and technologies that can support families. It is not presented as a finished product yet."
  },
  {
    question: "Is Arvexo already a finished platform?",
    answer:
      "Not fully. Arvexo is developing in stages: active digital products first, then Family Ecosystem, then Robots R&D and a unified platform experience."
  },
  {
    question: "How can I contact Arvexo?",
    answer:
      "You can contact Arvexo through Telegram or email to ask about products, partnerships, development or future collaboration."
  }
];

export const footerDirections = [
  { label: "AI Shop", href: "/shop" },
  { label: "Family Ecosystem", href: "/family-ecosystem" },
  { label: "Robots R&D", href: "/robots-rd" }
];

export const footerProducts = [
  { label: "VPN Access", href: "/vpn" },
  { label: "Telegram Bots", href: "/telegram-bots" },
  { label: "AI Services", href: "/shop" },
  { label: "Mini Apps", href: "/shop" }
];

export const footerCompany = [
  { label: "About", href: "/about" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Contacts", href: "/contacts" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" }
];

export const footerSocials = [
  { label: "Telegram", href: telegramUrl },
  { label: "Email", href: emailUrl },
  { label: "GitHub", href: githubUrl }
];

export const shopProducts = [
  {
    name: "VPN Access",
    description: "Private access and digital privacy direction.",
    status: "Available",
    tone: "available" as StatusTone,
    icon: "shield" as IconName
  },
  {
    name: "Telegram Bots",
    description: "Custom support, notification and automation bots.",
    status: "Available",
    tone: "available" as StatusTone,
    icon: "bot" as IconName
  },
  {
    name: "AI Services",
    description: "Applied AI services and workflow assistance.",
    status: "Planned",
    tone: "future" as StatusTone,
    icon: "brain" as IconName
  },
  {
    name: "Mini Apps",
    description: "Compact product interfaces and automation tools.",
    status: "In development",
    tone: "development" as StatusTone,
    icon: "apps" as IconName
  }
];

export const robotRoadmap = [
  "Care scenarios",
  "AI behavior model",
  "Prototype planning",
  "Device layer",
  "Family ecosystem integration"
];

export const directions: Direction[] = [
  {
    slug: "vpn",
    href: "/vpn",
    label: "VPN Access",
    eyebrow: "AI SHOP PRODUCT",
    title: "VPN access for private digital activity",
    homeTitle: "VPN Access",
    status: "Available",
    tone: "available",
    icon: "shield",
    panel: "vpn",
    intro: "Private access and protected connectivity inside the Arvexo AI Shop.",
    description:
      "VPN access is one of Arvexo's active products, built as the privacy layer for everyday digital activity.",
    points: ["Secure access", "Private activity", "Stable connection", "AI Shop product"],
    features: [
      {
        title: "Protected access",
        description: "A practical product direction for private browsing and secure access."
      },
      {
        title: "Commercial layer",
        description: "Part of the active AI Shop catalog rather than a future concept."
      },
      {
        title: "Ecosystem fit",
        description: "A privacy base that supports the wider Arvexo platform vision."
      }
    ],
    benefits: [
      {
        title: "Privacy-first usage",
        description: "Digital access starts with clear privacy boundaries."
      },
      {
        title: "Useful now",
        description: "VPN access is an active Arvexo product direction."
      },
      {
        title: "Platform foundation",
        description: "Privacy tools strengthen the long-term Arvexo ecosystem."
      }
    ],
    cta: "View VPN Access"
  },
  {
    slug: "telegram-bots",
    href: "/telegram-bots",
    label: "Telegram Bots",
    eyebrow: "AI SHOP PRODUCT",
    title: "Telegram bots for automation and mini services",
    homeTitle: "Telegram Bots",
    status: "Available",
    tone: "available",
    icon: "bot",
    panel: "bots",
    intro: "Telegram bots for support, notifications, workflows, mini apps and service automation.",
    description:
      "Telegram bots are an active Arvexo product direction for automation, support flows, reminders and compact service experiences.",
    points: ["Support bots", "Notifications", "Mini services", "Automation tools"],
    features: [
      {
        title: "Bot workflows",
        description: "Build useful flows for requests, reminders, forms and operational actions."
      },
      {
        title: "Telegram-native access",
        description: "Launch automation in an interface people already use every day."
      },
      {
        title: "Mini app path",
        description: "Connect bot logic with compact product interfaces over time."
      }
    ],
    benefits: [
      {
        title: "Automate routines",
        description: "Move repetitive steps into predictable Telegram workflows."
      },
      {
        title: "Fast product access",
        description: "Deliver useful services without heavy onboarding."
      },
      {
        title: "Commercial foundation",
        description: "Bots support the active AI Shop product layer."
      }
    ],
    cta: "View Telegram Bots"
  },
  {
    slug: "family-ecosystem",
    href: "/family-ecosystem",
    label: "Family Ecosystem",
    eyebrow: "CORE STARTUP DIRECTION",
    title: "Family Ecosystem for everyday family technology",
    homeTitle: "Family Ecosystem",
    status: "Startup direction",
    tone: "development",
    icon: "network",
    panel: "family",
    intro: "Family profiles, AI assistant, shared tasks, reminders and one secure digital space.",
    description:
      "Family Ecosystem is Arvexo's core startup direction: a protected family platform for profiles, assistant workflows, shared tasks, reminders and personal services.",
    points: ["Family profiles", "AI Assistant", "Shared tasks", "Secure space"],
    features: [
      {
        title: "Family profiles",
        description: "Profile spaces for roles, preferences, reminders and shared responsibilities."
      },
      {
        title: "AI assistant",
        description: "Assistant workflows for coordination, reminders and everyday family actions."
      },
      {
        title: "Secure family space",
        description: "A privacy-centered platform direction for sensitive family information."
      }
    ],
    benefits: [
      {
        title: "One family dashboard",
        description: "Bring shared services and tasks into a clear platform experience."
      },
      {
        title: "Assistant layer",
        description: "Use AI to help coordinate everyday routines."
      },
      {
        title: "Future device path",
        description: "Create a software base for long-term robotics R&D."
      }
    ],
    cta: "View Family Ecosystem"
  },
  {
    slug: "robots-rd",
    href: "/robots-rd",
    label: "Robots R&D",
    eyebrow: "FUTURE R&D",
    title: "Robots R&D for future family support technologies",
    homeTitle: "Robots R&D",
    status: "Research track",
    tone: "future",
    icon: "flask",
    panel: "robot",
    intro: "Future research into care robots, AI-powered devices and family support technologies.",
    description:
      "Robots R&D is a future Arvexo research direction, focused on care scenarios, AI behavior models, prototype planning and device concepts.",
    points: ["Care scenarios", "AI devices", "Prototype planning", "Future R&D"],
    features: [
      {
        title: "Research framing",
        description: "Explore family support scenarios before presenting a finished product."
      },
      {
        title: "AI behavior models",
        description: "Study assistant behavior that could support care-focused technology."
      },
      {
        title: "Device concepts",
        description: "Connect long-term hardware ideas with the Family Ecosystem software layer."
      }
    ],
    benefits: [
      {
        title: "Long-term vision",
        description: "Keep a dedicated track for future care and device technologies."
      },
      {
        title: "Honest product boundary",
        description: "Present robotics as R&D, not as a finished commercial product."
      },
      {
        title: "Family support focus",
        description: "Shape research around real family use cases and safe assistance."
      }
    ],
    cta: "View Robots R&D"
  }
];

export const contactCards = [
  {
    title: "Telegram",
    description: "Contact Arvexo for product access, partnerships and quick collaboration questions.",
    href: telegramUrl,
    label: "Open Telegram",
    icon: "telegram" as IconName
  },
  {
    title: "Email",
    description: "Use email for structured requests, product details and longer collaboration notes.",
    href: emailUrl,
    label: "Send Email",
    icon: "mail" as IconName
  }
];

export function getDirection(slug: Direction["slug"]) {
  return directions.find((direction) => direction.slug === slug);
}
