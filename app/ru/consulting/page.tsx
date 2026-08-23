import { FocusPage } from "@/components/FocusPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/consulting", "ru");

export default function ConsultingPage() {
  return <FocusPage locale="ru" label="AI-консалтинг" title="От идеи с AI до системы, которой пользуется команда." lead="Arvexo помогает определить правильную задачу, быстро проверить решение и создать обоснованный способ измерения ценности." statement="Сфокусированная работа с продуктовыми и операционными командами. Сначала задача, затем технология." sections={[
    { title: "Аудит и стратегия", text: "Разбираем процессы, ограничения и возможности до выбора моделей, поставщиков и архитектуры." },
    { title: "Прототип и интеграция", text: "Создаём узкий рабочий прототип и связываем его с инструментами и знаниями, которыми уже пользуется команда." },
    { title: "Измерение и масштабирование", text: "Определяем метрики внедрения, качества, стоимости и результата для обоснованного решения о масштабировании." }
  ]} primary={{ label: "Обсудить проект", href: "mailto:arvexoai@gmail.com", external: true }} secondary={{ label: "Смотреть Arvexo Radar", href: "/ru/radar" }} />;
}
