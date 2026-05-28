import { SimplePage } from "@/components/SimplePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/family-ecosystem", "ru");

export default function FamilyEcosystemPage() {
  return (
    <SimplePage
      badge="Семейная экосистема"
      title="Безопасное AI-пространство для семейной жизни."
      subtitle="Семейная экосистема фокусируется на семейных профилях, AI-ассистенте, общих задачах, напоминаниях, персональных сервисах и одном защищенном цифровом пространстве."
      items={["Семейные профили", "AI-ассистент", "Общие задачи", "Безопасное пространство"]}
      actionHref="/ru/contacts"
      actionLabel="Связаться"
    />
  );
}
