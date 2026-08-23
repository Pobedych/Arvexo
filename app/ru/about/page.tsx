import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/about", "ru");

export default function RuAboutPage() {
  return (
    <InnerPage
      badge="О нас"
      title={<>Создаём AI-системы для <em style={{ fontStyle: "normal", color: "#2154d8", fontWeight: 650 }}>измеримого прогресса.</em></>}
      subtitle="Arvexo — независимая AI-студия, основанная Алексеем Добориным. Мы создаём собственные продукты, проводим прикладные исследования и помогаем командам превращать эксперименты с AI в работающие системы."
      features={[
        { title: "Arvexo Radar", text: "Корпоративная платформа эффективности AI и обмена знаниями: прозрачность, бизнес-ценность и масштабируемые практики." },
        { title: "Arvexo AI Arena", text: "Образовательная и соревновательная платформа для сложных задач, проектов и подтверждённого прогресса." },
        { title: "Собственные исследования", text: "Прикладная работа над эффективностью AI, системами знаний и человекоцентричными AI-продуктами." },
        { title: "AI-консалтинг", text: "Стратегия, аудит процессов, быстрые прототипы, интеграция и измерение эффективности." }
      ]}
      ctaPrimary={{ label: "Смотреть Arvexo Radar", href: "/ru/radar" }}
      ctaSecondary={{ label: "Об основателе", href: "/ru/founder" }}
    />
  );
}
