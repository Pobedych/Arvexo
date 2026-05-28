import { SimplePage } from "@/components/SimplePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/about", "en");

export default function EnglishAboutPage() {
  return (
    <SimplePage
      badge="About"
      title="Arvexo is built as a long-term AI ecosystem."
      subtitle="The platform starts with AI Shop products, develops Family Ecosystem as the core startup direction and keeps Robots R&D as a future technology track."
      items={["AI Shop", "Family Ecosystem", "Robots R&D", "Unified Platform"]}
      actionHref="/contacts"
      actionLabel="Contact Arvexo"
    />
  );
}
