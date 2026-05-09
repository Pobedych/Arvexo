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
    contactsLabel: "Контакты",
    contactsAria: "Открыть страницу контактов",
    navigation: [
      { label: "Магазин", href: "/shop" },
      { label: "Семейная экосистема", href: "/family-ecosystem" },
      { label: "Robots R&D", href: "/robots-rd" },
      { label: "О нас", href: "/about" }
    ],
    mobileExtra: [{ label: "Контакты", href: "/contacts" }],
    footerDescription:
      "Arvexo — AI-экосистема для цифровых продуктов, семейных технологий и будущего robotics R&D.",
    footerQuestion: "Вопросы, партнерства или доступ к продуктам?",
    footerCta: "Связаться с Arvexo",
    footerBottom: "© 2026 Arvexo. Все права защищены.",
    footerColumns: {
      directions: "Направления",
      products: "Продукты",
      company: "Компания",
      socials: "Соцсети"
    },
    footerDirections: [
      { label: "AI Shop", href: "/shop" },
      { label: "Семейная экосистема", href: "/family-ecosystem" },
      { label: "Robots R&D", href: "/robots-rd" }
    ],
    footerProducts: [
      { label: "VPN-доступ", href: "/vpn" },
      { label: "Telegram-боты", href: "/telegram-bots" },
      { label: "AI-сервисы", href: "/shop" },
      { label: "Мини-приложения", href: "/shop" }
    ],
    footerCompany: [
      { label: "О нас", href: "/about" },
      { label: "Дорожная карта", href: "/#roadmap" },
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
    contactsLabel: "Contacts",
    contactsAria: "Open contacts page",
    navigation: [
      { label: "Shop", href: "/shop" },
      { label: "Family Ecosystem", href: "/family-ecosystem" },
      { label: "Robots R&D", href: "/robots-rd" },
      { label: "About", href: "/about" }
    ],
    mobileExtra: [{ label: "Contacts", href: "/contacts" }],
    footerDescription:
      "Arvexo — AI ecosystem for digital products, family technology and future robotics R&D.",
    footerQuestion: "Questions, partnerships or product access?",
    footerCta: "Contact Arvexo",
    footerBottom: "© 2026 Arvexo. All rights reserved.",
    footerColumns: {
      directions: "Directions",
      products: "Products",
      company: "Company",
      socials: "Socials"
    },
    footerDirections: [
      { label: "AI Shop", href: "/shop" },
      { label: "Family Ecosystem", href: "/family-ecosystem" },
      { label: "Robots R&D", href: "/robots-rd" }
    ],
    footerProducts: [
      { label: "VPN Access", href: "/vpn" },
      { label: "Telegram Bots", href: "/telegram-bots" },
      { label: "AI Services", href: "/shop" },
      { label: "Mini Apps", href: "/shop" }
    ],
    footerCompany: [
      { label: "About", href: "/about" },
      { label: "Roadmap", href: "/#roadmap" },
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
