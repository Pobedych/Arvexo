import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "AI Shop — Arvexo",
  description:
    "AI Shop is the active Arvexo product direction for VPN access, Telegram bots, AI services, mini apps and automation tools."
};

export default function ShopPage() {
  return (
    <SimplePage
      badge="AI Shop"
      title="Active digital products by Arvexo."
      subtitle="AI Shop includes VPN access, Telegram bots, AI services, mini apps and automation tools for real everyday tasks."
      items={["VPN Access", "Telegram Bots", "Mini Apps", "AI Services"]}
      actionLabel="Contact Arvexo"
    />
  );
}
