import { Logo } from "@/components/Logo";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about">
      <div className="family-panel">
        <div className="family-copy">
          <p className="eyebrow">Arvexo brand</p>
          <h2 className="section-title">Об Arvexo</h2>
          <p>
            Arvexo объединяет VPN, Telegram Bots, Family Ecosystem и Care Robot R&D в единую цифровую экосистему сервисов,
            приватности, семейных технологий и будущих исследований.
          </p>
        </div>
        <div className="hidden justify-self-center md:grid">
          <Logo compact />
        </div>
      </div>
    </Section>
  );
}
