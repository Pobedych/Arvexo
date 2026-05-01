import { advantages } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { Section } from "@/components/Section";

export function WhyArvexo() {
  return (
    <Section>
      <h2 className="section-title">Почему Arvexo</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {advantages.map((item) => (
          <article key={item.title} className="advantage-card">
            <span className="icon-shell">
              <Icon name={item.icon} className="h-7 w-7" />
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
