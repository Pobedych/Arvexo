import { projects } from "@/lib/content";
import { Section } from "@/components/Section";

const statusClass = {
  Active: "active",
  "In development": "in-development",
  "Future R&D": "future"
};

export function Projects() {
  return (
    <Section id="projects">
      <div className="section-heading">
        <h2 className="section-title">Проекты и развитие</h2>
        <p className="section-lead">Current products, startup direction and future R&D.</p>
      </div>
      <div className="roadmap mt-7">
        {projects.map((project) => (
          <div key={project.title} className="roadmap-item">
            <span className={`roadmap-status roadmap-status-${statusClass[project.status]}`}>{project.status}</span>
            <span>{project.title}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
