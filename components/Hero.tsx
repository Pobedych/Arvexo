import { Button } from "@/components/Button";
import type { CSSProperties } from "react";
import type { Locale } from "@/lib/i18n";

const heroCopy = {
  ru: {
    badge: "Новое",
    tooltip: "AI Robot скоро",
    aria: "Новое: AI Robot скоро",
    title: "Создаём AI-экосистему для обучения, бизнеса и автоматизации.",
    subtitle:
      "Arvexo объединяет VPN-продукты, Telegram-автоматизацию, Семейную экосистему и будущее Care Robot R&D в одну долгосрочную технологическую платформу.",
    primary: "Открыть магазин",
    primaryAria: "Открыть магазин Arvexo",
    secondary: "Смотреть направления",
    secondaryAria: "Посмотреть направления Arvexo"
  },
  en: {
    badge: "New",
    tooltip: "AI Robot coming soon",
    aria: "New: AI Robot coming soon",
    title: "Building the AI ecosystem for digital privacy and family technology.",
    subtitle:
      "Arvexo connects VPN products, Telegram automation, Family Ecosystem and future Care Robot R&D into one long-term technology platform.",
    primary: "Open shop",
    primaryAria: "Open Arvexo shop",
    secondary: "View directions",
    secondaryAria: "View Arvexo directions"
  }
} as const;

const heroParticles = [
  { x: "-44vw", y: "-26vh", delay: "-0.2s", duration: "7.8s" },
  { x: "-34vw", y: "18vh", delay: "-1.1s", duration: "8.4s" },
  { x: "-19vw", y: "-34vh", delay: "-2.2s", duration: "7.2s" },
  { x: "31vw", y: "-28vh", delay: "-3.1s", duration: "8.8s" },
  { x: "42vw", y: "21vh", delay: "-4.2s", duration: "7.6s" },
  { x: "18vw", y: "36vh", delay: "-5.4s", duration: "8.1s" },
  { x: "-47vw", y: "37vh", delay: "-6.3s", duration: "9s" },
  { x: "4vw", y: "-41vh", delay: "-7.1s", duration: "8.5s" },
  { x: "48vw", y: "-4vh", delay: "-0.8s", duration: "7.9s" },
  { x: "-52vw", y: "2vh", delay: "-2.7s", duration: "8.7s" },
  { x: "-8vw", y: "43vh", delay: "-4.8s", duration: "7.4s" },
  { x: "28vw", y: "7vh", delay: "-6.9s", duration: "8.9s" }
] as const;

export function Hero({ locale = "ru" }: { locale?: Locale }) {
  const copy = heroCopy[locale];

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-stars" aria-hidden="true" />
      <div className="hero-particles" aria-hidden="true">
        {heroParticles.map((particle, index) => (
          <span
            key={`${particle.x}-${particle.y}`}
            style={
              {
                "--particle-delay": particle.delay,
                "--particle-duration": particle.duration,
                "--particle-x": particle.x,
                "--particle-y": particle.y,
                "--particle-size": `${index % 3 === 0 ? 3 : 2}px`
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-content">
        <button
          type="button"
          className="hero-badge"
          aria-label={copy.aria}
        >
          <span>{copy.badge}</span>
          <strong>{copy.tooltip}</strong>
        </button>
        <h1 id="hero-title">{copy.title}</h1>
        <p>{copy.subtitle}</p>
        <div className="hero-actions">
          <Button href={locale === "ru" ? "/ru/shop" : "/shop"} className="px-5 py-2.5" aria-label={copy.primaryAria}>
            {copy.primary}
          </Button>
          <Button
            href="#directions"
            variant="secondary"
            className="px-5 py-2.5"
            aria-label={copy.secondaryAria}
          >
            {copy.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
