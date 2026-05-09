import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Telegram-боты — Arvexo",
  description:
    "Telegram-боты — активное продуктовое направление Arvexo для поддержки, рабочих процессов, мини-сервисов и автоматизации."
};

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
