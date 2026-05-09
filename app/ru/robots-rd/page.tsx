import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Robots R&D — Arvexo",
  description:
    "Robots R&D — будущее исследовательское направление Arvexo для care-роботов, AI-устройств и технологий семейной поддержки."
};

export default function RobotsRdPage() {
  return (
    <SimplePage
      badge="Robots R&D"
      title="Будущие исследования технологий семейной поддержки."
      subtitle="Robots R&D исследует care-роботов, AI-устройства, модели поведения и будущие технологии, которые смогут поддерживать семьи в повседневной жизни."
      items={["Сценарии заботы", "AI-модель поведения", "Планирование прототипа", "Уровень устройств"]}
      actionHref="/ru/contacts"
      actionLabel="Обсудить R&D"
    />
  );
}
