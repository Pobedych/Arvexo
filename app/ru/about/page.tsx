import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/about", "ru");

export default function RuAboutPage() {
  return (
    <InnerPage
      badge="О нас"
      title={<>Строим <em style={{ fontFamily: "var(--font-cormorant,'Cormorant')", fontStyle: "italic", color: "var(--accent)", fontWeight: 600 }}>честную</em> AI-экосистему.</>}
      subtitle="Arvexo — молодая AI-экосистема из реальных продуктов: умный VPN, каталог AI-инструментов, Telegram-боты и консалтинг по автоматизации. Никаких фейковых метрик."
      features={[
        { title: "Arvexo Connect", text: "Умный VPN с личным кабинетом, управлением подписками и единым аккаунтом Arvexo." },
        { title: "AI Products", text: "Telegram-магазин цифровых AI-продуктов, access keys, подписок и инструментов автоматизации." },
        { title: "AI Consulting", text: "Автоматизация бизнеса: интеграции с CRM, AI-ассистенты, боты и проектирование процессов." },
        { title: "Robotics R&D", text: "Долгосрочное исследовательское направление в робототехнике, care-технологиях и физических AI-продуктах." }
      ]}
      ctaPrimary={{ label: "Смотреть продукты", href: "/ru/shop" }}
      ctaSecondary={{ label: "Связаться", href: "/ru/contacts" }}
    />
  );
}
