import { telegramUrl } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { Section } from "@/components/Section";

export function Cta() {
  return (
    <Section>
      <div className="cta-card">
        <div className="relative z-10 max-w-xl">
          <h2 className="section-title">Join the Arvexo ecosystem</h2>
          <p className="mt-4 text-base leading-8 text-white/70">
            Подключайте AI-сервисы, VPN и автоматизацию в одной цифровой экосистеме.
          </p>
          <a href={telegramUrl} className="primary-button mt-7 inline-flex px-6 py-4" target="_blank" rel="noreferrer">
            <Icon name="telegram" className="h-5 w-5" />
            Написать в Telegram
          </a>
        </div>
        <div className="planet-horizon" aria-hidden="true" />
      </div>
    </Section>
  );
}
