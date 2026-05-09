import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "О нас — Arvexo",
  description:
    "Arvexo — AI-экосистема для активных цифровых продуктов, семейных технологий и будущего robotics R&D."
};

export default function AboutPage() {
  return (
    <SimplePage
      badge="О нас"
      title="Arvexo строится как долгосрочная AI-экосистема."
      subtitle="Платформа начинается с продуктов AI Shop, развивает Семейную экосистему как основное startup-направление и сохраняет Robots R&D как будущий технологический трек."
      items={["AI Shop", "Семейная экосистема", "Robots R&D", "Единая платформа"]}
      actionHref="/ru/contacts"
      actionLabel="Связаться с Arvexo"
    />
  );
}
