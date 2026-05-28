import { SimplePage } from "@/components/SimplePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/terms", "ru");

export default function TermsPage() {
  return (
    <SimplePage
      badge="Условия"
      title="Условия Arvexo и доступ к продуктам."
      subtitle="Эта страница подготовлена для полного текста условий по мере финализации доступа к продуктам Arvexo, подписок и платформенных сервисов."
      items={["AI Shop", "Подписки", "Семейная экосистема", "Будущие платформенные сервисы"]}
      actionHref="/ru/contacts"
      actionLabel="Связаться с Arvexo"
    />
  );
}
