import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Terms — Arvexo",
  description: "Terms placeholder for Arvexo."
};

export default function TermsPage() {
  return (
    <SimplePage
      badge="Terms"
      title="Arvexo terms and product access."
      subtitle="This page is ready for the full terms text as Arvexo product access, subscriptions and platform services are finalized."
      items={["AI Shop", "Subscriptions", "Family Ecosystem", "Future platform services"]}
      actionLabel="Contact Arvexo"
    />
  );
}
