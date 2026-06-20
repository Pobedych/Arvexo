import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/shop", "ru");

export default function RuShopPage() {
  return (
    <InnerPage
      badge="AI Products"
      title={<>Цифровые AI-инструменты, <em style={{ fontFamily: "var(--font-cormorant,'Cormorant')", fontStyle: "italic", color: "var(--accent)", fontWeight: 600 }}>готовые к работе.</em></>}
      subtitle="Arvexo AI Products — каталог практических AI-инструментов: Telegram-магазин, access keys, подписки и готовые решения для пользователей и команд."
      features={[
        { title: "Telegram-магазин", text: "Покупайте AI-подписки и цифровые продукты через удобный Telegram-интерфейс." },
        { title: "Access keys", text: "Мгновенная выдача ключей доступа для AI-сервисов, без ручной передачи." },
        { title: "AI-подписки", text: "Месячные или разовые планы на отобранные AI-инструменты без информационного шума." },
        { title: "Для команд", text: "Решения для команд: общий доступ, управление ролями и отслеживание использования." }
      ]}
      ctaPrimary={{ label: "Получить ранний доступ", href: "https://account.arvexo.ru" }}
      ctaSecondary={{ label: "Связаться", href: "/ru/contacts" }}
    />
  );
}
