import type { ReactNode } from "react";
import { emailUrl, footerProducts, telegramUrl } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";

const documents = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" }
];

export function Footer() {
  return (
    <footer id="contacts">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 md:grid-cols-[1.35fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/[0.58]">
            Arvexo is a digital ecosystem for privacy, family technologies, Telegram automation and future care R&D.
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

        <FooterColumn title="Arvexo">
          {footerProducts.map((item) => (
            <a key={item.href} href={item.href} className="footer-link">
              {item.label}
            </a>
          ))}
        </FooterColumn>

        <FooterColumn title="Contacts">
          <a href={telegramUrl} className="footer-link" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href={emailUrl} className="footer-link">
            Email
          </a>
        </FooterColumn>

        <FooterColumn title="Legal">
          {documents.map((item) => (
            <a key={item.href} href={item.href} className="footer-link">
              {item.label}
            </a>
          ))}
        </FooterColumn>
      </div>
      <div className="border-t border-white/[0.06] px-5 py-5 text-center text-xs text-white/[0.42]">
        © 2026 Arvexo
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
