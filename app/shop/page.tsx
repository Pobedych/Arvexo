import { SimplePage } from "@/components/SimplePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/shop", "en");

export default function EnglishShopPage() {
  return (
    <SimplePage
      badge="AI Shop"
      title="Active digital products by Arvexo."
      subtitle="AI Shop includes VPN access, Telegram bots, AI services, mini apps and automation tools for real everyday tasks."
      items={["VPN Access", "Telegram Bots", "Mini Apps", "AI Services"]}
      actionHref="/contacts"
      actionLabel="Contact Arvexo"
    />
  );
}
