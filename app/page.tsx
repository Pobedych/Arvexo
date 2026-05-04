import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionBlock } from "@/components/SectionBlock";
import { directions } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="home-block-stack">
        {directions.map((direction, index) => (
          <SectionBlock key={direction.slug} direction={direction} reversed={index % 2 === 1} />
        ))}
      </div>
      <CTASection
        title="Build the Arvexo ecosystem"
        subtitle="Connect privacy tools, Telegram automation, family technologies and future Care Robot R&D in one premium digital ecosystem."
      />
    </>
  );
}
