import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";

type CTASectionProps = {
  primaryHref?: string;
  primaryLabel?: string;
  subtitle: string;
  title: string;
};

export function CTASection({
  primaryHref = "/contacts",
  primaryLabel = "Get in touch",
  subtitle,
  title
}: CTASectionProps) {
  return (
    <section className="cta-section">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <Button href={primaryHref} className="px-6 py-3">
        {primaryLabel}
        <Icon name="telegram" className="h-5 w-5" />
      </Button>
    </section>
  );
}
