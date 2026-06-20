import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/vpn", "ru");

export default function RuVpnPage() {
  return (
    <InnerPage
      badge="Arvexo Connect"
      title={<>Умный VPN с <em style={{ fontFamily: "var(--font-cormorant,'Cormorant')", fontStyle: "italic", color: "var(--accent)", fontWeight: 600 }}>личным кабинетом.</em></>}
      subtitle="Arvexo Connect — умный VPN с личным кабинетом, управлением подписками, устройствами, инструкциями подключения и будущей интеграцией с единым аккаунтом Arvexo."
      features={[
        { title: "Личный кабинет", text: "Управляйте подпиской, устройствами и профилями подключения в одном месте." },
        { title: "Управление подпиской", text: "Оплата и продление плана VPN прямо из кабинета, без лишних шагов." },
        { title: "Управление устройствами", text: "Добавляйте, удаляйте и отслеживайте подключённые устройства из одного дашборда." },
        { title: "Arvexo Account", text: "Планируется интеграция с единым аккаунтом Arvexo для сквозного входа по всем продуктам." }
      ]}
      ctaPrimary={{ label: "Получить ранний доступ", href: "https://account.arvexo.ru" }}
      ctaSecondary={{ label: "Связаться", href: "/ru/contacts" }}
    />
  );
}
