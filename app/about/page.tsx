import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/about", "en");

export default function AboutPage() {
  return (
    <InnerPage
      badge="About"
      title={<>Building AI systems for <em style={{ fontStyle: "normal", color: "#2154d8", fontWeight: 650 }}>measurable progress.</em></>}
      subtitle="Arvexo is an independent AI studio founded by Alexey Doborin. We build focused products, conduct applied research and help teams turn AI experiments into working systems."
      features={[
        { title: "Arvexo Radar", text: "Enterprise AI effectiveness and knowledge platform for visibility, business value and scalable practices." },
        { title: "Arvexo AI Arena", text: "Learning and competition platform for skills, challenging tasks, projects and verified progress." },
        { title: "Independent Research", text: "Applied work on AI effectiveness, knowledge systems and human-centered AI products." },
        { title: "AI Consulting", text: "Strategy, process audit, rapid prototyping, integration and effectiveness measurement." }
      ]}
      ctaPrimary={{ label: "View Arvexo Radar", href: "/radar" }}
      ctaSecondary={{ label: "Meet the founder", href: "/founder" }}
    />
  );
}
