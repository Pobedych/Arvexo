import { SimplePage } from "@/components/SimplePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/robots-rd", "en");

export default function EnglishRobotsRdPage() {
  return (
    <SimplePage
      badge="Robots R&D"
      title="Future research for family support technologies."
      subtitle="Robots R&D explores care robots, AI-powered devices, behavior models and future technology that can support families in everyday life."
      items={["Care scenarios", "AI behavior model", "Prototype planning", "Device layer"]}
      actionHref="/contacts"
      actionLabel="Discuss R&D"
    />
  );
}
