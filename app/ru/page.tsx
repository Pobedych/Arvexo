import { BenefitCard } from "@/components/BenefitCard";
import { CTA } from "@/components/CTA";
import { DirectionBlock } from "@/components/DirectionBlock";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { ProcessCard } from "@/components/ProcessCard";
import { SectionHeader } from "@/components/SectionHeader";
import { VisionBlock } from "@/components/VisionBlock";
import { benefits, faqItems, landingDirections, roadmapSteps } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="directions" className="page-section">
        <SectionHeader
          badge="Направления Arvexo"
          title="Три направления. Одна AI-экосистема."
          subtitle="Arvexo объединяет инструменты приватности, Telegram-автоматизацию, семейные технологии и будущее Care Robot R&D в одну долгосрочную платформу."
        />
        <div className="direction-stack">
          {landingDirections.map((direction, index) => (
            <DirectionBlock
              key={direction.title}
              direction={direction}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section id="roadmap" className="page-section roadmap-section">
        <SectionHeader
          badge="Дорожная карта"
          title="Как Arvexo растет от продуктов к экосистеме."
          subtitle="Мы начинаем с цифровых продуктов, строим Семейную экосистему, движемся к долгосрочному Robots R&D и соединяем все в одну платформу."
        />
        <div className="process-grid">
          {roadmapSteps.map((step) => (
            <ProcessCard key={step.step} step={step} />
          ))}
        </div>
      </section>

      <section id="investor-snapshot" className="page-section">
        <SectionHeader
          badge="Снимок для инвестора"
          title="От активных продуктов к долгосрочной AI-экосистеме."
          subtitle="Arvexo объединяет текущие цифровые продукты, семейную платформу и будущее Robots R&D в одно технологическое направление."
        />
        <VisionBlock />
      </section>

      <section id="benefits" className="page-section">
        <SectionHeader
          badge="Преимущества"
          title="Почему Arvexo может вырасти за пределы одного продукта"
          subtitle="Arvexo стартует с активных цифровых продуктов, строит семейную платформу и создает путь к будущему robotics R&D."
        />
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} benefit={benefit} />
          ))}
        </div>
      </section>

      <section id="faq" className="page-section">
        <SectionHeader
          badge="FAQ"
          title="Вопросы об Arvexo"
          subtitle="Короткие ответы про AI Shop, Семейную экосистему и Robots R&D."
        />
        <FAQ items={faqItems} />
      </section>

      <CTA
        title="Строим экосистему Arvexo"
        subtitle="Соединяем инструменты приватности, Telegram-автоматизацию, семейные технологии и будущее Robots R&D в одной экосистеме."
        buttonLabel="Связаться"
        href="/ru/contacts"
      />
    </>
  );
}
