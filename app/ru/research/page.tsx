import { FocusPage } from "@/components/FocusPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/research", "ru");

export default function ResearchPage() {
  return <FocusPage locale="ru" label="Независимые исследования" title="Исследования, связанные с реальными системами." lead="Arvexo изучает, как оценивать, понимать и улучшать AI-продукты в средах, где ими действительно пользуются люди." statement="Эта страница станет основой для будущих исследовательских заметок, экспериментов и публикаций." sections={[
    { title: "Эффективность AI", text: "Методы связи внедрения AI с полезными результатами без сведения человека к упрощённым показателям продуктивности." },
    { title: "Системы знаний", text: "Как организации находят, проверяют и распространяют эффективные способы работы с AI." },
    { title: "Человекоцентричный AI", text: "Интерфейсы и обратная связь, которые делают сложные системы понятными, обучающими и безопасными для улучшения." }
  ]} primary={{ label: "GitHub", href: "https://github.com/Pobedych", external: true }} secondary={{ label: "Профиль основателя", href: "/ru/founder" }} />;
}
