import { directions } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { Section } from "@/components/Section";

export function Directions() {
  return (
    <Section id="directions">
      <h2 className="section-title">Направления</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {directions.map((item) => (
          <article key={item.title} className="glow-card group min-h-36 p-6">
            <div className="flex gap-5">
              <span className="icon-shell">
                <Icon name={item.icon} className="h-8 w-8" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/[0.62]">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
