import { Logo } from "@/components/Logo";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" className="pt-4">
      <div className="glass-panel grid gap-8 p-5 sm:p-8 md:grid-cols-[0.8fr_1.4fr] md:items-center lg:p-10">
        <div className="logo-showcase">
          <Logo compact />
        </div>
        <div>
          <h2 className="section-title">Об Arvexo</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/[0.68] sm:text-lg">
            Arvexo объединяет цифровые сервисы для работы, приватности и автоматизации. Мы помогаем подключать AI-инструменты,
            VPN-доступ, Telegram-ботов и mini apps без лишней сложности — с понятной настройкой, поддержкой и развитием собственной
            платформы.
          </p>
        </div>
      </div>
    </Section>
  );
}
