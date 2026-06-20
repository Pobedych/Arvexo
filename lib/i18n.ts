export type Locale = "ru" | "en";

export const locales: Locale[] = ["en", "ru"];

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : "en";
}

export function stripLocale(pathname: string) {
  if (pathname === "/en" || pathname === "/ru") {
    return "/";
  }

  if (pathname.startsWith("/en/") || pathname.startsWith("/ru/")) {
    return pathname.slice(3) || "/";
  }

  return pathname || "/";
}

export function localizeHref(href: string, locale: Locale) {
  if (!href.startsWith("/")) {
    return href;
  }

  const cleanHref = stripLocale(href);

  if (locale === "en") {
    return cleanHref;
  }

  if (cleanHref === "/") {
    return "/ru";
  }

  return `/ru${cleanHref}`;
}

export function localeSwitchHref(pathname: string, locale: Locale) {
  const basePath = stripLocale(pathname);

  if (locale === "en") {
    return basePath;
  }

  return basePath === "/" ? "/ru" : `/ru${basePath}`;
}

export const chromeContent = {
  ru: {
    homeLabel: "На главную Arvexo",
    mainNavLabel: "Основная навигация",
    mobileNavLabel: "Мобильная навигация",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    contactsLabel: "Войти",
    contactsAria: "Открыть личный кабинет Arvexo",
    navigation: [
      { label: "Продукты", href: "/#products" },
      { label: "Для бизнеса", href: "/#business" },
      { label: "FAQ", href: "/#faq" }
    ],
    mobileExtra: [
      { label: "Ранний доступ", href: "https://account.arvexo.ru" },
      { label: "Контакты", href: "/contacts" }
    ],
    footerDescription:
      "Arvexo — молодая AI-экосистема для обучения, AI-инструментов, Telegram-ботов и автоматизации бизнес-процессов.",
    footerQuestion: "Ранний доступ, партнерство или внедрение?",
    footerCta: "Связаться с Arvexo",
    footerBottom: "© 2026 Arvexo. MVP в разработке · запуск экосистемы в 2026.",
    footerColumns: {
      directions: "Направления",
      products: "Продукты",
      company: "Компания",
      socials: "Соцсети"
    },
    footerDirections: [
      { label: "Продукты", href: "/shop" },
      { label: "Для бизнеса", href: "/contacts" },
      { label: "Партнёрам", href: "/contacts" }
    ],
    footerProducts: [
      { label: "Arvexo Connect", href: "/vpn" },
      { label: "AI Products", href: "/shop" },
      { label: "AI Consulting", href: "/contacts" },
      { label: "Telegram-боты", href: "/telegram-bots" }
    ],
    footerCompany: [
      { label: "О нас", href: "/about" },
      { label: "FAQ", href: "/#faq" },
      { label: "Контакты", href: "/contacts" },
      { label: "Оферта", href: "/offer" },
      { label: "Политика конфиденциальности", href: "/privacy-policy" },
      { label: "Пользовательское соглашение", href: "/terms" },
      { label: "Возвраты", href: "/refund-policy" },
      { label: "Персональные данные", href: "/personal-data-consent" }
    ]
  },
  en: {
    homeLabel: "Arvexo home",
    mainNavLabel: "Main navigation",
    mobileNavLabel: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contactsLabel: "Sign in",
    contactsAria: "Open Arvexo account",
    navigation: [
      { label: "Products", href: "/#products" },
      { label: "Business", href: "/#business" },
      { label: "FAQ", href: "/#faq" }
    ],
    mobileExtra: [
      { label: "Early access", href: "https://account.arvexo.ru" },
      { label: "Contacts", href: "/contacts" }
    ],
    footerDescription:
      "Arvexo is a young AI ecosystem for learning, AI tools, Telegram bots and business automation.",
    footerQuestion: "Early access, partnership or implementation?",
    footerCta: "Contact Arvexo",
    footerBottom: "© 2026 Arvexo. MVP in development · ecosystem launch in 2026.",
    footerColumns: {
      directions: "Directions",
      products: "Products",
      company: "Company",
      socials: "Socials"
    },
    footerDirections: [
      { label: "Products", href: "/shop" },
      { label: "Business", href: "/contacts" },
      { label: "Partners", href: "/contacts" }
    ],
    footerProducts: [
      { label: "Arvexo Connect", href: "/vpn" },
      { label: "AI Products", href: "/shop" },
      { label: "AI Consulting", href: "/contacts" },
      { label: "Telegram Bots", href: "/telegram-bots" }
    ],
    footerCompany: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contacts", href: "/contacts" },
      { label: "Public Offer", href: "/offer" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "User Agreement", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Personal Data Consent", href: "/personal-data-consent" }
    ]
  }
} as const;

export const footerSocials = [
  { label: "Telegram", href: "https://t.me/arvexoai" },
  { label: "Email", href: "mailto:arvexoai@gmail.com" },
  { label: "GitHub", href: "/contacts" }
];
