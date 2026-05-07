import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Telegram Bots — Arvexo",
  description:
    "Telegram Bots are an active Arvexo product direction for support, workflows, mini services and automation."
};

export default function TelegramBotsPage() {
  return (
    <SimplePage
      badge="Telegram Bots"
      title="Automation products inside Telegram."
      subtitle="Arvexo builds Telegram bots for support, notifications, workflows, mini services and everyday automation."
      items={["Support bots", "Notifications", "Mini services", "Automation tools"]}
      actionLabel="Discuss a bot"
    />
  );
}
