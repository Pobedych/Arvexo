import { visionCards } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { Section } from "@/components/Section";
import { VisionMockup } from "@/components/UiMockups";

export function VisionCards() {
  return (
    <Section id="vision">
      <div className="vision-grid">
        {visionCards.map((item) => (
          <article key={item.title} className="vision-card">
            <span className="icon-shell">
              <Icon name={item.icon} className="h-6 w-6" />
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <VisionMockup visual={item.visual} />
          </article>
        ))}
      </div>
    </Section>
  );
}
