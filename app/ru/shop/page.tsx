import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "AI Shop — Arvexo",
  description:
    "AI Shop — активное продуктовое направление Arvexo для VPN-доступа, Telegram-ботов, AI-сервисов, мини-приложений и инструментов автоматизации."
};

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
