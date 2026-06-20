import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/contacts", "ru");

export default function RuContactsPage() {
  return (
    <InnerPage
      badge="Контакты"
      title={<>Напишите <em style={{ fontFamily: "var(--font-cormorant,'Cormorant')", fontStyle: "italic", color: "var(--accent)", fontWeight: 600 }}>нам.</em></>}
      subtitle="Свяжитесь с Arvexo по вопросам AI-консалтинга, раннего доступа к продуктам, партнёрства или автоматизации процессов. Отвечаем через Telegram или email."
      features={[
        { title: "Telegram", text: "Быстрый канал связи. Пишите @arvexoai по любому вопросу." },
        { title: "Email", text: "arvexoai@gmail.com — для официальных и бизнес-запросов." },
        { title: "AI-консалтинг", text: "Обсудим автоматизацию, внедрение AI и сценарии для вашего бизнеса." },
        { title: "Партнёрство", text: "Хотите строить что-то вместе с Arvexo? Давайте обсудим." }
      ]}
      ctaPrimary={{ label: "Написать в Telegram", href: "https://t.me/arvexoai" }}
      ctaSecondary={{ label: "Отправить email", href: "mailto:arvexoai@gmail.com" }}
    />
  );
}
