import { CTA } from "@/components/CTA";

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
  return <CTA buttonLabel={primaryLabel} href={primaryHref} subtitle={subtitle} title={title} />;
}
