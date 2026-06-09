import type { IconName } from "@/components/Icons";

export const telegramUrl = "https://t.me/arvexoai";
export const emailUrl = "mailto:arvexoai@gmail.com";
export const githubUrl = "/contacts";

export const navigation = [
  { label: "Магазин", href: "/shop" },
  { label: "Семейная экосистема", href: "/family-ecosystem" },
  { label: "Robots R&D", href: "/robots-rd" },
  { label: "О нас", href: "/about" }
];

export const mobileNavigation = [...navigation, { label: "Контакты", href: "/contacts" }];

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
  visual: "shop" | "family" | "robot" | "platform";
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
  "Инструменты приватности",
  "Telegram-автоматизация",
  "Семейный ассистент",
  "Robotics R&D"
];

export const landingDirections: LandingDirection[] = [
  {
    label: "Активный продукт",
    title: "AI Shop",
    description:
      "Цифровые продукты Arvexo: VPN-доступ, Telegram-боты, AI-подписки, мини-приложения и инструменты автоматизации.",
    tags: ["VPN", "Telegram-боты", "Мини-приложения", "AI-сервисы"],
    mockupTitle: "AI Shop",
    rows: [
      { label: "VPN-доступ", status: "Доступен" },
      { label: "Telegram-боты", status: "Доступны" },
      { label: "Мини-приложения", status: "В разработке" },
      { label: "AI-сервисы", status: "Запланированы" }
    ]
  },
  {
    label: "Основное startup-направление",
    title: "Семейная экосистема",
    description:
      "Семейная цифровая экосистема с профилями, AI-ассистентом, общими задачами, напоминаниями, персональными сервисами и безопасным пространством для повседневной жизни.",
    tags: ["Семейный чат", "Профили", "Безопасное пространство", "AI-ассистент"],
    mockupTitle: "Семейная экосистема",
    rows: [
      { label: "Семейные профили", status: "Синхронизированы" },
      { label: "AI-ассистент", status: "Готов" },
      { label: "Общие задачи", status: "Сегодня" },
      { label: "Безопасное пространство", status: "Защищено" }
    ]
  },
  {
    label: "Будущее R&D",
    title: "Robots R&D",
    description:
      "Будущее исследовательское направление для care-роботов, AI-устройств и технологий, которые смогут поддерживать семьи в повседневной жизни.",
    tags: ["Care Robot", "AI-устройства", "R&D", "Будущие технологии"],
    mockupTitle: "Robots R&D",
    rows: [
      { label: "Сценарии заботы", status: "Исследование" },
      { label: "AI-модель поведения", status: "Концепт" },
      { label: "Планирование прототипа", status: "Будущее" },
      { label: "Уровень устройств", status: "Изучение" }
    ]
  }
];

export const roadmapSteps: RoadmapStep[] = [
  {
    step: "Шаг 1",
    title: "AI Shop",
    description:
      "Цифровые продукты Arvexo: VPN-доступ, Telegram-боты, AI-сервисы и мини-приложения для реальных повседневных задач.",
    labels: ["VPN-доступ", "Telegram-боты", "AI-сервисы", "Мини-приложения"],
    visual: "shop"
  },
  {
    step: "Шаг 2",
    title: "Семейная экосистема",
    description:
      "Семейная платформа с профилями, AI-ассистентом, общими задачами, напоминаниями и безопасным цифровым пространством.",
    labels: ["Семейные профили", "AI-ассистент", "Общие задачи", "Безопасное пространство"],
    visual: "family"
  },
  {
    step: "Шаг 3",
    title: "Robots R&D",
    description:
      "Будущее исследовательское направление для care-роботов, AI-устройств и технологий семейной поддержки.",
    labels: ["Сценарии заботы", "AI-устройства", "Планирование прототипа", "Будущее R&D"],
    visual: "robot"
  },
  {
    step: "Шаг 4",
    title: "Единая платформа",
    description:
      "Один аккаунт Arvexo, панель управления, подписки, подключенные сервисы и будущая интеграция устройств.",
    labels: ["Аккаунт Arvexo", "Подключенные сервисы", "Семейная панель", "Интеграция устройств"],
    visual: "platform"
  }
];

export const visionFocus = [
  "AI Shop — цифровые продукты, VPN, Telegram-боты и AI-сервисы",
  "Семейная экосистема — профили, ассистент, общие задачи и безопасное пространство",
  "Robots R&D — будущие care-роботы, AI-устройства и технологии семейной поддержки",
  "Единая платформа — один аккаунт, панель управления и подключенные сервисы"
];

export const benefits: Benefit[] = [
  {
    icon: "shield",
    title: "Privacy-first подход",
    description:
      "Цифровые продукты и семейные сервисы должны строиться вокруг безопасного доступа и защищенной цифровой активности."
  },
  {
    icon: "bolt",
    title: "AI-автоматизация",
    description:
      "Telegram-боты, мини-приложения и сценарии ассистента помогают автоматизировать рутинные задачи и ежедневные процессы."
  },
  {
    icon: "bag",
    title: "Активные продукты",
    description:
      "AI Shop дает Arvexo практический коммерческий слой: VPN-доступ, Telegram-боты, AI-сервисы и мини-приложения."
  },
  {
    icon: "network",
    title: "Семейная платформа",
    description:
      "Семейная экосистема фокусируется на профилях, общих задачах, напоминаниях, персональных сервисах и AI-помощи."
  },
  {
    icon: "flask",
    title: "Будущее робототехники",
    description:
      "Robots R&D исследует care-роботов, AI-устройства и технологии, которые смогут поддерживать семьи."
  },
  {
    icon: "apps",
    title: "Долгосрочная экосистема",
    description:
      "Цель Arvexo — не один продукт, а связанная платформа, где сервисы, семейные инструменты и будущие устройства работают вместе."
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "Что такое Arvexo?",
    answer:
      "Arvexo — цифровая экосистема, которая объединяет AI Shop, Семейную экосистему и будущее направление Robots R&D в одну долгосрочную технологическую платформу."
  },
  {
    question: "Что такое AI Shop?",
    answer:
      "AI Shop — активное продуктовое направление Arvexo. Оно включает цифровые продукты: VPN-доступ, Telegram-боты, AI-сервисы, мини-приложения и инструменты автоматизации."
  },
  {
    question: "Что такое Семейная экосистема?",
    answer:
      "Семейная экосистема — основное startup-направление Arvexo. Оно фокусируется на семейных профилях, AI-ассистенте, общих задачах, напоминаниях, персональных сервисах и одном безопасном цифровом пространстве для повседневной жизни."
  },
  {
    question: "Что такое Robots R&D?",
    answer:
      "Robots R&D — будущее исследовательское направление, связанное с care-роботами, AI-устройствами и технологиями семейной поддержки. Оно не представлено как готовый продукт."
  },
  {
    question: "Arvexo уже является готовой платформой?",
    answer:
      "Не полностью. Arvexo развивается поэтапно: сначала активные цифровые продукты, затем Семейная экосистема, после этого Robots R&D и единый платформенный опыт."
  },
  {
    question: "Как связаться с Arvexo?",
    answer:
      "С Arvexo можно связаться через Telegram или email, чтобы обсудить продукты, партнерства, разработку или будущую коллаборацию."
  }
];

export const footerDirections = [
  { label: "AI Shop", href: "/shop" },
  { label: "Семейная экосистема", href: "/family-ecosystem" },
  { label: "Robots R&D", href: "/robots-rd" }
];

export const footerProducts = [
  { label: "Arvexo Connect", href: "/vpn" },
  { label: "VPN-доступ", href: "/vpn" },
  { label: "Telegram-боты", href: "/telegram-bots" },
  { label: "AI-сервисы", href: "/shop" },
  { label: "Мини-приложения", href: "/shop" }
];

export const footerCompany = [
  { label: "О нас", href: "/about" },
  { label: "Дорожная карта", href: "/#roadmap" },
  { label: "Контакты", href: "/contacts" },
  { label: "Оферта", href: "/offer" },
  { label: "Политика конфиденциальности", href: "/privacy-policy" },
  { label: "Пользовательское соглашение", href: "/terms" },
  { label: "Возвраты", href: "/refund-policy" },
  { label: "Персональные данные", href: "/personal-data-consent" }
];

export const footerSocials = [
  { label: "Telegram", href: telegramUrl },
  { label: "Email", href: emailUrl },
  { label: "GitHub", href: githubUrl }
];

export const shopProducts = [
  {
    name: "VPN-доступ",
    description: "Приватный доступ и направление цифровой безопасности.",
    status: "Доступен",
    tone: "available" as StatusTone,
    icon: "shield" as IconName
  },
  {
    name: "Telegram-боты",
    description: "Боты для поддержки, уведомлений и автоматизации.",
    status: "Доступны",
    tone: "available" as StatusTone,
    icon: "bot" as IconName
  },
  {
    name: "AI-сервисы",
    description: "Прикладные AI-сервисы и помощь в рабочих процессах.",
    status: "Запланированы",
    tone: "future" as StatusTone,
    icon: "brain" as IconName
  },
  {
    name: "Мини-приложения",
    description: "Компактные продуктовые интерфейсы и инструменты автоматизации.",
    status: "В разработке",
    tone: "development" as StatusTone,
    icon: "apps" as IconName
  }
];

export const robotRoadmap = [
  "Сценарии заботы",
  "AI-модель поведения",
  "Планирование прототипа",
  "Уровень устройств",
  "Интеграция с семейной экосистемой"
];

export const directions: Direction[] = [
  {
    slug: "vpn",
    href: "/vpn",
    label: "VPN-доступ",
    eyebrow: "ПРОДУКТ AI SHOP",
    title: "VPN-доступ для приватной цифровой активности",
    homeTitle: "VPN-доступ",
    status: "Доступен",
    tone: "available",
    icon: "shield",
    panel: "vpn",
    intro: "Приватный доступ и защищенное подключение внутри Arvexo AI Shop.",
    description:
      "VPN-доступ — один из активных продуктов Arvexo, который формирует слой приватности для повседневной цифровой активности.",
    points: ["Безопасный доступ", "Приватная активность", "Стабильное подключение", "Продукт AI Shop"],
    features: [
      {
        title: "Защищенный доступ",
        description: "Практическое продуктовое направление для приватного браузинга и безопасного доступа."
      },
      {
        title: "Коммерческий слой",
        description: "Часть активного каталога AI Shop, а не будущая концепция."
      },
      {
        title: "Связь с экосистемой",
        description: "База приватности, которая поддерживает долгосрочное видение платформы Arvexo."
      }
    ],
    benefits: [
      {
        title: "Privacy-first использование",
        description: "Цифровой доступ начинается с понятных границ приватности."
      },
      {
        title: "Полезно уже сейчас",
        description: "VPN-доступ — активное продуктовое направление Arvexo."
      },
      {
        title: "Фундамент платформы",
        description: "Инструменты приватности усиливают долгосрочную экосистему Arvexo."
      }
    ],
    cta: "Смотреть VPN-доступ"
  },
  {
    slug: "telegram-bots",
    href: "/telegram-bots",
    label: "Telegram-боты",
    eyebrow: "ПРОДУКТ AI SHOP",
    title: "Telegram-боты для автоматизации и мини-сервисов",
    homeTitle: "Telegram-боты",
    status: "Доступны",
    tone: "available",
    icon: "bot",
    panel: "bots",
    intro: "Telegram-боты для поддержки, уведомлений, рабочих процессов, мини-приложений и сервисной автоматизации.",
    description:
      "Telegram-боты — активное продуктовое направление Arvexo для автоматизации, поддержки, напоминаний и компактных сервисных сценариев.",
    points: ["Боты поддержки", "Уведомления", "Мини-сервисы", "Инструменты автоматизации"],
    features: [
      {
        title: "Bot-сценарии",
        description: "Полезные сценарии для заявок, напоминаний, форм и операционных действий."
      },
      {
        title: "Доступ внутри Telegram",
        description: "Автоматизация запускается в интерфейсе, которым люди уже пользуются каждый день."
      },
      {
        title: "Путь к мини-приложениям",
        description: "Со временем bot-логику можно соединять с компактными продуктовыми интерфейсами."
      }
    ],
    benefits: [
      {
        title: "Автоматизация рутины",
        description: "Повторяющиеся шаги переходят в предсказуемые Telegram-сценарии."
      },
      {
        title: "Быстрый доступ к продукту",
        description: "Полезные сервисы можно запускать без сложного onboarding."
      },
      {
        title: "Коммерческая база",
        description: "Боты поддерживают активный продуктовый слой AI Shop."
      }
    ],
    cta: "Смотреть Telegram-боты"
  },
  {
    slug: "family-ecosystem",
    href: "/family-ecosystem",
    label: "Семейная экосистема",
    eyebrow: "ОСНОВНОЕ STARTUP-НАПРАВЛЕНИЕ",
    title: "Семейная экосистема для повседневных семейных технологий",
    homeTitle: "Семейная экосистема",
    status: "Startup-направление",
    tone: "development",
    icon: "network",
    panel: "family",
    intro: "Семейные профили, AI-ассистент, общие задачи, напоминания и одно безопасное цифровое пространство.",
    description:
      "Семейная экосистема — основное startup-направление Arvexo: защищенная семейная платформа для профилей, сценариев ассистента, общих задач, напоминаний и персональных сервисов.",
    points: ["Семейные профили", "AI-ассистент", "Общие задачи", "Безопасное пространство"],
    features: [
      {
        title: "Семейные профили",
        description: "Пространства профилей для ролей, предпочтений, напоминаний и общих обязанностей."
      },
      {
        title: "AI-ассистент",
        description: "Сценарии ассистента для координации, напоминаний и повседневных семейных действий."
      },
      {
        title: "Безопасное семейное пространство",
        description: "Privacy-centered направление платформы для чувствительной семейной информации."
      }
    ],
    benefits: [
      {
        title: "Одна семейная панель",
        description: "Общие сервисы и задачи собираются в понятный платформенный опыт."
      },
      {
        title: "Слой ассистента",
        description: "AI помогает координировать повседневные семейные процессы."
      },
      {
        title: "Путь к будущим устройствам",
        description: "Создает программную основу для долгосрочного robotics R&D."
      }
    ],
    cta: "Смотреть Семейную экосистему"
  },
  {
    slug: "robots-rd",
    href: "/robots-rd",
    label: "Robots R&D",
    eyebrow: "БУДУЩЕЕ R&D",
    title: "Robots R&D для будущих технологий семейной поддержки",
    homeTitle: "Robots R&D",
    status: "R&D-направление",
    tone: "future",
    icon: "flask",
    panel: "robot",
    intro: "Будущие исследования care-роботов, AI-устройств и технологий семейной поддержки.",
    description:
      "Robots R&D — будущее исследовательское направление Arvexo, сфокусированное на сценариях заботы, AI-моделях поведения, планировании прототипов и концептах устройств.",
    points: ["Сценарии заботы", "AI-устройства", "Планирование прототипа", "Будущее R&D"],
    features: [
      {
        title: "Исследовательская рамка",
        description: "Сначала изучаются сценарии семейной поддержки, а не презентуется готовый продукт."
      },
      {
        title: "AI-модели поведения",
        description: "Исследуется поведение ассистента, которое может поддерживать care-технологии."
      },
      {
        title: "Концепты устройств",
        description: "Долгосрочные hardware-идеи связываются с программным слоем Семейной экосистемы."
      }
    ],
    benefits: [
      {
        title: "Долгосрочное видение",
        description: "Отдельный трек для будущих care- и device-технологий."
      },
      {
        title: "Честная граница продукта",
        description: "Робототехника показывается как R&D, а не как готовый коммерческий продукт."
      },
      {
        title: "Фокус на семейной поддержке",
        description: "Исследования строятся вокруг реальных семейных сценариев и безопасной помощи."
      }
    ],
    cta: "Смотреть Robots R&D"
  }
];

export const contactCards = [
  {
    title: "Telegram",
    description: "Свяжитесь с Arvexo по вопросам доступа к продуктам, партнерств и быстрой коллаборации.",
    href: telegramUrl,
    label: "Открыть Telegram",
    icon: "telegram" as IconName
  },
  {
    title: "Email",
    description: "Используйте email для структурированных запросов, деталей по продуктам и длинных предложений.",
    href: emailUrl,
    label: "Написать email",
    icon: "mail" as IconName
  }
];

export function getDirection(slug: Direction["slug"]) {
  return directions.find((direction) => direction.slug === slug);
}
