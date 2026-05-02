import { processSteps } from "@/lib/content";
import { Section } from "@/components/Section";
import { ProcessMockup } from "@/components/UiMockups";

export function Process() {
  return (
    <Section id="process" className="process-section">
      <div className="section-heading">
        <h2 className="section-title">How Arvexo grows</h2>
      </div>

      <div className="process-grid mt-8">
        {processSteps.map((step) => (
          <article key={step.title} className="process-card">
            <div className="process-card-copy">
              <div className="flex items-center justify-between gap-3">
                <span className="process-eyebrow">{step.eyebrow}</span>
                <span className="status-pill">{step.status}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            <ProcessMockup visual={step.visual} />
          </article>
        ))}
      </div>
    </Section>
  );
}
