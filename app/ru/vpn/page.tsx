import { SimplePage } from "@/components/SimplePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/vpn", "ru");

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
