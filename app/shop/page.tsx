import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/shop", "en");

export default function ShopPage() {
  return (
    <InnerPage
      badge="AI Products"
      title={<>Digital AI tools, <em style={{ fontFamily: "var(--font-cormorant,'Cormorant')", fontStyle: "italic", color: "var(--accent)", fontWeight: 600 }}>ready to use.</em></>}
      subtitle="Arvexo AI Products is a catalogue of practical AI tools: Telegram shop, access keys, subscriptions and ready-made solutions for individuals and teams."
      features={[
        { title: "Telegram Shop", text: "Buy AI subscriptions and digital products through a clean Telegram interface." },
        { title: "Access keys", text: "Instant delivery of access keys for AI services, no manual handoff." },
        { title: "AI subscriptions", text: "Monthly or one-time plans for curated AI tools without the noise." },
        { title: "Team tools", text: "Solutions scaled for teams: shared access, role management and usage tracking." }
      ]}
      ctaPrimary={{ label: "Get early access", href: "https://account.arvexo.ru" }}
      ctaSecondary={{ label: "Contact us", href: "/contacts" }}
    />
  );
}
