"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LangProvider, useLang } from "@/context/LangContext";
import { landingContent, type LandingLang } from "@/lib/landing-content";
import type { Lang } from "@/context/LangContext";

const directionHrefs = ["/vpn", "/shop", "/contacts", "/care-robot-rd"];
const directionHrefsRu = ["/ru/vpn", "/ru/shop", "/ru/contacts", "/ru/care-robot-rd"];

type IconName =
  | "api" | "arrow" | "bot" | "building" | "chat" | "close" | "code"
  | "cpu" | "lock" | "logs" | "menu" | "nodes" | "shield" | "spark"
  | "trend" | "users" | "wave" | "workspace";

const directionIcons: IconName[] = ["shield", "cpu", "trend", "code"];
const statusIcons: IconName[] = ["code", "users", "spark", "shield"];
const productIcons: IconName[] = ["chat", "bot", "nodes", "wave"];
const securityIcons: IconName[] = ["users", "lock", "workspace", "logs"];
const partnerIcons: IconName[] = ["building", "nodes", "users"];

function ArvexoLandingInner({ defaultLang }: { defaultLang: LandingLang }) {
  const { lang } = useLang();
  const effectiveLang = lang as LandingLang;
  const c = landingContent[effectiveLang] ?? landingContent[defaultLang];
  const isRu = defaultLang === "ru" && lang !== "zh";

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="arx-page arx-page-refined">
      <a className="arx-skip-link" href="#content">
        {lang === "zh" ? "跳转到内容" : lang === "ru" ? "Перейти к содержимому" : "Skip to content"}
      </a>
      <div className="arx-soft-light arx-soft-light-left" aria-hidden="true" />
      <div className="arx-soft-light arx-soft-light-right" aria-hidden="true" />

      {menuOpen && (
        <div className="arx-mobile-panel arx-mobile-panel-refined">
          <button className="arx-icon-button" type="button" onClick={() => setMenuOpen(false)} aria-label="Close">
            <InlineIcon name="close" />
          </button>
          <nav>
            {c.nav.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <Link href="https://account.arvexo.ru" onClick={() => setMenuOpen(false)} className="arx-mobile-login">
              {c.loginLabel}
            </Link>
          </nav>
        </div>
      )}

      <header className="arx-header">
        <Link href={isRu ? "/ru" : "/"} className="arx-brand" aria-label="Arvexo">
          <Logo />
        </Link>
        <nav className="arx-nav">
          {c.nav.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <div className="arx-header-actions">
          <LanguageSwitcher />
          <Link href="https://account.arvexo.ru" className="arx-login">
            {c.loginLabel}
          </Link>
          <button className="arx-menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Menu">
            <InlineIcon name="menu" />
          </button>
        </div>
      </header>

      <div className="arx-main" id="content">
        <section className="arx-hero arx-hero-refined">
          <div className="arx-hero-copy arx-hero-copy-refined">
            <p className="arx-kicker">{c.hero.kicker}</p>
            <h1 className="arx-hero-brand">
              {c.hero.h1Line1}<br />
              {lang === "zh" ? null : "и "}<em>{c.hero.h1Accent}</em>
            </h1>
            <p className="arx-hero-type">{c.hero.type}</p>
            <p className="arx-hero-subtitle">{c.hero.subtitle}</p>
            <div className="arx-hero-actions">
              <a href="#products" className="arx-secondary-cta">{c.hero.ctaSecondary}</a>
              <Link href="https://account.arvexo.ru" className="arx-primary-cta">{c.hero.ctaPrimary}</Link>
            </div>
            <p className="arx-trust-note">{c.hero.trust}</p>
          </div>
        </section>

        {/* Status */}
        <section className="arx-status-section" aria-labelledby="status-title">
          <div className="arx-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className="arx-section-head-refined">
              <p>{c.status.counter}</p>
              <h2 id="status-title">{c.status.h2Line1} <em>{c.status.h2Accent}</em></h2>
              <span>{c.status.lead}</span>
            </div>
            <div className="arx-status-grid">
              {c.status.cards.map((card, i) => (
                <InfoCard key={i} icon={statusIcons[i]} title={card.title} text={card.text} />
              ))}
            </div>
            <div className="arx-status-facts">
              {c.status.facts.map((f) => <span key={f}>{f}</span>)}
            </div>
          </div>
        </section>

        {/* Directions */}
        <section className="arx-section arx-directions-section" id="products" aria-labelledby="products-title">
          <div className="arx-section-head-refined">
            <p>{c.directions.counter}</p>
            <h2 id="products-title">{c.directions.h2Line1} <em>{c.directions.h2Accent}</em></h2>
            <span>{c.directions.lead}</span>
          </div>
          <div className="arx-direction-grid">
            {c.directions.items.map((dir, i) => (
              <article className="arx-direction-card" key={i}>
                <div className="arx-direction-icon"><InlineIcon name={directionIcons[i]} /></div>
                <p>{dir.subtitle}</p>
                <h3>{dir.title}</h3>
                <span>{dir.text}</span>
                <div className="arx-tags">
                  {dir.tags.map((tag) => <small key={tag}>{tag}</small>)}
                </div>
                <Link href={isRu ? directionHrefsRu[i] : directionHrefs[i]} className="arx-card-link">
                  {dir.cta}<InlineIcon name="arrow" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* AI Products */}
        <section className="arx-products-section" aria-labelledby="ai-products-title" id="business">
          <div className="arx-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className="arx-section-head-refined">
              <p>{c.products.counter}</p>
              <h2 id="ai-products-title">{c.products.h2Line1} <em>{c.products.h2Accent}</em></h2>
              <span>{c.products.lead}</span>
            </div>
            <div className="arx-product-grid">
              {c.products.cards.map((card, i) => (
                <InfoCard key={i} icon={productIcons[i]} title={card.title} text={card.text} />
              ))}
            </div>
            <div className="arx-integration-note">
              <strong>{c.products.integrationTitle}</strong>
              <p>{c.products.integrationText}</p>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="arx-security-section" aria-labelledby="security-title">
          <div className="arx-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className="arx-section-head-refined">
              <p>{c.security.counter}</p>
              <h2 id="security-title">{c.security.h2Line1} <em>{c.security.h2Accent}</em></h2>
              <span>{c.security.lead}</span>
            </div>
            <div className="arx-security-layout">
              <div className="arx-security-grid-refined">
                {c.security.cards.map((card, i) => (
                  <InfoCard key={i} icon={securityIcons[i]} title={card.title} text={card.text} />
                ))}
              </div>
              <div className="arx-security-flow" aria-hidden="true">
                {["User", "API Gateway", "Auth", "Workspace", "Logs"].map((item, i) => (
                  <div key={item}><span>{item}</span>{i < 4 && <i />}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="arx-section arx-partners-section" id="partners" aria-labelledby="partners-title">
          <div className="arx-section-head-refined">
            <p>{c.partners.counter}</p>
            <h2 id="partners-title">{c.partners.h2Line1} <em>{c.partners.h2Accent}</em></h2>
            <span>{c.partners.lead}</span>
          </div>
          <div className="arx-partner-grid">
            {c.partners.cards.map((card, i) => (
              <InfoCard key={i} icon={partnerIcons[i]} title={card.title} text={card.text} />
            ))}
          </div>
          <div className="arx-section-actions">
            <Link href={isRu ? "/ru/contacts" : "/contacts"} className="arx-primary-cta">
              {c.partners.ctaPrimary}
            </Link>
            <Link href="https://account.arvexo.ru" className="arx-secondary-cta">
              {c.partners.ctaSecondary}
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="arx-faq-refined" id="faq" aria-labelledby="faq-title">
          <div className="arx-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className="arx-section-head-refined">
              <p>{c.faq.counter}</p>
              <h2 id="faq-title">{c.faq.h2Line1} <em>{c.faq.h2Accent}</em></h2>
              <span>{c.faq.lead}</span>
            </div>
            <div className="arx-faq-grid">
              {c.faq.items.map((item, i) => (
                <article className="arx-faq-card" key={i}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="arx-footer arx-footer-refined">
        <div className="arx-footer-inner">
          <div>
            <Link href={isRu ? "/ru" : "/"} className="arx-brand arx-footer-brand" aria-label="Arvexo">
              <Logo />
            </Link>
            <p className="arx-footer-copy">{c.footer.copy}</p>
          </div>
          <div className="arx-footer-links">
            <div>
              <h3>{c.footer.cols.products}</h3>
              {c.footer.links.products.map(([label, href]) => (
                <a key={label} href={href}>{label}</a>
              ))}
            </div>
            <div>
              <h3>{c.footer.cols.company}</h3>
              {c.footer.links.company.map(([label, href]) => (
                <a key={label} href={href}>{label}</a>
              ))}
            </div>
            <div>
              <h3>{c.footer.cols.docs}</h3>
              {c.footer.links.docs.map(([label, href]) => (
                <a key={label} href={href}>{label}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="arx-footer-bottom">
          <strong>{c.footer.bottom}</strong>
          <span>{c.footer.bottomSub}</span>
        </div>
      </footer>
    </div>
  );
}

export function ArvexoLanding({ defaultLang = "ru" }: { defaultLang?: Lang }) {
  return (
    <LangProvider defaultLang={defaultLang}>
      <ArvexoLandingInner defaultLang={defaultLang as LandingLang} />
    </LangProvider>
  );
}

function InfoCard({ icon, text, title }: { icon: IconName; text: string; title: string }) {
  return (
    <article className="arx-info-card">
      <div className="arx-info-icon"><InlineIcon name={icon} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function InlineIcon({ name }: { name: IconName }) {
  const p = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 } as const;
  switch (name) {
    case "api": return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...p} d="M5 12h14M7 7h10M7 17h10" /><path {...p} d="M4 7h.01M4 12h.01M4 17h.01M20 7h.01M20 12h.01M20 17h.01" /></svg>;
    case "arrow": return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...p} d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case "bot": return <svg viewBox="0 0 24 24" aria-hidden="true"><rect {...p} x="5" y="8" width="14" height="11" rx="3" /><path {...p} d="M12 8V4M8.5 13h.01M15.5 13h.01M9 17h6" /></svg>;
    case "building": return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...p} d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" /></svg>;
    case "chat": return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...p} d="M4 5.5A3.5 3.5 0 0 1 7.5 2h9A3.5 3.5 0 0 1 20 5.5v5A3.5 3.5 0 0 1 16.5 14H11l-5 4v-4.3A3.5 3.5 0 0 1 4 10.5Z" /><path {...p} d="M8 7h8M8 10h5" /></svg>;
    case "close": return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...p} d="M18 6 6 18M6 6l12 12" /></svg>;
    case "code": return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...p} d="m8 18-6-6 6-6M16 6l6 6-6 6" /></svg>;
    case "cpu": return <svg viewBox="0 0 24 24" aria-hidden="true"><rect {...p} x="7" y="7" width="10" height="10" rx="2" /><path {...p} d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /></svg>;
    case "lock": return <svg viewBox="0 0 24 24" aria-hidden="true"><rect {...p} x="4" y="10" width="16" height="10" rx="2" /><path {...p} d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>;
    case "logs": return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...p} d="M5 5h14M5 12h14M5 19h14" /><path {...p} d="M8 5v14M16 5v14" /></svg>;
    case "menu": return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...p} d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case "nodes": return <svg viewBox="0 0 24 24" aria-hidden="true"><circle {...p} cx="6" cy="7" r="3" /><circle {...p} cx="18" cy="7" r="3" /><circle {...p} cx="12" cy="18" r="3" /><path {...p} d="m8.5 8.8 2.2 6M15.5 8.8l-2.2 6M9 7h6" /></svg>;
    case "shield": return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>;
    case "spark": return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...p} d="M12 2l1.6 6.1L20 10l-6.4 1.9L12 18l-1.6-6.1L4 10l6.4-1.9Z" /><path {...p} d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7Z" /></svg>;
    case "trend": return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...p} d="M3 17 9 11l4 4 8-8" /><path {...p} d="M15 7h6v6" /></svg>;
    case "users": return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...p} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle {...p} cx="9" cy="7" r="4" /><path {...p} d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    case "wave": return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...p} d="M3 14c3 0 3-4 6-4s3 4 6 4 3-4 6-4" /><path {...p} d="M3 19c3 0 3-3 6-3s3 3 6 3 3-3 6-3" /><path {...p} d="M3 9c3 0 3-3 6-3s3 3 6 3 3-3 6-3" /></svg>;
    case "workspace": return <svg viewBox="0 0 24 24" aria-hidden="true"><rect {...p} x="3" y="4" width="18" height="14" rx="2" /><path {...p} d="M8 22h8M12 18v4M7 9h4M7 13h7" /></svg>;
    default: return null;
  }
}
