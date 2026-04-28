import type { ReactNode } from "react";
import { emailUrl, navigation, telegramUrl } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";

const documents = [
  { label: "Политика конфиденциальности", href: "/privacy" },
  { label: "Пользовательское соглашение", href: "/terms" }
];

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-white/[0.08] bg-ink-950/[0.65]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/[0.58]">
            Цифровая экосистема AI-сервисов, VPN и автоматизации.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={telegramUrl} className="social-link" aria-label="Telegram" target="_blank" rel="noreferrer">
              <Icon name="telegram" className="h-4 w-4" />
            </a>
            <a href={emailUrl} className="social-link" aria-label="Email">
              <Icon name="mail" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterColumn title="Навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="footer-link">
              {item.label}
            </a>
          ))}
        </FooterColumn>

        <FooterColumn title="Связь">
          <a href={telegramUrl} className="footer-link" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href={emailUrl} className="footer-link">
            Email
          </a>
        </FooterColumn>

        <FooterColumn title="Документы">
          {documents.map((item) => (
            <a key={item.href} href={item.href} className="footer-link">
              {item.label}
            </a>
          ))}
        </FooterColumn>
      </div>
      <div className="border-t border-white/[0.06] px-5 py-5 text-center text-xs text-white/[0.42]">
        © 2024 Arvexo. Все права защищены.
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <div className="mt-4 grid gap-3 text-sm">{children}</div>
    </div>
  );
}
