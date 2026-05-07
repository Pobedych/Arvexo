import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Privacy Policy — Arvexo",
  description: "Privacy policy placeholder for Arvexo."
};

export default function PrivacyPolicyPage() {
  return (
    <SimplePage
      badge="Privacy Policy"
      title="Privacy information for Arvexo."
      subtitle="Arvexo is privacy-first by direction. A full policy page can be expanded as the product and platform launch details are finalized."
      items={["Privacy-first design", "Secure access", "Protected family space", "Product transparency"]}
      actionLabel="Contact Arvexo"
    />
  );
}
