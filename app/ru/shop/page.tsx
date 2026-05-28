import { SimplePage } from "@/components/SimplePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/shop", "ru");

export default function ShopPage() {
  return (
    <SimplePage
      badge="AI Shop"
      title="Активные цифровые продукты Arvexo."
      subtitle="AI Shop включает VPN-доступ, Telegram-боты, AI-сервисы, мини-приложения и инструменты автоматизации для реальных повседневных задач."
      items={["VPN-доступ", "Telegram-боты", "Мини-приложения", "AI-сервисы"]}
      actionHref="/ru/contacts"
      actionLabel="Связаться с Arvexo"
    />
  );
}
