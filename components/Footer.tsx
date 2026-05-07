import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { footerCompany, footerDirections, footerProducts, footerSocials } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>Arvexo — AI ecosystem for digital products, family technology and future robotics R&D.</p>
          <div className="footer-mini-cta">
            <span>Questions, partnerships or product access?</span>
            <Button href="/contacts" className="px-5 py-2.5" aria-label="Contact Arvexo">
              Contact Arvexo
            </Button>
          </div>
        </div>

        <FooterColumn title="Directions">
          {footerDirections.map((item) => (
            <Link key={item.href} href={item.href} className="footer-link">
              {item.label}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Products">
          {footerProducts.map((item) => (
            <Link key={`${item.href}-${item.label}`} href={item.href} className="footer-link">
              {item.label}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Company">
          {footerCompany.map((item) => (
            <Link key={item.href} href={item.href} className="footer-link">
              {item.label}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Socials">
          {footerSocials.map((item) =>
            item.href.startsWith("/") ? (
              <Link key={item.label} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="footer-link"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {item.label}
              </a>
            )
          )}
        </FooterColumn>
      </div>
      <div className="footer-bottom">© 2026 Arvexo. All rights reserved.</div>
    </footer>
  );
}

function FooterColumn({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}
