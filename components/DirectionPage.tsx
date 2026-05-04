import type { ReactNode } from "react";
import { CTASection } from "@/components/CTASection";
import { DetailList } from "@/components/DetailList";
import { Icon } from "@/components/Icons";
import { PageIntro } from "@/components/PageIntro";
import { ProductPanel } from "@/components/ProductPanel";
import { StatusPill } from "@/components/StatusPill";
import type { Direction } from "@/lib/content";

type DirectionPageProps = {
  children?: ReactNode;
  direction: Direction;
};

export function DirectionPage({ children, direction }: DirectionPageProps) {
  return (
    <>
      <PageIntro
        actionHref="/contacts"
        actionLabel="Get in touch"
        direction={direction}
        eyebrow={direction.eyebrow}
        points={direction.points}
        subtitle={direction.intro}
        title={direction.title}
      />

      <section className="detail-section">
        <div className="detail-section-copy">
          <div className="section-kicker">
            <span className="section-icon">
              <Icon name={direction.icon} className="h-5 w-5" />
            </span>
            <span>{direction.label}</span>
            <StatusPill tone={direction.tone}>{direction.status}</StatusPill>
          </div>
          <h2>What this direction is about</h2>
          <p>{direction.description}</p>
          <DetailList items={direction.points} />
        </div>
        <ProductPanel variant={direction.panel} />
      </section>

      <section className="content-grid-section">
        <div className="section-heading">
          <p className="eyebrow">PRODUCT SCOPE</p>
          <h2>Features and product focus</h2>
        </div>
        <div className="large-card-grid">
          {direction.features.map((feature) => (
            <article key={feature.title} className="large-info-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid-section">
        <div className="section-heading">
          <p className="eyebrow">WHY IT MATTERS</p>
          <h2>Benefits for the ecosystem</h2>
        </div>
        <div className="large-card-grid">
          {direction.benefits.map((benefit) => (
            <article key={benefit.title} className="large-info-card">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      {children}

      <CTASection
        title={`Start with ${direction.label}`}
        subtitle={`Talk to Arvexo about ${direction.label} and how it fits into the wider privacy, automation and family technology ecosystem.`}
      />
    </>
  );
}
