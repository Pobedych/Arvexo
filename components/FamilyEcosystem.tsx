import { FamilyDashboardMockup } from "@/components/UiMockups";
import { Section } from "@/components/Section";

export function FamilyEcosystem() {
  return (
    <Section id="family-highlight">
      <div className="family-panel">
        <div className="family-copy">
          <p className="eyebrow">Core startup direction</p>
          <h2 className="section-title">Family Ecosystem</h2>
          <p>
            Arvexo builds a family digital ecosystem: shared profiles, AI assistants, personal services
            and one secure space for everyday family processes.
          </p>
        </div>
        <FamilyDashboardMockup />
      </div>
    </Section>
  );
}
