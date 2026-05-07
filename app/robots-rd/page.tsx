import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = {
  title: "Robots R&D — Arvexo",
  description:
    "Robots R&D is Arvexo's future research direction for care robots, AI-powered devices and family support technologies."
};

export default function RobotsRdPage() {
  return (
    <SimplePage
      badge="Robots R&D"
      title="Future research for family support technologies."
      subtitle="Robots R&D explores care robots, AI-powered devices, behavior models and future technology that can support families in everyday life."
      items={["Care scenarios", "AI behavior model", "Prototype planning", "Device layer"]}
      actionLabel="Discuss R&D"
    />
  );
}
