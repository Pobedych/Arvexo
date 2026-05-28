import { SimplePage } from "@/components/SimplePage";
import { telegramUrl } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/contacts", "ru");

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
