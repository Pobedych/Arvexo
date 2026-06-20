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
    <div className="simple-page">
      <p className="section-badge">{badge}</p>
      <h1>{title}</h1>
      <p>{subtitle}</p>

      {features && features.length > 0 && (
        <div className="simple-page-grid">
          {features.map((f) => (
            <div key={f.title} style={{ border: "1px solid var(--hairline)", borderRadius: 12, background: "var(--surface)", padding: "16px 18px" }}>
              <strong style={{ display: "block", marginBottom: 6, color: "var(--ink)", fontSize: ".9rem", fontWeight: 700 }}>
                {f.title}
              </strong>
              <p style={{ margin: 0, fontSize: ".86rem", color: "var(--muted)", lineHeight: 1.55 }}>{f.text}</p>
            </div>
          ))}
        </div>
      )}

      {(ctaPrimary || ctaSecondary) && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 36 }}>
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
