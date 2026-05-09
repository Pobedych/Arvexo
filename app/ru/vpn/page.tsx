import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "VPN-доступ — Arvexo",
  description: "VPN-доступ — активное направление AI Shop для приватной цифровой активности."
};

export default function VpnPage() {
  return (
    <SimplePage
      badge="VPN-доступ"
      title="Приватный доступ внутри AI Shop."
      subtitle="VPN-доступ — один из активных продуктов Arvexo для защищенной цифровой активности и безопасного подключения."
      items={["Безопасный доступ", "Приватная активность", "Стабильное подключение", "Продукт AI Shop"]}
      actionHref="/ru/contacts"
      actionLabel="Запросить доступ"
    />
  );
}
