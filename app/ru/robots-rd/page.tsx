import { SimplePage } from "@/components/SimplePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/robots-rd", "ru");

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
