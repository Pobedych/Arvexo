import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/about", "en");

export default function AboutPage() {
  return (
    <InnerPage
      badge="About"
      title={<>Building an <em style={{ fontFamily: "var(--font-cormorant,'Cormorant')", fontStyle: "italic", color: "var(--accent)", fontWeight: 600 }}>honest</em> AI ecosystem.</>}
      subtitle="Arvexo is an early-stage AI ecosystem built around real tools: a smart VPN, an AI products catalogue, Telegram bots and AI consulting for businesses. No fake metrics, no inflated claims."
      features={[
        { title: "Arvexo Connect", text: "Smart VPN with user cabinet, subscription management and unified Arvexo account." },
        { title: "AI Products", text: "Telegram shop with digital AI products, access keys, subscriptions and automation tools." },
        { title: "AI Consulting", text: "Business automation: CRM integrations, AI assistants, bots and process design." },
        { title: "Robotics R&D", text: "Long-term research direction into robotics, care tech and future physical AI products." }
      ]}
      ctaPrimary={{ label: "View products", href: "/shop" }}
      ctaSecondary={{ label: "Contact us", href: "/contacts" }}
    />
  );
}
