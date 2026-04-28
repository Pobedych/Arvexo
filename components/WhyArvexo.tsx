import { advantages } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { Section } from "@/components/Section";

export function WhyArvexo() {
  return (
    <Section>
      <h2 className="section-title">Почему Arvexo</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {advantages.map((item) => (
          <article key={item.title} className="glow-card p-6">
            <span className="icon-shell">
              <Icon name={item.icon} className="h-8 w-8" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-6 text-white/[0.62]">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
