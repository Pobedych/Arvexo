import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Семейная экосистема — Arvexo",
  description:
    "Семейная экосистема — основное startup-направление Arvexo для профилей, AI-ассистента, общих задач, напоминаний и безопасного семейного пространства."
};

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
