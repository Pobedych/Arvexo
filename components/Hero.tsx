import { HeroVisual } from "@/components/HeroVisual";
import { Icon } from "@/components/Icons";

const badges = ["VPN", "Telegram Bots", "Family Ecosystem", "Care Robot R&D"];

export function Hero() {
  return (
    <section id="top" className="hero-shell">
      <div className="hero-inner mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow">Premium security-tech ecosystem</p>
          <h1 className="max-w-3xl text-[2.35rem] font-bold leading-[1.05] text-white sm:text-5xl lg:text-[4rem]">
            Arvexo — цифровая экосистема сервисов, приватности и семейных технологий
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            VPN, Telegram-боты, семейная экосистема и Care Robot R&D — в одной технологической платформе.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#shop" className="primary-button justify-center px-5 py-3">
              <Icon name="bag" className="h-5 w-5" />
              Открыть магазин
            </a>
            <a href="#directions" className="secondary-button justify-center px-5 py-3">
              Смотреть направления
              <span className="text-lg leading-none">›</span>
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5 text-sm text-white/[0.56]">
            {badges.map((badge) => (
              <span key={badge} className="signal-chip">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 hidden lg:block lg:justify-self-center">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
