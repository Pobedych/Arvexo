import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DirectionPage } from "@/components/DirectionPage";
import { getDirection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Arvexo Telegram Bots — Automation and Business Workflows",
  description: "Arvexo Telegram Bots is an active commercial direction for support bots, task automation and business workflows."
};

export default function TelegramBotsPage() {
  const direction = getDirection("telegram-bots");

  if (!direction) {
    notFound();
  }

  return <DirectionPage direction={direction} />;
}
