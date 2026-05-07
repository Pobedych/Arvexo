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
          badge="Arvexo Directions"
          title="Three directions. One AI ecosystem."
          subtitle="Arvexo connects privacy tools, Telegram automation, family technology and future Care Robot R&D into one long-term platform."
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
          badge="Roadmap"
          title="How Arvexo grows from products to ecosystem."
          subtitle="We start with digital products, build the Family Ecosystem, move toward long-term Robots R&D, and connect everything into one platform."
        />
        <div className="process-grid">
          {roadmapSteps.map((step) => (
            <ProcessCard key={step.step} step={step} />
          ))}
        </div>
      </section>

      <section id="investor-snapshot" className="page-section">
        <SectionHeader
          badge="Investor Snapshot"
          title="From active products to a long-term AI ecosystem."
          subtitle="Arvexo combines current digital products, a family-focused platform and future Robots R&D into one technology direction."
        />
        <VisionBlock />
      </section>

      <section id="benefits" className="page-section">
        <SectionHeader
          badge="Benefits"
          title="Why Arvexo can grow beyond one product"
          subtitle="Arvexo starts with active digital products, builds a family-focused platform and creates a path toward future robotics R&D."
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
          title="Questions about Arvexo"
          subtitle="Quick answers about AI Shop, Family Ecosystem and Robots R&D."
        />
        <FAQ items={faqItems} />
      </section>

      <CTA
        title="Build the Arvexo ecosystem"
        subtitle="Connect privacy tools, Telegram automation, family technologies and future Robots R&D in one ecosystem."
        buttonLabel="Get in touch"
      />
    </>
  );
}
