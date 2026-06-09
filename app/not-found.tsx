"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { getLocaleFromPath, localizeHref } from "@/lib/i18n";

const copy = {
  ru: {
    badge: "Страница не найдена",
    title: "Этого маршрута нет в экосистеме Arvexo",
    subtitle:
      "Ссылка могла устареть, адрес мог быть введён с ошибкой или страница ещё не опубликована. Вернитесь на главную или откройте разделы продуктов.",
    home: "На главную",
    products: "К продуктам",
    support: "Связаться",
    routeLabel: "Запрошенный путь",
    checks: ["Главная страница доступна", "Каталог продуктов открыт", "Команда на связи"]
  },
  en: {
    badge: "Page not found",
    title: "This route is outside the Arvexo ecosystem",
    subtitle:
      "The link may be outdated, the address may contain a typo, or the page has not been published yet. Return home or open the product sections.",
    home: "Go home",
    products: "View products",
    support: "Contact us",
    routeLabel: "Requested path",
    checks: ["Home is available", "Product catalog is open", "The team is reachable"]
  }
} as const;

export default function NotFound() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const content = copy[locale];

  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <div className="not-found-copy">
        <p className="section-badge">{content.badge}</p>
        <h1 id="not-found-title">{content.title}</h1>
        <p>{content.subtitle}</p>

        <div className="not-found-actions" aria-label={content.badge}>
          <Button href={localizeHref("/", locale)} className="px-6 py-3">
            {content.home}
          </Button>
          <Button href={localizeHref("/shop", locale)} variant="secondary" className="px-6 py-3">
            {content.products}
          </Button>
          <Button href={localizeHref("/contacts", locale)} variant="ghost" className="px-6 py-3">
            {content.support}
          </Button>
        </div>
      </div>

      <div className="not-found-visual" aria-hidden="true">
        <div className="not-found-console">
          <div className="not-found-console-top">
            <Logo compact />
            <span>404</span>
          </div>
          <div className="not-found-route">
            <span>{content.routeLabel}</span>
            <strong>{pathname}</strong>
          </div>
          <div className="not-found-signal">
            <i />
            <span />
            <i />
          </div>
          <div className="not-found-checks">
            {content.checks.map((item) => (
              <div key={item}>
                <Icon name="check" className="h-5 w-5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="not-found-links" aria-label="Quick navigation">
        <Link href={localizeHref("/about", locale)}>{locale === "ru" ? "О нас" : "About"}</Link>
        <Link href={localizeHref("/telegram-bots", locale)}>{locale === "ru" ? "Telegram-боты" : "Telegram Bots"}</Link>
        <Link href={localizeHref("/privacy-policy", locale)}>
          {locale === "ru" ? "Политика конфиденциальности" : "Privacy Policy"}
        </Link>
      </div>
    </section>
  );
}
