import { SimplePage } from "@/components/SimplePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/telegram-bots", "ru");

export default function TelegramBotsPage() {
  return (
    <SimplePage
      badge="Telegram-боты"
      title="Продукты автоматизации внутри Telegram."
      subtitle="Arvexo создает Telegram-ботов для поддержки, уведомлений, рабочих процессов, мини-сервисов и повседневной автоматизации."
      items={["Боты поддержки", "Уведомления", "Мини-сервисы", "Инструменты автоматизации"]}
      actionHref="/ru/contacts"
      actionLabel="Обсудить бота"
    />
  );
}
