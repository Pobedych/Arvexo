import type { RoadmapStep } from "@/lib/content";

type ProcessCardProps = {
  step: RoadmapStep;
};

export function ProcessCard({ step }: ProcessCardProps) {
  return (
    <article className="process-card">
      <p className="step-badge">{step.step}</p>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
      <div className="process-panel" aria-label={`${step.title} scope`}>
        {step.labels.map((label) => (
          <div key={label} className="process-label">
            <span />
            <strong>{label}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}
