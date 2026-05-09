import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Arvexo",
  description: "Политика конфиденциальности Arvexo."
};

export default function PrivacyPolicyPage() {
  return (
    <SimplePage
      badge="Политика конфиденциальности"
      title="Информация о приватности Arvexo."
      subtitle="Arvexo развивается в privacy-first направлении. Полная политика может быть расширена по мере финализации деталей запуска продуктов и платформы."
      items={["Privacy-first дизайн", "Безопасный доступ", "Защищенное семейное пространство", "Прозрачность продуктов"]}
      actionHref="/ru/contacts"
      actionLabel="Связаться с Arvexo"
    />
  );
}
