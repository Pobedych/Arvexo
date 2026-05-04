import type { IconName } from "@/components/Icons";

export const telegramUrl = "https://t.me/arvexoai";
export const emailUrl = "mailto:arvexoai@gmail.com";

export const navigation = [
  { label: "VPN", href: "/vpn" },
  { label: "Telegram Bots", href: "/telegram-bots" },
  { label: "Family Ecosystem", href: "/family-ecosystem" },
  { label: "Care Robot R&D", href: "/care-robot-rd" }
];

export const mobileNavigation = [
  ...navigation,
  { label: "Arvexo Shop", href: "/shop" },
  { label: "Contacts", href: "/contacts" }
];

export const footerProducts = [
  { label: "Arvexo Shop", href: "/shop" },
  { label: "VPN Access", href: "/vpn" },
  { label: "Telegram Bots", href: "/telegram-bots" }
];

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
  slug: "vpn" | "telegram-bots" | "family-ecosystem" | "care-robot-rd";
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

export const heroMetrics = [
  "Private access",
  "Automation workflows",
  "Family workspace",
  "Future care R&D"
];

export const directions: Direction[] = [
  {
    slug: "vpn",
    href: "/vpn",
    label: "VPN",
    eyebrow: "ACTIVE COMMERCIAL DIRECTION",
    title: "VPN for private access and digital protection",
    homeTitle: "VPN",
    status: "Active product",
    tone: "active",
    icon: "shield",
    panel: "vpn",
    intro: "Private access, data protection and stable connection for everyday digital work.",
    description:
      "Arvexo VPN is the active privacy direction of the ecosystem. It focuses on secure access, stable connectivity and a simpler way to keep personal digital activity protected.",
    points: ["Secure access", "Stable connection", "Data protection", "Private usage"],
    features: [
      {
        title: "Private access layer",
        description: "A focused product direction for protected access to digital services and daily workflows."
      },
      {
        title: "Connection stability",
        description: "A commercial service track built around predictable connection quality and practical use."
      },
      {
        title: "Privacy-first UX",
        description: "A direct experience without unnecessary setup complexity or overloaded technical language."
      }
    ],
    benefits: [
      {
        title: "Protect digital activity",
        description: "Keep access and browsing habits separated from unnecessary exposure."
      },
      {
        title: "Use it every day",
        description: "The VPN direction is active now and shaped for recurring personal tasks."
      },
      {
        title: "Fits the ecosystem",
        description: "VPN works as the privacy base for the broader Arvexo product system."
      }
    ],
    cta: "View VPN"
  },
  {
    slug: "telegram-bots",
    href: "/telegram-bots",
    label: "Telegram Bots",
    eyebrow: "ACTIVE COMMERCIAL DIRECTION",
    title: "Telegram bots for support, tasks and automation",
    homeTitle: "Telegram Bots",
    status: "Active product",
    tone: "active",
    icon: "bot",
    panel: "bots",
    intro: "Bots for tasks, support, notifications and business workflow automation.",
    description:
      "Arvexo builds Telegram bots for practical automation: support flows, internal tasks, notifications, forms, mini services and business tools that reduce manual work.",
    points: ["Support bots", "Automation flows", "Notifications", "Business tools"],
    features: [
      {
        title: "Support workflows",
        description: "Route requests, answer common questions and organize support processes in Telegram."
      },
      {
        title: "Task automation",
        description: "Create flows for approvals, reminders, operations and recurring business actions."
      },
      {
        title: "Mini service layer",
        description: "Connect bots with simple interfaces, forms and compact Telegram-native services."
      }
    ],
    benefits: [
      {
        title: "Reduce manual handling",
        description: "Move repetitive operational steps into predictable bot workflows."
      },
      {
        title: "Launch inside Telegram",
        description: "Use an environment people already open every day."
      },
      {
        title: "Custom to the task",
        description: "Shape each bot around a real process instead of generic template behavior."
      }
    ],
    cta: "View Telegram Bots"
  },
  {
    slug: "family-ecosystem",
    href: "/family-ecosystem",
    label: "Family Ecosystem",
    eyebrow: "MAIN STARTUP DIRECTION",
    title: "Family Ecosystem for shared digital family processes",
    homeTitle: "Family Ecosystem",
    status: "Startup direction",
    tone: "development",
    icon: "network",
    panel: "family",
    intro: "Family profiles, AI assistants, shared services, reminders and one secure family space.",
    description:
      "Family Ecosystem is the main startup direction for Arvexo: a protected digital space for family profiles, assistants, reminders, shared services and everyday coordination.",
    points: ["Family profiles", "Shared dashboard", "AI assistant", "Personal services"],
    features: [
      {
        title: "Family profiles",
        description: "Neutral profile spaces for family roles, preferences, reminders and shared responsibilities."
      },
      {
        title: "Shared dashboard",
        description: "A single place for family services, reminders, assistant activity and privacy status."
      },
      {
        title: "AI assistant",
        description: "Assistant flows for coordination, messages, reminders and helpful everyday actions."
      },
      {
        title: "Secure family space",
        description: "Privacy-focused architecture for sensitive household routines and shared information."
      }
    ],
    benefits: [
      {
        title: "Organize family routines",
        description: "Bring reminders, profiles and service actions into one product direction."
      },
      {
        title: "Build around privacy",
        description: "Treat family information as protected by default."
      },
      {
        title: "Grow into future care",
        description: "Create a software base for future assistant and care technology research."
      }
    ],
    cta: "View Family Ecosystem"
  },
  {
    slug: "care-robot-rd",
    href: "/care-robot-rd",
    label: "Care Robot R&D",
    eyebrow: "FUTURE RESEARCH DIRECTION",
    title: "Care Robot R&D for future family care technologies",
    homeTitle: "Care Robot R&D",
    status: "Future R&D",
    tone: "future",
    icon: "flask",
    panel: "robot",
    intro: "Research around care robots, AI-powered devices and long-term family care technology.",
    description:
      "Care Robot R&D is a future research direction, not a finished product. It frames long-term exploration around AI devices, robotics concepts, care workflows and family support technologies.",
    points: ["Future robotics research", "Care-focused AI", "Prototype direction", "Long-term R&D"],
    features: [
      {
        title: "Research framing",
        description: "Explore care-focused robotics and AI devices from a product and family ecosystem perspective."
      },
      {
        title: "Prototype direction",
        description: "Define future experiments for sensors, assistant behavior and care task support."
      },
      {
        title: "Long-term ecosystem link",
        description: "Connect future device research with the family software direction over time."
      }
    ],
    benefits: [
      {
        title: "Future-oriented research",
        description: "Keep a dedicated track for technologies that need longer validation cycles."
      },
      {
        title: "Care-centered design",
        description: "Frame robotics ideas around support, safety and family usefulness."
      },
      {
        title: "Clear product boundary",
        description: "Present R&D honestly as research rather than a completed commercial product."
      }
    ],
    cta: "View Care Robot R&D"
  }
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
    name: "Telegram Bot Setup",
    description: "Custom support, notification and automation bots.",
    status: "Available",
    tone: "available" as StatusTone,
    icon: "bot" as IconName
  },
  {
    name: "Telegram Mini Apps",
    description: "Compact product interfaces inside Telegram.",
    status: "In development",
    tone: "development" as StatusTone,
    icon: "apps" as IconName
  },
  {
    name: "Family Dashboard",
    description: "Shared family profiles, services and assistant layer.",
    status: "Coming soon",
    tone: "future" as StatusTone,
    icon: "network" as IconName
  }
];

export const contactCards = [
  {
    title: "Telegram",
    description: "Contact Arvexo for product questions, VPN access, bot setup and partnership discussions.",
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

export const robotRoadmap = [
  "Research framing",
  "Care task modeling",
  "Assistant behavior prototypes",
  "Sensor and device concepts",
  "Family ecosystem integration"
];

export function getDirection(slug: Direction["slug"]) {
  return directions.find((direction) => direction.slug === slug);
}
