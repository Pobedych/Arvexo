import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "About — Arvexo",
  description:
    "Arvexo is an AI ecosystem for active digital products, family technology and future robotics R&D."
};

export default function AboutPage() {
  return (
    <SimplePage
      badge="About"
      title="Arvexo is built as a long-term AI ecosystem."
      subtitle="The platform starts with AI Shop products, develops Family Ecosystem as the core startup direction and keeps Robots R&D as a future technology track."
      items={["AI Shop", "Family Ecosystem", "Robots R&D", "Unified Platform"]}
      actionLabel="Contact Arvexo"
    />
  );
}
