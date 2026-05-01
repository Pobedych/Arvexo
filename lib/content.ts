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
  { label: "Arvexo Shop", href: "#shop" },
  { label: "Контакты", href: "#contacts" }
];

export const footerProducts = [
  { label: "Arvexo Shop", href: "#shop" },
  { label: "VPN Access", href: "#vpn" },
  { label: "Telegram Bots", href: "#telegram-bots" }
];

export const directions: Array<{
  title: string;
  description: string;
  icon: IconName;
  href: string;
  status: string;
  featured?: boolean;
}> = [
  {
    title: "VPN",
    description: "Приватный доступ, защита данных и стабильное подключение для личного использования.",
    icon: "shield",
    href: "#vpn",
    status: "Active products"
  },
  {
    title: "Telegram Bots",
    description: "Боты для задач, бизнеса, поддержки и автоматизации.",
    icon: "bot",
    href: "#telegram-bots",
    status: "Active products"
  },
  {
    title: "Family Ecosystem",
    description: "Семейная цифровая экосистема: сервисы, профили, помощники и единое пространство для семьи.",
    icon: "network",
    href: "#family-ecosystem",
    status: "Startup direction",
    featured: true
  },
  {
    title: "Care Robot R&D",
    description: "Будущее направление Arvexo: исследования в области роботов-помощников, AI и технологий заботы.",
    icon: "flask",
    href: "#care-robot-rd",
    status: "Future R&D"
  }
];

export const familyFeatures = [
  "Семейные профили",
  "AI-помощники",
  "Личные сервисы",
  "Единое цифровое пространство"
];

export const projects: Array<{
  title: string;
  status: "Active" | "In development" | "Future R&D";
}> = [
  { title: "VPN Access", status: "Active" },
  { title: "Telegram Bots", status: "Active" },
  { title: "Telegram Mini Apps", status: "Active" },
  { title: "Family Dashboard", status: "In development" },
  { title: "AI Family Assistant", status: "In development" },
  { title: "Care Robot R&D Experiments", status: "Future R&D" }
];

export const advantages: Array<{
  title: string;
  description: string;
  icon: IconName;
}> = [
  {
    title: "Приватность",
    description: "Безопасный доступ и защита цифровой активности.",
    icon: "shield"
  },
  {
    title: "Понятная настройка",
    description: "Подключение цифровых сервисов без лишней технической сложности.",
    icon: "gear"
  },
  {
    title: "Полезные продукты",
    description: "VPN, Telegram-боты и mini apps для реальных задач.",
    icon: "apps"
  },
  {
    title: "Долгосрочная экосистема",
    description: "Развитие платформы для семьи, сервисов и будущих технологий.",
    icon: "network"
  }
];
