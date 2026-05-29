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
      { label: "Продукты", href: "/shop" },
      { label: "Для образования", href: "https://study.arvexo.ru" },
      { label: "Для бизнеса", href: "/contacts" },
      { label: "Партнёрам", href: "/contacts" },
      { label: "FAQ", href: "/#faq" }
    ],
    mobileExtra: [
      { label: "Ранний доступ", href: "/register" },
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
      { label: "Для образования", href: "https://study.arvexo.ru" },
      { label: "Для бизнеса", href: "/contacts" },
      { label: "Партнёрам", href: "/contacts" }
    ],
    footerProducts: [
      { label: "Arvexo Study", href: "https://study.arvexo.ru" },
      { label: "AI Products", href: "/shop" },
      { label: "AI Consulting", href: "/contacts" },
      { label: "Telegram-боты", href: "/telegram-bots" }
    ],
    footerCompany: [
      { label: "О нас", href: "/about" },
      { label: "FAQ", href: "/#faq" },
      { label: "Контакты", href: "/contacts" },
      { label: "Политика конфиденциальности", href: "/privacy-policy" },
      { label: "Условия", href: "/terms" }
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
      { label: "Products", href: "/shop" },
      { label: "Education", href: "https://study.arvexo.ru" },
      { label: "Business", href: "/contacts" },
      { label: "Partners", href: "/contacts" },
      { label: "FAQ", href: "/#faq" }
    ],
    mobileExtra: [
      { label: "Early access", href: "/register" },
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
      { label: "Education", href: "https://study.arvexo.ru" },
      { label: "Business", href: "/contacts" },
      { label: "Partners", href: "/contacts" }
    ],
    footerProducts: [
      { label: "Arvexo Study", href: "https://study.arvexo.ru" },
      { label: "AI Products", href: "/shop" },
      { label: "AI Consulting", href: "/contacts" },
      { label: "Telegram Bots", href: "/telegram-bots" }
    ],
    footerCompany: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contacts", href: "/contacts" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" }
    ]
  }
} as const;

export const footerSocials = [
  { label: "Telegram", href: "https://t.me/arvexoai" },
  { label: "Email", href: "mailto:arvexoai@gmail.com" },
  { label: "GitHub", href: "/contacts" }
];
