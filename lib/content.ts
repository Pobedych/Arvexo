import type { IconName } from "@/components/Icons";

export const telegramUrl = "https://t.me/arvexoai";
export const emailUrl = "mailto:arvexoai@gmail.com";

export const navigation = [
  { label: "VPN", href: "#vpn" },
  { label: "Telegram Bots", href: "#telegram-bots" },
  { label: "Family Ecosystem", href: "#family-ecosystem" },
  { label: "Care Robot R&D", href: "#care-robot-rd" }
];

export const mobileNavigation = [
  ...navigation,
  { label: "Contacts", href: "#contacts" }
];

export const footerProducts = [
  { label: "VPN", href: "#vpn" },
  { label: "Telegram Bots", href: "#telegram-bots" },
  { label: "Family Ecosystem", href: "#family-ecosystem" },
  { label: "Care Robot R&D", href: "#care-robot-rd" }
];

export type DirectionVisual = "vpn" | "bots" | "family" | "robot";

export const directions: Array<{
  title: string;
  description: string;
  icon: IconName;
  href: string;
  status: string;
  visual: DirectionVisual;
}> = [
  {
    title: "VPN",
    description: "Приватный доступ, защита данных и стабильное подключение.",
    icon: "shield",
    href: "#vpn",
    status: "Protected",
    visual: "vpn"
  },
  {
    title: "Telegram Bots",
    description: "Боты для задач, бизнеса, поддержки и автоматизации.",
    icon: "bot",
    href: "#telegram-bots",
    status: "Running",
    visual: "bots"
  },
  {
    title: "Family Ecosystem",
    description:
      "Семейная цифровая экосистема: профили, помощники, сервисы и единое пространство для семьи.",
    icon: "network",
    href: "#family-ecosystem",
    status: "In development",
    visual: "family"
  },
  {
    title: "Care Robot R&D",
    description:
      "Будущее направление Arvexo: исследования в области роботов-помощников, AI и технологий заботы.",
    icon: "flask",
    href: "#care-robot-rd",
    status: "Future R&D",
    visual: "robot"
  }
];

export type ProcessVisual = "checklist" | "dashboard" | "research" | "platform";

export const processSteps: Array<{
  eyebrow: string;
  title: string;
  description: string;
  status: string;
  visual: ProcessVisual;
}> = [
  {
    eyebrow: "Step 1",
    title: "Digital products",
    description: "VPN and Telegram Bots as active commercial products.",
    status: "Active",
    visual: "checklist"
  },
  {
    eyebrow: "Step 2",
    title: "Family ecosystem",
    description: "Family profiles, dashboards and AI assistants.",
    status: "In development",
    visual: "dashboard"
  },
  {
    eyebrow: "Step 3",
    title: "Care Robot R&D",
    description: "Research direction for future care robots and AI-powered devices.",
    status: "Research",
    visual: "research"
  },
  {
    eyebrow: "Step 4",
    title: "Unified platform",
    description:
      "Long-term ecosystem where services, family tools and future devices work together.",
    status: "Long-term",
    visual: "platform"
  }
];

export type VisionVisual = "privacy" | "automation" | "family" | "robot";

export const visionCards: Array<{
  title: string;
  description: string;
  icon: IconName;
  visual: VisionVisual;
}> = [
  {
    title: "Privacy-first access",
    description: "Secure connectivity and personal data protection for everyday digital work.",
    icon: "shield",
    visual: "privacy"
  },
  {
    title: "Telegram automation",
    description: "Bots, mini apps and workflows for support, sales and notifications.",
    icon: "bot",
    visual: "automation"
  },
  {
    title: "Family dashboard",
    description: "Shared profiles, reminders, assistants and protected family services.",
    icon: "network",
    visual: "family"
  },
  {
    title: "Future care robot research",
    description: "R&D track for assistant devices, sensors and AI-powered care scenarios.",
    icon: "flask",
    visual: "robot"
  }
];
