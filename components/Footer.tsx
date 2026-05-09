"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { chromeContent, footerSocials, getLocaleFromPath, localizeHref } from "@/lib/i18n";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const copy = chromeContent[locale];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>{copy.footerDescription}</p>
          <div className="footer-mini-cta">
            <span>{copy.footerQuestion}</span>
            <Button href={localizeHref("/contacts", locale)} className="px-5 py-2.5" aria-label={copy.footerCta}>
              {copy.footerCta}
            </Button>
          </div>
        </div>

        <FooterColumn title={copy.footerColumns.directions}>
          {copy.footerDirections.map((item) => (
            <Link key={item.href} href={localizeHref(item.href, locale)} className="footer-link">
              {item.label}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title={copy.footerColumns.products}>
          {copy.footerProducts.map((item) => (
            <Link key={`${item.href}-${item.label}`} href={localizeHref(item.href, locale)} className="footer-link">
              {item.label}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title={copy.footerColumns.company}>
          {copy.footerCompany.map((item) => (
            <Link key={item.href} href={localizeHref(item.href, locale)} className="footer-link">
              {item.label}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title={copy.footerColumns.socials}>
          {footerSocials.map((item) =>
            item.href.startsWith("/") ? (
              <Link key={item.label} href={localizeHref(item.href, locale)} className="footer-link">
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
      <div className="footer-bottom">{copy.footerBottom}</div>
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
