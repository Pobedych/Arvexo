import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";
import { telegramUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Контакты — Arvexo",
  description: "Свяжитесь с Arvexo через Telegram или email по вопросам продуктов, партнерств и сотрудничества."
};

export default function ContactsPage() {
  return (
    <SimplePage
      badge="Контакты"
      title="Свяжитесь с Arvexo."
      subtitle="Напишите Arvexo по вопросам продуктов AI Shop, Семейной экосистемы, Robots R&D, партнерств, разработки или будущей коллаборации."
      items={["Telegram", "Email", "Доступ к продуктам", "Партнерства"]}
      actionHref={telegramUrl}
      actionLabel="Открыть Telegram"
    />
  );
}
