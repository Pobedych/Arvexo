import type { IconName } from "@/components/Icons";

export const telegramUrl = "https://t.me/arvexoai";
export const emailUrl = "arvexoai@gmail.com";

export const navigation = [
  { label: "Магазин", href: "#shop" },
  { label: "Проекты", href: "#projects" },
  { label: "О бренде", href: "#about" },
  { label: "Контакты", href: "#contacts" }
];

export const directions: Array<{
  title: string;
  description: string;
  icon: IconName;
}> = [
  {
    title: "AI Subscriptions",
    description: "Доступ к AI-сервисам и цифровым подпискам.",
    icon: "brain"
  },
  {
    title: "VPN & Privacy",
    description: "Приватный доступ, защита данных и безопасное подключение.",
    icon: "shield"
  },
  {
    title: "Telegram Bots",
    description: "Боты для задач, поддержки, бизнеса и автоматизации.",
    icon: "bot"
  },
  {
    title: "Mini Apps",
    description: "Telegram mini apps для цифровых сервисов и удобных сценариев.",
    icon: "apps"
  },
  {
    title: "Automation",
    description: "Автоматизация процессов, интеграций и рутинных задач.",
    icon: "bolt"
  },
  {
    title: "Future R&D",
    description: "Будущие эксперименты в области AI, автоматизации и робототехники.",
    icon: "flask"
  }
];

export const projects = [
  "AI Assistant",
  "Personal Dashboard",
  "Server Monitoring",
  "Telegram Mini Apps",
  "Automation Tools",
  "Future R&D Experiments"
];

export const advantages: Array<{
  title: string;
  description: string;
  icon: IconName;
}> = [
  {
    title: "Понятная настройка",
    description: "Помогаем подключить сервисы без технической путаницы.",
    icon: "gear"
  },
  {
    title: "Поддержка",
    description: "Помогаем разобраться с подключением и использованием продуктов.",
    icon: "headphones"
  },
  {
    title: "Приватность",
    description: "Фокус на безопасном доступе и защите цифровой активности.",
    icon: "shield"
  },
  {
    title: "Единая экосистема",
    description: "Развиваем платформу, где цифровые сервисы работают вместе.",
    icon: "network"
  }
];
