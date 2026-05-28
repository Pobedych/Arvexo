import { SimplePage } from "@/components/SimplePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/family-ecosystem", "en");

export default function EnglishFamilyEcosystemPage() {
  return (
    <SimplePage
      badge="Family Ecosystem"
      title="A secure AI space for family life."
      subtitle="Family Ecosystem focuses on family profiles, AI assistant, shared tasks, reminders, personal services and one protected digital space."
      items={["Family profiles", "AI Assistant", "Shared tasks", "Secure space"]}
      actionHref="/contacts"
      actionLabel="Get in touch"
    />
  );
}
