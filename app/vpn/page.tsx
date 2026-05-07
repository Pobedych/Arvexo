import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "VPN Access — Arvexo",
  description: "VPN Access is an active AI Shop product direction for private digital activity."
};

export default function VpnPage() {
  return (
    <SimplePage
      badge="VPN Access"
      title="Private access inside AI Shop."
      subtitle="VPN Access is one of Arvexo's active products for protected digital activity and secure connectivity."
      items={["Secure access", "Private activity", "Stable connection", "AI Shop product"]}
      actionLabel="Request access"
    />
  );
}
