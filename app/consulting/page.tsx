import { FocusPage } from "@/components/FocusPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/consulting", "en");

export default function ConsultingPage() {
  return <FocusPage locale="en" label="AI consulting" title="From an AI idea to a system your team can use." lead="Arvexo helps teams define the right problem, test solutions quickly and establish a credible way to measure value." statement="Focused engagements for product and operations teams. Scope before software." sections={[
    { title: "Audit and strategy", text: "Map workflows, constraints and opportunities before choosing models, vendors or architecture." },
    { title: "Prototype and integrate", text: "Build a narrow working prototype and connect it to the tools and knowledge already used by the team." },
    { title: "Measure and scale", text: "Define adoption, quality, cost and outcome signals that support a responsible scale-up decision." }
  ]} primary={{ label: "Discuss your project", href: "mailto:arvexoai@gmail.com", external: true }} secondary={{ label: "View Arvexo Radar", href: "/radar" }} />;
}
