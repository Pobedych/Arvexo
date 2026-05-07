import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Family Ecosystem — Arvexo",
  description:
    "Family Ecosystem is Arvexo's core startup direction for profiles, AI assistant, shared tasks, reminders and secure family space."
};

export default function FamilyEcosystemPage() {
  return (
    <SimplePage
      badge="Family Ecosystem"
      title="A secure AI space for family life."
      subtitle="Family Ecosystem focuses on family profiles, AI assistant, shared tasks, reminders, personal services and one protected digital space."
      items={["Family profiles", "AI Assistant", "Shared tasks", "Secure space"]}
      actionLabel="Get in touch"
    />
  );
}
