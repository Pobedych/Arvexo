import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/vpn", "en");

export default function VpnPage() {
  return (
    <InnerPage
      badge="Arvexo Connect"
      title={<>Smart VPN with a <em style={{ fontFamily: "var(--font-cormorant,'Cormorant')", fontStyle: "italic", color: "var(--accent)", fontWeight: 600 }}>real cabinet.</em></>}
      subtitle="Arvexo Connect is a smart VPN with a personal dashboard, subscription management, device control, connection guides and future integration with the unified Arvexo Account."
      features={[
        { title: "Personal cabinet", text: "Manage your subscription, devices and connection profiles in one place." },
        { title: "Subscription management", text: "Pay and renew your VPN plan directly from the cabinet, no manual steps." },
        { title: "Device management", text: "Add, remove and track all connected devices from a single dashboard." },
        { title: "Arvexo Account", text: "Future integration with the unified Arvexo Account for single sign-on across products." }
      ]}
      ctaPrimary={{ label: "Get early access", href: "https://account.arvexo.ru" }}
      ctaSecondary={{ label: "Contact us", href: "/contacts" }}
    />
  );
}
