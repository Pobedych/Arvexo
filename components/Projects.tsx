import { projects } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { Section } from "@/components/Section";

export function Projects() {
  return (
    <Section id="projects">
      <div>
        <h2 className="section-title">Проекты</h2>
        <p className="mt-2 text-sm font-medium text-white/[0.55]">Current & future projects</p>
      </div>
      <div className="projects-panel mt-6">
        {projects.map((project) => (
          <div key={project} className="project-item">
            <Icon name="check" className="h-6 w-6 text-neon-blue" />
            <span>{project}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
