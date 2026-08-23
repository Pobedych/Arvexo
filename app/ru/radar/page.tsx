import { FocusPage } from "@/components/FocusPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/radar", "ru");

export default function RadarPage() {
  return <FocusPage locale="ru" label="Эффективность AI в компании" title="Arvexo Radar" lead="Платформа для понимания того, как AI используется в организации, какую ценность создаёт и какие практики стоит масштабировать." statement="Телеметрия без содержимого промптов. Обучение на уровне организации. Без оценки отдельных сотрудников." sections={[
    { title: "Прозрачность", text: "Показывает паттерны внедрения и AI-сценарии команд без сбора содержимого промптов." },
    { title: "Бизнес-ценность", text: "Связывает использование с TCO, экономией времени, FTE-эквивалентом, ROI и сроком окупаемости." },
    { title: "Обмен знаниями", text: "Помогает находить, проверять, публиковать и внедрять практики, которые уже работают внутри компании." }
  ]} primary={{ label: "Репозиторий проекта", href: "https://github.com/Pobedych/Arvexo-Radar", external: true }} secondary={{ label: "Обсудить пилот", href: "mailto:arvexoai@gmail.com", external: true }} />;
}
