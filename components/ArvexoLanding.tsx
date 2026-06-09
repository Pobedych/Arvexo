"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";

type IconName =
  | "api"
  | "arrow"
  | "bot"
  | "building"
  | "chat"
  | "close"
  | "code"
  | "cpu"
  | "lock"
  | "logs"
  | "menu"
  | "nodes"
  | "plus"
  | "shield"
  | "spark"
  | "study"
  | "trend"
  | "users"
  | "wave"
  | "workspace";

const navItems = [
  ["Продукты", "#products"],
  ["Для образования", "#education"],
  ["Для бизнеса", "#business"],
  ["Партнёрам", "#partners"]
];

const statusCards = [
  {
    title: "MVP в разработке",
    text: "Первые модули экосистемы готовятся к закрытому тестированию.",
    icon: "code"
  },
  {
    title: "Ранний доступ",
    text: "Собираем первых пользователей для тестирования AI-тренажёра и продуктов.",
    icon: "users"
  },
  {
    title: "Фокус на практику",
    text: "Не просто витрина AI, а инструменты для реальных задач: обучение, автоматизация, поддержка и боты.",
    icon: "spark"
  },
  {
    title: "Безопасная архитектура",
    text: "Проектируем систему с учетом приватности, ролей доступа и изоляции пользовательских данных.",
    icon: "shield"
  }
] satisfies Array<{ title: string; text: string; icon: IconName }>;

const directions = [
  {
    id: "connect",
    title: "Arvexo Connect",
    subtitle: "Приватный доступ и подписки",
    text: "VPN-сервис с личным кабинетом, оплатой подписок, управлением устройствами, инструкциями подключения и будущей связкой с единым аккаунтом Arvexo.",
    tags: ["VPN", "Cabinet", "Subscriptions"],
    cta: "Открыть Connect",
    href: "/ru/vpn",
    icon: "shield"
  },
  {
    id: "ai-products",
    title: "AI Products",
    subtitle: "Каталог AI-инструментов",
    text: "Цифровые AI-продукты, Telegram-магазин, access keys, подписки и готовые инструменты для пользователей, команд и бизнес-сценариев.",
    tags: ["AI tools", "Telegram Shop", "Access keys"],
    cta: "Смотреть продукты",
    href: "/ru/shop",
    icon: "cpu"
  },
  {
    id: "study",
    title: "Arvexo Study",
    subtitle: "AI-образование и подготовка",
    text: "Образовательная платформа с AI-подсказками, заданиями, разбором ошибок, прогрессом и персональной траекторией подготовки.",
    tags: ["Education", "AI hints", "Progress"],
    cta: "Открыть Study",
    href: "https://study.arvexo.ru",
    icon: "study"
  },
  {
    id: "consulting",
    title: "AI Consulting",
    subtitle: "Внедрение AI в бизнес",
    text: "Аудит процессов, автоматизация поддержки и продаж, внутренние AI-ассистенты, интеграции с CRM, таблицами, почтой и базами знаний.",
    tags: ["B2B", "Automation", "Integrations"],
    cta: "Обсудить внедрение",
    href: "/ru/contacts",
    icon: "trend"
  },
  {
    id: "robotics",
    title: "Robotics R&D",
    subtitle: "Исследовательское направление",
    text: "Долгосрочные эксперименты в робототехнике, care-технологиях, семейных сценариях, privacy-инструментах и будущих физических AI-продуктах.",
    tags: ["Robotics", "Care tech", "Research"],
    cta: "Смотреть R&D",
    href: "/ru/care-robot-rd",
    icon: "code"
  }
] satisfies Array<{
  id: string;
  title: string;
  subtitle: string;
  text: string;
  tags: string[];
  cta: string;
  href: string;
  icon: IconName;
}>;

const productCards = [
  {
    title: "AI-подписки и доступы",
    text: "Аккуратная выдача цифровых доступов через Telegram shop без фейковых подписок.",
    icon: "chat"
  },
  {
    title: "Образовательный AI",
    text: "Подсказки, разбор ошибок, адаптивные задания и прогресс для Study.",
    icon: "wave"
  },
  {
    title: "Telegram-боты",
    text: "Боты для заявок, поддержки, уведомлений, обучения, магазина и внутренних процессов.",
    icon: "bot"
  },
  {
    title: "Бизнес-автоматизация",
    text: "Интеграции с CRM, таблицами, почтой, базами знаний, API и внутренними регламентами.",
    icon: "nodes"
  }
] satisfies Array<{ title: string; text: string; icon: IconName }>;

const securityCards = [
  {
    title: "Разделение ролей",
    text: "Отдельные права для учеников, преподавателей, клиентов, сотрудников и администраторов.",
    icon: "users"
  },
  {
    title: "Минимизация данных",
    text: "Собираем только то, что нужно для работы продукта и аналитики.",
    icon: "lock"
  },
  {
    title: "Изоляция проектов",
    text: "Клиентские данные и рабочие пространства должны быть разделены архитектурно.",
    icon: "workspace"
  },
  {
    title: "Логи и контроль",
    text: "Действия в системе должны фиксироваться, чтобы проще искать ошибки и подозрительную активность.",
    icon: "logs"
  }
] satisfies Array<{ title: string; text: string; icon: IconName }>;

const partnerCards = [
  {
    title: "Для школ и преподавателей",
    text: "Классы, задания, статистика и AI-подсказки. White Label - только как будущий сценарий.",
    icon: "study"
  },
  {
    title: "Для бизнеса",
    text: "Автоматизация поддержки, продаж, обработки заявок и внутренних процессов.",
    icon: "building"
  },
  {
    title: "Для интеграторов",
    text: "Возможность подключать решения Arvexo к клиентским процессам через API и готовые сценарии.",
    icon: "nodes"
  }
] satisfies Array<{ title: string; text: string; icon: IconName }>;

const faqs = [
  {
    question: "Что такое Arvexo?",
    answer:
      "Arvexo - это AI-экосистема из нескольких направлений: Connect, AI Products, Study, AI Consulting и Robotics R&D. Мы собираем продукты вокруг обучения, автоматизации, цифрового доступа и внедрения AI в рабочие процессы."
  },
  {
    question: "Когда планируется запуск?",
    answer:
      "Первые продукты планируются к запуску в 2026 году. Сейчас проект находится в стадии разработки, подготовки MVP и раннего доступа."
  },
  {
    question: "Что входит в Arvexo Connect?",
    answer:
      "Connect - это направление для приватного цифрового доступа, подписок, личного кабинета, управления устройствами и будущей связки с единым аккаунтом Arvexo."
  },
  {
    question: "Что такое AI Products?",
    answer:
      "AI Products - это каталог цифровых продуктов и инструментов: Telegram-магазин, access keys, подписки, AI-сервисы, боты и готовые решения для пользователей и команд."
  },
  {
    question: "Чем занимается Arvexo Study?",
    answer:
      "Study - образовательное направление: AI-подсказки, задания, разбор ошибок, прогресс и персональная траектория подготовки."
  },
  {
    question: "Можно ли внедрить Arvexo в бизнес?",
    answer:
      "Да. AI Consulting помогает разобрать процессы, подобрать сценарии автоматизации, собрать AI-ассистентов, ботов и интеграции с CRM, таблицами, почтой или базами знаний."
  },
  {
    question: "Что такое Robotics R&D?",
    answer:
      "Это долгосрочное исследовательское направление Arvexo для экспериментов с робототехникой, care-технологиями, семейными сценариями и будущими физическими AI-продуктами."
  },
  {
    question: "Как попасть в ранний доступ?",
    answer:
      "Оставьте заявку через кнопку раннего доступа или контакты на сайте. Мы будем подключать первых пользователей по мере готовности модулей и тестовых сценариев."
  }
];

export function ArvexoLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="arx-page arx-page-refined">
      <a className="arx-skip-link" href="#content">
        Перейти к содержимому
      </a>
      <div className="arx-soft-light arx-soft-light-left" aria-hidden="true" />
      <div className="arx-soft-light arx-soft-light-right" aria-hidden="true" />

      {menuOpen && (
        <div className="arx-mobile-panel arx-mobile-panel-refined">
          <button className="arx-icon-button" type="button" onClick={() => setMenuOpen(false)} aria-label="Закрыть меню">
            <InlineIcon name="close" />
          </button>
          <nav aria-label="Мобильная навигация">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <Link href="https://account.arvexo.ru" onClick={() => setMenuOpen(false)} className="arx-mobile-login">
              Войти
            </Link>
          </nav>
        </div>
      )}

      <header className="arx-header">
        <Link href="/" className="arx-brand" aria-label="Arvexo">
          <Logo />
        </Link>
        <nav className="arx-nav" aria-label="Основная навигация">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="arx-header-actions">
          <Link href="https://account.arvexo.ru" className="arx-login">
            Войти
          </Link>
          <button className="arx-menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Открыть меню">
            <InlineIcon name="menu" />
          </button>
        </div>
      </header>

      <div className="arx-main" id="content">
        <section className="arx-hero arx-hero-refined">
          <div className="arx-hero-copy arx-hero-copy-refined">
            <p className="arx-kicker">Запуск экосистемы в 2026</p>
            <h1 className="arx-hero-brand">Arvexo - AI-экосистема для обучения, бизнеса и автоматизации</h1>
            <p className="arx-hero-type">Запускаем продукты для обучения, бизнеса и автоматизации</p>
            <p className="arx-hero-subtitle">
              Создаём экосистему продуктов: тренажёр ЕГЭ, AI-инструменты, Telegram-магазин, боты и внедрение нейросетей в бизнес-процессы.
            </p>
            <div className="arx-hero-actions">
              <a href="#products" className="arx-secondary-cta">
                Смотреть продукты
              </a>
              <Link href="https://account.arvexo.ru" className="arx-primary-cta">
                Получить ранний доступ
              </Link>
            </div>
            <p className="arx-trust-note">MVP в разработке · запуск в 2026 · единый аккаунт в планах</p>
          </div>
        </section>

        <ProjectStatus />
        <Directions />
        <ProductEcosystem />
        <Security />
        <Partnership />
        <FAQ />
      </div>

      <DetailedFooter />
    </div>
  );
}

function ProjectStatus() {
  return (
    <section className="arx-section arx-status-section" aria-labelledby="status-title">
      <SectionHeader
        titleId="status-title"
        label="Статус проекта"
        title="Arvexo запускается в 2026 году"
        text="Мы показываем текущую стадию честно: продукт собирается вокруг первых модулей, раннего доступа и практических сценариев."
      />
      <div className="arx-status-grid">
        {statusCards.map((card) => (
          <InfoCard key={card.title} {...card} />
        ))}
      </div>
      <div className="arx-status-facts" aria-label="Краткие факты о проекте">
        <span>Запуск в 2026</span>
        <span>Study, Consulting, Ai-shop</span>
        <span>MVP в разработке</span>
        <span>Account в планах</span>
      </div>
    </section>
  );
}

function Directions() {
  return (
    <section className="arx-section arx-directions-section" id="products" aria-labelledby="products-title">
      <SectionHeader
        titleId="products-title"
        label="Направления"
        title="Пять направлений экосистемы Arvexo"
        text="Arvexo собирается вокруг конкретных продуктовых линий: Connect, AI Products, Study, AI Consulting и Robotics R&D."
      />
      <div className="arx-direction-grid">
        {directions.map((direction) => (
          <article className="arx-direction-card" id={direction.id} key={direction.title}>
            <div className="arx-direction-icon">
              <InlineIcon name={direction.icon} />
            </div>
            <p>{direction.subtitle}</p>
            <h3>{direction.title}</h3>
            <span>{direction.text}</span>
            <div className="arx-tags">
              {direction.tags.map((tag) => (
                <small key={tag}>{tag}</small>
              ))}
            </div>
            <Link href={direction.href} className="arx-card-link">
              {direction.cta}
              <InlineIcon name="arrow" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductEcosystem() {
  return (
    <section className="arx-section arx-products-section" aria-labelledby="ai-products-title">
      <SectionHeader
        titleId="ai-products-title"
        label="AI Products"
        title="AI-продукты внутри экосистемы"
        text="Arvexo объединяет инструменты для учёбы, автоматизации, Telegram commerce и внутренних бизнес-процессов."
      />
      <div className="arx-product-grid">
        {productCards.map((card) => (
          <InfoCard key={card.title} {...card} />
        ))}
      </div>
      <div className="arx-integration-note">
        <strong>Интеграции без привязки к одному провайдеру</strong>
        <p>OpenAI-compatible API, YandexGPT, GigaChat, open-source LLM и другие провайдеры рассматриваются как инфраструктурные интеграции, а не как маркетинговое обещание.</p>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section className="arx-section arx-security-section" aria-labelledby="security-title">
      <SectionHeader
        titleId="security-title"
        label="Privacy-first"
        title="Безопасность и приватность с первого дня"
        text="Мы проектируем Arvexo так, чтобы данные пользователей и компаний не превращались в хаос."
      />
      <div className="arx-security-layout">
        <div className="arx-security-grid-refined">
          {securityCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
        <div className="arx-security-flow" aria-label="Схема обработки данных">
          {["User", "API", "Auth", "Workspace", "Logs"].map((item, index) => (
            <div key={item}>
              <span>{item}</span>
              {index < 4 && <i />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partnership() {
  return (
    <section className="arx-section arx-partners-section" id="partners" aria-labelledby="partners-title">
      <SectionHeader
        titleId="partners-title"
        label="Партнерство"
        title="Партнерство и внедрение"
        text="Подключаем образовательные и бизнес-сценарии через понятные продукты, API и готовые процессы внедрения."
      />
      <div className="arx-partner-grid">
        {partnerCards.map((card) => (
          <InfoCard key={card.title} {...card} />
        ))}
      </div>
      <div className="arx-section-actions">
        <Link href="/ru/contacts" className="arx-primary-cta">
          Обсудить партнёрство
        </Link>
        <Link href="/ru/contacts" className="arx-secondary-cta">
          Получить ранний доступ
        </Link>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="arx-section arx-faq-refined" id="faq" aria-labelledby="faq-title">
      <SectionHeader titleId="faq-title" label="FAQ" title="Частые вопросы" text="Коротко о направлениях, запуске, раннем доступе и документах Arvexo." />
      <div className="arx-faq-grid">
        {faqs.map((faq) => (
          <article className="arx-faq-card" key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ label, text, title, titleId }: { label: string; text: string; title: string; titleId: string }) {
  return (
    <div className="arx-section-head-refined">
      <p>{label}</p>
      <h2 id={titleId}>{title}</h2>
      <span>{text}</span>
    </div>
  );
}

function InfoCard({ icon, text, title }: { icon: IconName; text: string; title: string }) {
  return (
    <article className="arx-info-card">
      <div className="arx-info-icon">
        <InlineIcon name={icon} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function DetailedFooter() {
  return (
    <footer className="arx-footer arx-footer-refined">
      <div className="arx-footer-inner">
        <div>
          <Link href="/" className="arx-brand arx-footer-brand" aria-label="Arvexo">
            <Logo />
          </Link>
          <p className="arx-footer-copy">
            Молодая AI-экосистема для обучения, автоматизации, Telegram-ботов и внедрения нейросетей в рабочие процессы.
          </p>
        </div>
        <div className="arx-footer-links">
          <FooterColumn
            title="Продукты"
            links={[
              ["Arvexo Connect", "/ru/vpn"],
              ["Arvexo Study", "https://study.arvexo.ru"],
              ["AI Products", "/ru/shop"],
              ["AI Consulting", "/ru/contacts"],
              ["Arvexo Account", "https://account.arvexo.ru"]
            ]}
          />
          <FooterColumn title="Компания" links={[["Партнёрам", "#partners"], ["FAQ", "#faq"], ["Контакты", "/ru/contacts"]]} />
          <FooterColumn
            title="Документы"
            links={[
              ["Оферта", "/ru/offer"],
              ["Пользовательское соглашение", "/ru/terms"],
              ["Политика конфиденциальности", "/ru/privacy-policy"],
              ["Возвраты", "/ru/refund-policy"],
              ["Персональные данные", "/ru/personal-data-consent"]
            ]}
          />
        </div>
      </div>
      <div className="arx-footer-bottom">
        <strong>© 2026 Arvexo</strong>
        <span>MVP в разработке · запуск экосистемы в 2026</span>
      </div>
    </footer>
  );
}

function FooterColumn({ links, title }: { links: Array<[string, string]>; title: string }) {
  return (
    <div>
      <h3>{title}</h3>
      {links.map(([label, href]) => (
        <a href={href} key={label}>
          {label}
        </a>
      ))}
    </div>
  );
}

function InlineIcon({ name }: { name: IconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 } as const;

  switch (name) {
    case "api":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M5 12h14M7 7h10M7 17h10" /><path {...common} d="M4 7h.01M4 12h.01M4 17h.01M20 7h.01M20 12h.01M20 17h.01" /></svg>;
    case "arrow":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case "bot":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><rect {...common} x="5" y="8" width="14" height="11" rx="3" /><path {...common} d="M12 8V4M8.5 13h.01M15.5 13h.01M9 17h6" /></svg>;
    case "building":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" /></svg>;
    case "chat":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M4 5.5A3.5 3.5 0 0 1 7.5 2h9A3.5 3.5 0 0 1 20 5.5v5A3.5 3.5 0 0 1 16.5 14H11l-5 4v-4.3A3.5 3.5 0 0 1 4 10.5Z" /><path {...common} d="M8 7h8M8 10h5" /></svg>;
    case "close":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M18 6 6 18M6 6l12 12" /></svg>;
    case "code":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="m8 18-6-6 6-6M16 6l6 6-6 6" /></svg>;
    case "cpu":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><rect {...common} x="7" y="7" width="10" height="10" rx="2" /><path {...common} d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /></svg>;
    case "lock":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><rect {...common} x="4" y="10" width="16" height="10" rx="2" /><path {...common} d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>;
    case "logs":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M5 5h14M5 12h14M5 19h14" /><path {...common} d="M8 5v14M16 5v14" /></svg>;
    case "menu":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case "nodes":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><circle {...common} cx="6" cy="7" r="3" /><circle {...common} cx="18" cy="7" r="3" /><circle {...common} cx="12" cy="18" r="3" /><path {...common} d="m8.5 8.8 2.2 6M15.5 8.8l-2.2 6M9 7h6" /></svg>;
    case "plus":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M12 5v14M5 12h14" /></svg>;
    case "shield":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>;
    case "spark":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M12 2l1.6 6.1L20 10l-6.4 1.9L12 18l-1.6-6.1L4 10l6.4-1.9Z" /><path {...common} d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7Z" /></svg>;
    case "study":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="m3 8 9-4 9 4-9 4-9-4Z" /><path {...common} d="M7 10.2v5.2c2.8 2 7.2 2 10 0v-5.2" /></svg>;
    case "trend":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M3 17 9 11l4 4 8-8" /><path {...common} d="M15 7h6v6" /></svg>;
    case "users":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle {...common} cx="9" cy="7" r="4" /><path {...common} d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    case "wave":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M3 14c3 0 3-4 6-4s3 4 6 4 3-4 6-4" /><path {...common} d="M3 19c3 0 3-3 6-3s3 3 6 3 3-3 6-3" /><path {...common} d="M3 9c3 0 3-3 6-3s3 3 6 3 3-3 6-3" /></svg>;
    case "workspace":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><rect {...common} x="3" y="4" width="18" height="14" rx="2" /><path {...common} d="M8 22h8M12 18v4M7 9h4M7 13h7" /></svg>;
    default:
      return null;
  }
}
