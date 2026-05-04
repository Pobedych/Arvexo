import { Button } from "@/components/Button";
import { DetailList } from "@/components/DetailList";
import { Icon } from "@/components/Icons";
import { ProductPanel } from "@/components/ProductPanel";
import { StatusPill } from "@/components/StatusPill";
import type { Direction } from "@/lib/content";

type SectionBlockProps = {
  direction: Direction;
  reversed?: boolean;
};

export function SectionBlock({ direction, reversed = false }: SectionBlockProps) {
  return (
    <section className={`section-block ${reversed ? "section-block-reversed" : ""}`}>
      <div className="section-block-copy">
        <div className="section-kicker">
          <span className="section-icon">
            <Icon name={direction.icon} className="h-5 w-5" />
          </span>
          <span>{direction.eyebrow}</span>
          <StatusPill tone={direction.tone}>{direction.status}</StatusPill>
        </div>
        <h2>{direction.homeTitle}</h2>
        <p>{direction.description}</p>
        <DetailList items={direction.points} />
        <Button href={direction.href} className="mt-2 px-6 py-3">
          {direction.cta}
        </Button>
      </div>
      <ProductPanel variant={direction.panel} />
    </section>
  );
}
