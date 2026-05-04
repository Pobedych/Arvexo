import Link from "next/link";
import type { ReactNode } from "react";
import { emailUrl, footerProducts, navigation, telegramUrl } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer id="contacts">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>
            Digital ecosystem for privacy tools, Telegram automation, family technology and future care
            research.
          </p>
          <div className="footer-socials">
            <a href={telegramUrl} className="social-link" aria-label="Telegram" target="_blank" rel="noreferrer">
              <Icon name="telegram" className="h-4 w-4" />
            </a>
            <a href={emailUrl} className="social-link" aria-label="Email">
              <Icon name="mail" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterColumn title="Navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="footer-link">
              {item.label}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Products">
          {footerProducts.map((item) => (
            <Link key={item.href} href={item.href} className="footer-link">
              {item.label}
            </Link>
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
      </div>
      <div className="footer-bottom">© 2026 Arvexo. All rights reserved.</div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}
