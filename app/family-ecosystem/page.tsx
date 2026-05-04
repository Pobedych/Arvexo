import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DirectionPage } from "@/components/DirectionPage";
import { getDirection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Arvexo Family Ecosystem — Shared Family Technology",
  description: "Arvexo Family Ecosystem is the main startup direction for family profiles, AI assistants, shared services and secure family space."
};

export default function FamilyEcosystemPage() {
  const direction = getDirection("family-ecosystem");

  if (!direction) {
    notFound();
  }

  return <DirectionPage direction={direction} />;
}
