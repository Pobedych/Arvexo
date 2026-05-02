import { telegramUrl } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { Section } from "@/components/Section";

export function Cta() {
  return (
    <Section>
      <div className="cta-card">
        <div className="relative z-10 max-w-2xl">
          <h2 className="section-title">Build the Arvexo ecosystem</h2>
          <p className="mt-4 text-base leading-8 text-white/70">
            Connect privacy tools, Telegram automation, family technologies and future care R&D in one ecosystem.
          </p>
          <a href={telegramUrl} className="primary-button mt-7 inline-flex px-5 py-3" target="_blank" rel="noreferrer">
            <Icon name="telegram" className="h-5 w-5" />
            Написать в Telegram
          </a>
        </div>
      </div>
    </Section>
  );
}
