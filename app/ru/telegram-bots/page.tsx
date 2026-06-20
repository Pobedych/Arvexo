import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/telegram-bots", "ru");

export default function RuTelegramBotsPage() {
  return (
    <InnerPage
      badge="Telegram-боты"
      title={<>Боты, которые делают <em style={{ fontFamily: "var(--font-cormorant,'Cormorant')", fontStyle: "italic", color: "var(--accent)", fontWeight: 600 }}>реальную работу.</em></>}
      subtitle="Arvexo делает Telegram-ботов для поддержки, продаж, уведомлений, внутренних процессов и магазинов. Не демо-поделки — боты, встроенные в реальный рабочий процесс."
      features={[
        { title: "Боты поддержки", text: "Автоматизация первой линии: маршрутизация, FAQ, создание тикетов и эскалация." },
        { title: "Боты для продаж", text: "Сбор лидов, квалификация, доставка продуктов и оплата через Telegram." },
        { title: "Боты уведомлений", text: "Событийные уведомления для команды: заказы, изменения статусов, системные события." },
        { title: "Внутренние боты", text: "Поиск по базе знаний, онбординг и административная автоматизация для команды." }
      ]}
      ctaPrimary={{ label: "Обсудить бота", href: "/ru/contacts" }}
      ctaSecondary={{ label: "Получить ранний доступ", href: "https://account.arvexo.ru" }}
    />
  );
}
