import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/care-robot-rd", "en");

export default function CareRobotRdPage() {
  return (
    <InnerPage
      badge="Robotics R&D"
      title={<>Research into <em style={{ fontFamily: "var(--font-cormorant,'Cormorant')", fontStyle: "italic", color: "var(--accent)", fontWeight: 600 }}>care robotics.</em></>}
      subtitle="Arvexo Robotics R&D is a long-term research direction exploring care technology, assistive robotics and future physical AI products. Early stage, no products yet."
      features={[
        { title: "Care robotics", text: "Research into assistive robots for care environments, aging populations and accessibility." },
        { title: "Physical AI", text: "Exploring the intersection of AI reasoning and physical embodied systems." },
        { title: "Privacy in hardware", text: "Applying privacy-first design principles to robotics and embedded systems." },
        { title: "Long-term R&D", text: "This is a research track, not a product line. Honest timelines, no fake roadmaps." }
      ]}
      ctaPrimary={{ label: "Contact us", href: "/contacts" }}
    />
  );
}
