import { SimplePage } from "@/components/SimplePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/terms", "en");

export default function EnglishTermsPage() {
  return (
    <SimplePage
      badge="Terms"
      title="Arvexo terms and product access."
      subtitle="This page is ready for the full terms text as Arvexo product access, subscriptions and platform services are finalized."
      items={["AI Shop", "Subscriptions", "Family Ecosystem", "Future platform services"]}
      actionHref="/contacts"
      actionLabel="Contact Arvexo"
    />
  );
}
