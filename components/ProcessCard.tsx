import type { RoadmapStep } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type ProcessCardProps = {
  locale?: Locale;
  step: RoadmapStep;
};

const processCopy = {
  ru: {
    scope: "Область направления",
    ready: "Готово",
    status: "Статус"
  },
  en: {
    scope: "scope",
    ready: "Ready",
    status: "Status"
  }
} as const;

export function ProcessCard({ locale = "ru", step }: ProcessCardProps) {
  const copy = processCopy[locale];

  return (
    <article className="process-card">
      <p className="step-badge">{step.step}</p>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
      <div className={`process-panel process-panel-${step.visual}`} aria-label={`${step.title} ${copy.scope}`}>
        <div className="process-tile-strip">
          {step.labels.map((label, index) => (
            <div key={label} className="process-tile">
              <span className="process-tile-icon">{String(index + 1).padStart(2, "0")}</span>
              <strong>{label}</strong>
              <small>{index === 0 ? copy.status : copy.ready}</small>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
