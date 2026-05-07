import { Button } from "@/components/Button";

type CTAProps = {
  buttonLabel?: string;
  href?: string;
  subtitle: string;
  title: string;
};

export function CTA({ buttonLabel = "Get in touch", href = "/contacts", subtitle, title }: CTAProps) {
  return (
    <section className="final-cta" aria-labelledby="cta-title">
      <div>
        <h2 id="cta-title">{title}</h2>
        <p>{subtitle}</p>
      </div>
      <Button href={href} className="px-6 py-3" aria-label={buttonLabel}>
        {buttonLabel}
      </Button>
    </section>
  );
}
