import { directions } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { Section } from "@/components/Section";
import { DirectionMockup } from "@/components/UiMockups";

type Direction = (typeof directions)[number];

export function Directions() {
  return (
    <Section id="directions">
      <div className="section-heading">
        <h2 className="section-title">Наши направления</h2>
        <p className="section-lead">
          Четыре направления Arvexo: текущие цифровые продукты, семейная экосистема и future R&D.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {directions.map((item) => (
          <DirectionCard key={item.title} item={item} />
        ))}
      </div>
    </Section>
  );
}

function DirectionCard({ item }: { item: Direction }) {
  return (
    <article id={item.href.slice(1)} className="direction-card anchor-target">
      <div className="direction-copy">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="direction-icon-box">
            <Icon name={item.icon} className="h-6 w-6" />
          </div>
          <span className="direction-badge">{item.status}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <DirectionMockup visual={item.visual} />
    </article>
  );
}
