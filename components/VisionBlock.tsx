import { visionFocus } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const visionCopy = {
  ru: {
    badge: "Снимок для инвестора",
    title: "Три направления, объединенные одним платформенным видением.",
    description:
      "Arvexo начинается с продуктов AI Shop, развивает Семейную экосистему как основное startup-направление и исследует Robots R&D как долгосрочный технологический трек.",
    diagramLabel: "Диаграмма экосистемы Arvexo",
    core: "AI-экосистема",
    items: [
      { title: "AI Shop", meta: "Активные продукты" },
      { title: "Семейная экосистема", meta: "Основная платформа" },
      { title: "Robots R&D", meta: "Будущее исследование" },
      { title: "Единая платформа", meta: "Связанные сервисы" }
    ]
  },
  en: {
    badge: "Investor Snapshot",
    title: "Three directions connected by one platform vision.",
    description:
      "Arvexo starts with AI Shop products, develops Family Ecosystem as the core startup direction, and explores Robots R&D as a long-term technology track.",
    diagramLabel: "Arvexo ecosystem diagram",
    core: "AI ecosystem",
    items: [
      { title: "AI Shop", meta: "Active products" },
      { title: "Family Ecosystem", meta: "Core platform" },
      { title: "Robots R&D", meta: "Future research" },
      { title: "Unified Platform", meta: "Connected services" }
    ]
  }
} as const;

export function VisionBlock({ focus = visionFocus, locale = "ru" }: { focus?: string[]; locale?: Locale }) {
  const copy = visionCopy[locale];

  return (
    <section className="vision-section" aria-labelledby="vision-title">
      <div className="vision-copy">
        <p className="section-badge">{copy.badge}</p>
        <span>Arvexo</span>
        <h2 id="vision-title">{copy.title}</h2>
        <p>{copy.description}</p>
        <ul className="vision-list">
          {focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="ecosystem-diagram" aria-label={copy.diagramLabel}>
        <div className="diagram-core">
          <span>ARVEXO</span>
          <strong>{copy.core}</strong>
        </div>
        <div className="diagram-flow">
          {copy.items.map((item, index) => (
            <div key={item.title} className="diagram-node">
              <small>{String(index + 1).padStart(2, "0")}</small>
              <div>
                <strong>{item.title}</strong>
                <span>{item.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
