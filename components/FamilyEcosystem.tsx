import { familyFeatures } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { Section } from "@/components/Section";

export function FamilyEcosystem() {
  return (
    <Section id="family-ecosystem">
      <div className="family-panel anchor-target">
        <div className="family-copy">
          <p className="eyebrow">Core startup direction</p>
          <h2 className="section-title">Family Ecosystem</h2>
          <p>
            Arvexo развивает семейную цифровую экосистему: единое пространство для сервисов, помощников, профилей, данных и
            повседневных процессов семьи.
          </p>
        </div>
        <div className="family-features">
          {familyFeatures.map((item) => (
            <div key={item} className="family-feature">
              <Icon name="check" className="h-5 w-5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
