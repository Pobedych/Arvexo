import type { Metadata } from "next";
import { BenefitCard } from "@/components/BenefitCard";
import { CTA } from "@/components/CTA";
import { DirectionBlock } from "@/components/DirectionBlock";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { ProcessCard } from "@/components/ProcessCard";
import { SectionHeader } from "@/components/SectionHeader";
import { VisionBlock } from "@/components/VisionBlock";
import { benefits, faqItems, homeCopy, landingDirections, roadmapSteps, visionFocus } from "@/lib/content.en";

export const metadata: Metadata = {
  title: "Arvexo — AI Ecosystem for Digital Privacy and Family Technology",
  description:
    "Arvexo connects AI Shop products, Telegram automation, Family Ecosystem and future Robots R&D into one long-term technology platform."
};

export default function EnglishHome() {
  return (
    <>
      <Hero locale="en" />

      <section id="directions" className="page-section">
        <SectionHeader {...homeCopy.directions} />
        <div className="direction-stack">
          {landingDirections.map((direction, index) => (
            <DirectionBlock
              key={direction.title}
              direction={direction}
              locale="en"
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section id="roadmap" className="page-section roadmap-section">
        <SectionHeader {...homeCopy.roadmap} />
        <div className="process-grid">
          {roadmapSteps.map((step) => (
            <ProcessCard key={step.step} step={step} locale="en" />
          ))}
        </div>
      </section>

      <section id="investor-snapshot" className="page-section">
        <SectionHeader {...homeCopy.investor} />
        <VisionBlock focus={visionFocus} locale="en" />
      </section>

      <section id="benefits" className="page-section">
        <SectionHeader {...homeCopy.benefits} />
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} benefit={benefit} />
          ))}
        </div>
      </section>

      <section id="faq" className="page-section">
        <SectionHeader {...homeCopy.faq} />
        <FAQ items={faqItems} />
      </section>

      <CTA
        title={homeCopy.cta.title}
        subtitle={homeCopy.cta.subtitle}
        buttonLabel={homeCopy.cta.buttonLabel}
        href="/contacts"
      />
    </>
  );
}
