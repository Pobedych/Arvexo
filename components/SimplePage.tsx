import { Button } from "@/components/Button";

type SimplePageProps = {
  badge: string;
  title: string;
  subtitle: string;
  items?: string[];
  actionLabel?: string;
  actionHref?: string;
};

export function SimplePage({
  actionHref = "/contacts",
  actionLabel = "Get in touch",
  badge,
  items = [],
  subtitle,
  title
}: SimplePageProps) {
  return (
    <section className="simple-page" aria-labelledby="simple-page-title">
      <p className="section-badge">{badge}</p>
      <h1 id="simple-page-title">{title}</h1>
      <p>{subtitle}</p>
      {items.length > 0 && (
        <div className="simple-page-grid">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      )}
      <Button href={actionHref} className="mt-8 px-6 py-3" aria-label={actionLabel}>
        {actionLabel}
      </Button>
    </section>
  );
}
