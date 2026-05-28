import { SimplePage } from "@/components/SimplePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/telegram-bots", "en");

export default function EnglishTelegramBotsPage() {
  return (
    <SimplePage
      badge="Telegram Bots"
      title="Automation products inside Telegram."
      subtitle="Arvexo builds Telegram bots for support, notifications, workflows, mini services and everyday automation."
      items={["Support bots", "Notifications", "Mini services", "Automation tools"]}
      actionHref="/contacts"
      actionLabel="Discuss a bot"
    />
  );
}
