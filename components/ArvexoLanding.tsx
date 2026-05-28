"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  ["Партнерам", "#partners"],
  ["FAQ", "#faq"]
];

const typingWords = ["обучения", "автоматизации", "анонимности"];

const statusCards = [
  {
    title: "MVP в разработке",
    text: "Первые модули экосистемы готовятся к закрытому тестированию.",
    icon: "code"
  },
  {
    title: "Ранний доступ",
    text: "Собираем первых пользователей для тестирования AI-тренажера и продуктов.",
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
    id: "education",
    title: "Arvexo Study",
    subtitle: "AI-тренажер для ЕГЭ и ОГЭ",
    text: "Адаптивные задания, подсказки, разбор ошибок и персональная траектория подготовки.",
    tags: ["ЕГЭ", "AI-подсказки", "Прогресс"],
    cta: "Подробнее",
    href: "https://study.arvexo.ru",
    icon: "study"
  },
  {
    id: "ai-products",
    title: "AI Products",
    subtitle: "Готовые AI-инструменты",
    text: "Каталог решений, подписок, Telegram-ботов и автоматизаций для личных и рабочих задач.",
    tags: ["Bots", "GPT", "Automation"],
    cta: "Смотреть решения",
    href: "/ru/shop",
    icon: "cpu"
  },
  {
    id: "business",
    title: "AI Consulting",
    subtitle: "Внедрение ИИ в бизнес",
    text: "Помогаем компаниям находить рутину, автоматизировать процессы и внедрять AI в продажи, поддержку и обучение сотрудников.",
    tags: ["B2B", "CRM", "Support"],
    cta: "Обсудить проект",
    href: "/ru/contacts",
    icon: "trend"
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
    title: "LLM-инструменты",
    text: "Генерация текстов, объяснения, суммаризация и поддержка пользователей.",
    icon: "chat"
  },
  {
    title: "Визуальные модели",
    text: "Инструменты для изображений, презентаций, креативов и прототипов.",
    icon: "wave"
  },
  {
    title: "Telegram-боты",
    text: "Боты для заявок, поддержки, уведомлений, обучения и внутренних процессов.",
    icon: "bot"
  },
  {
    title: "Бизнес-автоматизация",
    text: "Интеграции с CRM, таблицами, почтой, базами знаний и API.",
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
    text: "White Label-тренажеры, классы, задания, статистика и AI-подсказки.",
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
    question: "Когда запустится Arvexo?",
    answer:
      "Первые продукты экосистемы планируются к запуску в 2026 году. Сейчас проект находится в стадии разработки и подготовки раннего доступа."
  },
  {
    question: "Что будет первым продуктом?",
    answer:
      "Первый фокус - образовательный AI-тренажер и инструменты для автоматизации. Дальше экосистема будет расширяться."
  },
  {
    question: "Arvexo - это один продукт или экосистема?",
    answer:
      "Это экосистема направлений: обучение, AI-инструменты, автоматизация бизнеса, Telegram-боты и будущие R&D-проекты."
  },
  {
    question: "Можно ли использовать Arvexo для бизнеса?",
    answer:
      "Да. Отдельное направление Arvexo Consulting помогает внедрять AI в поддержку, продажи, обучение сотрудников и рутинные процессы."
  },
  {
    question: "Будет ли личный кабинет?",
    answer:
      "Да. Планируется личный кабинет для пользователей, клиентов, преподавателей и сотрудников."
  },
  {
    question: "Можно ли стать ранним пользователем?",
    answer:
      "Да. На сайте есть кнопка для заявки на ранний доступ. Через нее можно оставить контакт и попасть в первую волну тестирования."
  }
];

export function ArvexoLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedWord, setTypedWord] = useState("");
  const [typingPaused, setTypingPaused] = useState(false);

  useEffect(() => {
    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;
    let pauseUntil = 0;

    const interval = window.setInterval(() => {
      const now = Date.now();

      if (pauseUntil > now) {
        return;
      }

      const word = typingWords[wordIndex];

      if (!deleting) {
        letterIndex += 1;
        setTypedWord(word.slice(0, letterIndex));

        if (letterIndex === word.length) {
          deleting = true;
          pauseUntil = now + 5000;
          setTypingPaused(true);
        }

        return;
      }

      setTypingPaused(false);
      letterIndex -= 1;
      setTypedWord(word.slice(0, Math.max(0, letterIndex)));

      if (letterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % typingWords.length;
      }
    }, 62);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="arx-page arx-page-refined">
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
            <Link href="/ru/register" onClick={() => setMenuOpen(false)} className="arx-mobile-login">
              Войти
            </Link>
          </nav>
        </div>
      )}

      <div className="arx-notice">
        Arvexo запускается в 2026 году: MVP готовится к раннему доступу.
      </div>

      <header className="arx-header">
        <Link href="/" className="arx-brand" aria-label="Arvexo">
          <Image src="/images/arvexo-mark.png" alt="" width={36} height={36} priority />
          <span>arvexo</span>
        </Link>
        <nav className="arx-nav" aria-label="Основная навигация">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="arx-header-actions">
          <Link href="/ru/register" className="arx-login">
            Войти
          </Link>
          <button className="arx-menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Открыть меню">
            <InlineIcon name="menu" />
          </button>
        </div>
      </header>

      <main className="arx-main">
        <section className="arx-hero arx-hero-refined">
          <div className="arx-hero-copy arx-hero-copy-refined">
            <p className="arx-kicker">Запуск экосистемы в 2026</p>
            <h1 className="arx-hero-brand">ARVEXO</h1>
            <p className="arx-hero-type">
              AI-платформа для{" "}
              <span className="arx-typed-word" aria-live="polite">
                {typedWord || typingWords[0].slice(0, 1)}
              </span>
              <span className={`arx-typed-caret ${typingPaused ? "arx-typed-caret-paused" : ""}`} aria-hidden="true" />
            </p>
            <p className="arx-hero-subtitle">
              Создаем экосистему продуктов: тренажер ЕГЭ, AI-инструменты, Telegram-боты и внедрение нейросетей в бизнес.
            </p>
            <div className="arx-hero-actions">
              <Link href="/ru/register" className="arx-primary-cta">
                Получить ранний доступ
              </Link>
              <a href="#products" className="arx-secondary-cta">
                Смотреть направления
              </a>
            </div>
            <p className="arx-trust-note">MVP в разработке · первые пользователи · privacy-first архитектура</p>
          </div>
        </section>

        <ProjectStatus />
        <Directions />
        <ProductEcosystem />
        <Security />
        <Partnership />
        <FAQ />
      </main>

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
        <span>2026 - запуск экосистемы</span>
        <span>4 направления</span>
        <span>MVP - в разработке</span>
        <span>Early access - скоро</span>
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
        title="Основные направления Arvexo"
        text="Экосистема развивается вокруг трех практических сценариев: обучение, готовые AI-инструменты и внедрение нейросетей в бизнес-процессы."
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
        text="Arvexo объединяет инструменты для учебы, автоматизации, контента и бизнес-процессов."
      />
      <div className="arx-product-grid">
        {productCards.map((card) => (
          <InfoCard key={card.title} {...card} />
        ))}
      </div>
      <div className="arx-integration-note">
        <strong>Интеграции с популярными AI-сервисами</strong>
        <p>OpenAI-compatible API, YandexGPT, GigaChat, open-source LLM и другие провайдеры могут подключаться как инфраструктурные интеграции.</p>
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
          Стать партнером
        </Link>
        <Link href="/ru/contacts" className="arx-secondary-cta">
          Обсудить внедрение
        </Link>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="arx-section arx-faq-refined" id="faq" aria-labelledby="faq-title">
      <SectionHeader titleId="faq-title" label="FAQ" title="Частые вопросы" text="Коротко о запуске, первых продуктах и том, как попасть в ранний доступ." />
      <div>
        {faqs.map((faq, index) => (
          <details key={faq.question} open={index === 0}>
            <summary>
              <span>{faq.question}</span>
              <i>
                <InlineIcon name="plus" />
              </i>
            </summary>
            <p>{faq.answer}</p>
          </details>
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
            <Image src="/images/arvexo-mark.png" alt="" width={34} height={34} />
            <span>arvexo</span>
          </Link>
          <p className="arx-footer-copy">
            Молодая AI-экосистема для обучения, автоматизации, Telegram-ботов и внедрения нейросетей в рабочие процессы.
          </p>
        </div>
        <div className="arx-footer-links">
          <FooterColumn title="Продукты" links={[["Arvexo Study", "#education"], ["AI Products", "#products"], ["AI Consulting", "#business"]]} />
          <FooterColumn title="Компания" links={[["Партнерам", "#partners"], ["FAQ", "#faq"], ["Контакты", "/ru/contacts"]]} />
          <FooterColumn title="Документы" links={[["Условия", "/ru/terms"], ["Приватность", "/ru/privacy-policy"]]} />
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
