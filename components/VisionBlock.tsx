import { visionFocus } from "@/lib/content";

export function VisionBlock() {
  return (
    <section className="vision-section" aria-labelledby="vision-title">
      <div className="vision-copy">
        <p className="section-badge">Investor Snapshot</p>
        <span>Arvexo</span>
        <h2 id="vision-title">Three directions connected by one platform vision.</h2>
        <p>
          Arvexo starts with AI Shop products, develops Family Ecosystem as the core startup
          direction, and explores Robots R&D as a long-term technology track.
        </p>
        <ul className="vision-list">
          {visionFocus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="ecosystem-diagram" aria-label="Arvexo ecosystem diagram">
        {["AI Shop", "Family Ecosystem", "Robots R&D", "Unified Platform"].map((item, index) => (
          <div key={item} className="diagram-node">
            <small>{String(index + 1).padStart(2, "0")}</small>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
