import { Icon } from "@/components/Icons";
import type { Benefit } from "@/lib/content";

type BenefitCardProps = {
  benefit: Benefit;
};

export function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <article className="benefit-card">
      <span className="benefit-icon" aria-hidden="true">
        <Icon name={benefit.icon} className="h-5 w-5" />
      </span>
      <h3>{benefit.title}</h3>
      <p>{benefit.description}</p>
    </article>
  );
}
