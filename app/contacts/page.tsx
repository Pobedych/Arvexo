import { SimplePage } from "@/components/SimplePage";
import { telegramUrl } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/contacts", "en");

export default function EnglishContactsPage() {
  return (
    <SimplePage
      badge="Contacts"
      title="Talk to Arvexo."
      subtitle="Contact Arvexo about AI Shop products, Family Ecosystem, Robots R&D, partnerships, development or future collaboration."
      items={["Telegram", "Email", "Product access", "Partnerships"]}
      actionHref={telegramUrl}
      actionLabel="Open Telegram"
    />
  );
}
