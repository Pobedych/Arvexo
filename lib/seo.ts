import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

export const SITE_URL = "https://arvexo.ru";
export const SITE_NAME = "Arvexo";
export const SITE_TITLE = "Arvexo — AI-экосистема для обучения, бизнеса и автоматизации";
export const SITE_DESCRIPTION =
  "Arvexo запускает экосистему AI-продуктов: тренажёр ЕГЭ, AI-инструменты, Telegram-магазин, боты и внедрение нейросетей в бизнес-процессы.";
export const SEO_IMAGE = "/images/arvexo-lockup.png";
export const LAST_MODIFIED = new Date("2026-05-09T00:00:00.000Z");

export const routePaths = [
  "/",
  "/about",
  "/shop",
  "/vpn",
  "/telegram-bots",
  "/family-ecosystem",
  "/robots-rd",
  "/contacts",
  "/offer",
  "/refund-policy",
  "/personal-data-consent",
  "/privacy-policy",
  "/terms"
] as const;

export type BaseRoutePath = (typeof routePaths)[number];

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

type SeoCopy = {
  description: string;
  title: string;
};

export const routeSeo: Record<Locale, Record<BaseRoutePath, SeoCopy>> = {
  en: {
    "/": {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION
    },
    "/about": {
      title: "About — Arvexo",
      description:
        "Learn how Arvexo is building a long-term AI ecosystem for digital products, family technology and future robotics R&D."
    },
    "/shop": {
      title: "AI Shop — Arvexo",
      description:
        "Explore Arvexo AI Shop products for VPN access, Telegram bots, AI services, mini apps and automation tools."
    },
    "/vpn": {
      title: "VPN Access — Arvexo",
      description:
        "VPN Access by Arvexo is an active AI Shop product direction for private digital activity and secure connectivity."
    },
    "/telegram-bots": {
      title: "Telegram Bots — Arvexo",
      description:
        "Arvexo builds Telegram bots for support, workflows, mini services, notifications and everyday automation."
    },
    "/family-ecosystem": {
      title: "Family Ecosystem — Arvexo",
      description:
        "Family Ecosystem is Arvexo's core startup direction for profiles, AI assistant, shared tasks, reminders and secure family space."
    },
    "/robots-rd": {
      title: "Robots R&D — Arvexo",
      description:
        "Robots R&D is Arvexo's future research direction for care robots, AI-powered devices and family support technologies."
    },
    "/contacts": {
      title: "Contacts — Arvexo",
      description: "Contact Arvexo through Telegram or email for products, partnerships, development and collaboration."
    },
    "/offer": {
      title: "Public Offer — Arvexo",
      description: "Read the Arvexo public offer for early access, digital products, subscriptions and AI services."
    },
    "/refund-policy": {
      title: "Refund Policy — Arvexo",
      description: "Read the Arvexo refund policy for digital products, subscriptions, early access and services."
    },
    "/personal-data-consent": {
      title: "Personal Data Consent — Arvexo",
      description: "Read the Arvexo personal data processing consent for product access, communication and support."
    },
    "/privacy-policy": {
      title: "Privacy Policy — Arvexo",
      description:
        "Read the Arvexo privacy policy for product access, digital services and privacy-first platform development."
    },
    "/terms": {
      title: "User Agreement — Arvexo",
      description: "Read the Arvexo user agreement for website access, AI tools, digital products and future platform services."
    }
  },
  ru: {
    "/": {
      title: "Arvexo — AI-экосистема для обучения, бизнеса и автоматизации",
      description:
        "Arvexo запускает экосистему AI-продуктов: тренажёр ЕГЭ, AI-инструменты, Telegram-магазин, боты и внедрение нейросетей в бизнес-процессы."
    },
    "/about": {
      title: "О нас — Arvexo",
      description:
        "Узнайте, как Arvexo строит долгосрочную AI-экосистему для цифровых продуктов, семейных технологий и будущего robotics R&D."
    },
    "/shop": {
      title: "AI Shop — Arvexo",
      description:
        "AI Shop от Arvexo включает VPN-доступ, Telegram-ботов, AI-сервисы, мини-приложения и инструменты автоматизации."
    },
    "/vpn": {
      title: "VPN-доступ — Arvexo",
      description:
        "VPN-доступ от Arvexo — активное направление AI Shop для приватной цифровой активности и безопасного подключения."
    },
    "/telegram-bots": {
      title: "Telegram-боты — Arvexo",
      description:
        "Arvexo создаёт Telegram-ботов для поддержки, уведомлений, рабочих процессов, мини-сервисов и автоматизации."
    },
    "/family-ecosystem": {
      title: "Семейная экосистема — Arvexo",
      description:
        "Семейная экосистема — startup-направление Arvexo для профилей, AI-ассистента, общих задач и безопасного семейного пространства."
    },
    "/robots-rd": {
      title: "Robots R&D — Arvexo",
      description:
        "Robots R&D — будущее исследовательское направление Arvexo для care-роботов, AI-устройств и технологий семейной поддержки."
    },
    "/contacts": {
      title: "Контакты — Arvexo",
      description: "Свяжитесь с Arvexo через Telegram или email по вопросам продуктов, партнерств, разработки и сотрудничества."
    },
    "/offer": {
      title: "Публичная оферта — Arvexo",
      description: "Публичная оферта Arvexo для раннего доступа, цифровых продуктов, подписок и AI-сервисов."
    },
    "/refund-policy": {
      title: "Политика возвратов — Arvexo",
      description: "Политика возвратов Arvexo для цифровых продуктов, подписок, раннего доступа и сервисов."
    },
    "/personal-data-consent": {
      title: "Согласие на обработку персональных данных — Arvexo",
      description: "Согласие на обработку персональных данных Arvexo для доступа к продуктам, связи и поддержки."
    },
    "/privacy-policy": {
      title: "Политика конфиденциальности — Arvexo",
      description:
        "Политика конфиденциальности Arvexo для доступа к продуктам, цифровых сервисов и privacy-first развития платформы."
    },
    "/terms": {
      title: "Пользовательское соглашение — Arvexo",
      description: "Пользовательское соглашение Arvexo для сайта, AI-инструментов, цифровых продуктов и будущих сервисов."
    }
  }
};

export const sitemapRoutes: Array<{
  changeFrequency: ChangeFrequency;
  path: BaseRoutePath;
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/shop", changeFrequency: "weekly", priority: 0.9 },
  { path: "/vpn", changeFrequency: "monthly", priority: 0.82 },
  { path: "/telegram-bots", changeFrequency: "monthly", priority: 0.82 },
  { path: "/family-ecosystem", changeFrequency: "monthly", priority: 0.86 },
  { path: "/robots-rd", changeFrequency: "monthly", priority: 0.78 },
  { path: "/about", changeFrequency: "monthly", priority: 0.72 },
  { path: "/contacts", changeFrequency: "monthly", priority: 0.7 },
  { path: "/offer", changeFrequency: "yearly", priority: 0.35 },
  { path: "/refund-policy", changeFrequency: "yearly", priority: 0.32 },
  { path: "/personal-data-consent", changeFrequency: "yearly", priority: 0.32 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.35 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.35 }
];

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function localizedPath(path: BaseRoutePath, locale: Locale) {
  if (locale === "en") {
    return path;
  }

  return path === "/" ? "/ru" : `/ru${path}`;
}

export function languageAlternates(path: BaseRoutePath) {
  return {
    en: absoluteUrl(localizedPath(path, "en")),
    ru: absoluteUrl(localizedPath(path, "ru")),
    "x-default": absoluteUrl(localizedPath(path, "en"))
  };
}

export function createPageMetadata(path: BaseRoutePath, locale: Locale): Metadata {
  const copy = routeSeo[locale][path];
  const url = absoluteUrl(localizedPath(path, locale));

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path)
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      alternateLocale: locale === "ru" ? ["en_US"] : ["ru_RU"],
      images: [
        {
          url: absoluteUrl(SEO_IMAGE),
          width: 767,
          height: 682,
          alt: "Arvexo AI ecosystem"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [absoluteUrl(SEO_IMAGE)]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
  };
}

export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/icon.png"),
    sameAs: ["https://t.me/arvexoai"],
    email: "arvexoai@gmail.com"
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["en", "ru"]
  }
];
