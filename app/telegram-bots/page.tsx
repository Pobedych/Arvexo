import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/telegram-bots", "en");

export default function TelegramBotsPage() {
  return (
    <InnerPage
      badge="Telegram Bots"
      title={<>Bots that handle <em style={{ fontFamily: "var(--font-cormorant,'Cormorant')", fontStyle: "italic", color: "var(--accent)", fontWeight: 600 }}>real work.</em></>}
      subtitle="Arvexo builds Telegram bots for support, sales, notifications, internal processes and shops. Not toy demos — bots wired into your actual workflow."
      features={[
        { title: "Support bots", text: "Automate first-line support: routing, FAQs, ticket creation and escalation." },
        { title: "Sales bots", text: "Lead capture, qualification, product delivery and payment collection over Telegram." },
        { title: "Notification bots", text: "Event-driven alerts for your team: orders, status changes, system events." },
        { title: "Internal bots", text: "Knowledge base lookup, onboarding flows and admin automation for your team." }
      ]}
      ctaPrimary={{ label: "Discuss your bot", href: "/contacts" }}
      ctaSecondary={{ label: "Get early access", href: "https://account.arvexo.ru" }}
    />
  );
}
