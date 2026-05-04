import { Button } from "@/components/Button";
import { DetailList } from "@/components/DetailList";
import { Icon } from "@/components/Icons";
import { ProductPanel } from "@/components/ProductPanel";
import type { Direction } from "@/lib/content";

type PageIntroProps = {
  actionLabel?: string;
  actionHref?: string;
  direction?: Direction;
  eyebrow: string;
  panel?: Direction["panel"] | "contact" | "shop";
  points?: string[];
  subtitle: string;
  title: string;
};

export function PageIntro({
  actionHref = "/contacts",
  actionLabel = "Get in touch",
  direction,
  eyebrow,
  panel,
  points = [],
  subtitle,
  title
}: PageIntroProps) {
  const panelVariant = panel ?? direction?.panel ?? "command";

  return (
    <section className="page-intro">
      <div className="page-intro-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {points.length > 0 && <DetailList items={points} />}
        <div className="intro-actions">
          <Button href={actionHref} className="px-6 py-3">
            {actionLabel}
            <Icon name="bolt" className="h-4 w-4" />
          </Button>
          <Button href="/" variant="secondary" className="px-6 py-3">
            Back to Home
          </Button>
        </div>
      </div>
      <ProductPanel variant={panelVariant} />
    </section>
  );
}
