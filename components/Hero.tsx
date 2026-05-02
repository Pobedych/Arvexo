import { HeroVisual } from "@/components/HeroVisual";
import { Icon } from "@/components/Icons";
import { telegramUrl } from "@/lib/content";

const signals = ["VPN", "Telegram Bots", "Family Ecosystem", "Care Robot R&D"];

export function Hero() {
  return (
    <section id="top" className="hero-shell">
      <div className="hero-inner mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.94fr_1.06fr]">
        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow">PRIVATE DIGITAL ECOSYSTEM</p>
          <h1 className="max-w-3xl text-[2.28rem] font-bold leading-[1.04] text-white sm:text-5xl lg:text-[4.15rem]">
            Arvexo — secure services, family ecosystem and Care Robot R&D
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            VPN, Telegram Bots, Family Ecosystem and Care Robot R&D — one digital ecosystem for privacy,
            automation and future care technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={telegramUrl} className="primary-button justify-center px-5 py-3" target="_blank" rel="noreferrer">
              <Icon name="telegram" className="h-5 w-5" />
              Get in touch
            </a>
            <a href="#directions" className="secondary-button justify-center px-5 py-3">
              View directions
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5 text-sm text-white/[0.56]">
            {signals.map((signal) => (
              <span key={signal} className="signal-chip">
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 lg:justify-self-end">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
