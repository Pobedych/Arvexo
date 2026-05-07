import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";
import { telegramUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contacts — Arvexo",
  description: "Contact Arvexo through Telegram or email for products, partnerships and collaboration."
};

export default function ContactsPage() {
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
