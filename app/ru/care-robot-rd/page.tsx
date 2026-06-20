import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/care-robot-rd", "ru");

export default function RuCareRobotRdPage() {
  return (
    <InnerPage
      badge="Robotics R&D"
      title={<>Исследования в <em style={{ fontFamily: "var(--font-cormorant,'Cormorant')", fontStyle: "italic", color: "var(--accent)", fontWeight: 600 }}>care-робототехнике.</em></>}
      subtitle="Arvexo Robotics R&D — долгосрочное исследовательское направление в care-технологиях, вспомогательной робототехнике и будущих физических AI-продуктах. Ранняя стадия, продуктов пока нет."
      features={[
        { title: "Care-робототехника", text: "Исследования вспомогательных роботов для сред ухода, пожилых людей и доступности." },
        { title: "Физический AI", text: "Изучение пересечения AI-мышления и физических воплощённых систем." },
        { title: "Privacy в железе", text: "Применение принципов privacy-first к робототехнике и встроенным системам." },
        { title: "Долгосрочный R&D", text: "Это исследовательское направление, не продуктовая линейка. Честные сроки, без фейковых роадмапов." }
      ]}
      ctaPrimary={{ label: "Связаться", href: "/ru/contacts" }}
    />
  );
}
