import { telegramUrl } from "@/lib/content";
import { HeroVisual } from "@/components/HeroVisual";
import { Icon } from "@/components/Icons";

export function Hero() {
  return (
    <section id="top" className="hero-shell">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-32 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pt-36">
        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow">Digital AI ecosystem</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Arvexo — единая экосистема AI-сервисов, VPN и автоматизации
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            AI-подписки, приватный доступ, Telegram-боты, mini apps и цифровые решения — в одной технологической экосистеме.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#shop" className="primary-button justify-center px-6 py-4">
              <Icon name="bag" className="h-5 w-5" />
              Открыть магазин
            </a>
            <a href="#directions" className="secondary-button justify-center px-6 py-4">
              Изучить экосистему
              <span className="text-lg leading-none">›</span>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/[0.54]">
            <span className="signal-chip">AI services</span>
            <span className="signal-chip">VPN access</span>
            <span className="signal-chip">Telegram automation</span>
          </div>
        </div>

        <div className="relative z-10 lg:justify-self-end">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
