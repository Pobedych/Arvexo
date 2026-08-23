import Link from "next/link";
import type { ReactNode } from "react";

interface Feature {
  title: string;
  text: string;
}

interface InnerPageProps {
  badge: string;
  title: ReactNode;
  subtitle: string;
  features?: Feature[];
  children?: ReactNode;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

export function InnerPage({ badge, children, ctaPrimary, ctaSecondary, features, subtitle, title }: InnerPageProps) {
  return (
    <div className="simple-page" id="content">
      <section className="simple-page-hero">
        <p className="section-badge">{badge}</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </section>

      {features && features.length > 0 && (
        <div className="simple-page-grid">
          {features.map((f, index) => (
            <article key={f.title} className="simple-feature-card">
              <span className="simple-feature-index" aria-hidden="true">0{index + 1}</span>
              <h2>{f.title}</h2>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      )}

      {(ctaPrimary || ctaSecondary) && (
        <div className="simple-page-actions">
          {ctaPrimary && (
            <Link href={ctaPrimary.href} className="arx-primary-cta">
              {ctaPrimary.label}
            </Link>
          )}
          {ctaSecondary && (
            <Link href={ctaSecondary.href} className="arx-secondary-cta">
              {ctaSecondary.label}
            </Link>
          )}
        </div>
      )}

      {children}
    </div>
  );
}
