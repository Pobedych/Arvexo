import type { LandingDirection } from "@/lib/content";

type DirectionBlockProps = {
  direction: LandingDirection;
  reversed?: boolean;
};

export function DirectionBlock({ direction, reversed = false }: DirectionBlockProps) {
  return (
    <article className={`direction-block ${reversed ? "direction-block-reversed" : ""}`}>
      <DirectionMockup title={direction.mockupTitle} rows={direction.rows} />
      <div className="direction-copy">
        <p className="direction-label">{direction.label}</p>
        <h3>{direction.title}</h3>
        <p>{direction.description}</p>
        <div className="tag-list" aria-label={`${direction.title} tags`}>
          {direction.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function DirectionMockup({
  rows,
  title
}: {
  rows: Array<{ label: string; status: string }>;
  title: string;
}) {
  return (
    <div className="direction-mockup" aria-hidden="true">
      <div className="mockup-window">
        <div className="mockup-topline">
          <span>{title}</span>
          <span>Platform status</span>
        </div>
        <div className="mockup-list">
          {rows.map((row) => (
            <div key={row.label} className="mockup-row">
              <span className="mockup-icon" />
              <div>
                <strong>{row.label}</strong>
                <small>{row.status}</small>
              </div>
              <span className="mockup-check" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
