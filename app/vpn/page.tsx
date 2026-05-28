import { SimplePage } from "@/components/SimplePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/vpn", "en");

export default function EnglishVpnPage() {
  return (
    <SimplePage
      badge="VPN Access"
      title="Private access inside AI Shop."
      subtitle="VPN Access is one of Arvexo's active products for protected digital activity and secure connectivity."
      items={["Secure access", "Private activity", "Stable connection", "AI Shop product"]}
      actionHref="/contacts"
      actionLabel="Request access"
    />
  );
}
