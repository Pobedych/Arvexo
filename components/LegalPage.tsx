import Link from "next/link";

type LegalSection = {
  title: string;
  items: string[];
};

type LegalPageProps = {
  actionHref: string;
  actionLabel: string;
  badge: string;
  sections: LegalSection[];
  subtitle: string;
  title: string;
  updated: string;
};

export function LegalPage({ actionHref, actionLabel, badge, sections, subtitle, title, updated }: LegalPageProps) {
  return (
    <div className="legal-page" id="content">
      <section className="legal-hero" aria-labelledby="legal-title">
        <p className="page-badge">{badge}</p>
        <h1 id="legal-title">{title}</h1>
        <p>{subtitle}</p>
        <span className="legal-updated">{updated}</span>
      </section>

      <section className="legal-section-list" aria-label={title}>
        {sections.map((section) => (
          <article className="legal-section-card" key={section.title}>
            <h2>{section.title}</h2>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <div className="legal-action">
        <Link href={actionHref} className="primary-button">
          {actionLabel}
        </Link>
      </div>
    </div>
  );
}
