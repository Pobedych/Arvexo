import { SimplePage } from "@/components/SimplePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/privacy-policy", "en");

export default function EnglishPrivacyPolicyPage() {
  return (
    <SimplePage
      badge="Privacy Policy"
      title="Privacy information for Arvexo."
      subtitle="Arvexo is privacy-first by direction. A full policy page can be expanded as the product and platform launch details are finalized."
      items={["Privacy-first design", "Secure access", "Protected family space", "Product transparency"]}
      actionHref="/contacts"
      actionLabel="Contact Arvexo"
    />
  );
}
