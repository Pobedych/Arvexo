import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DirectionPage } from "@/components/DirectionPage";
import { ProductPanel } from "@/components/ProductPanel";
import { robotRoadmap, getDirection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Arvexo Care Robot R&D — Future Care Technology Research",
  description: "Arvexo Care Robot R&D is a future research direction around care robots, AI-powered devices and family care technologies."
};

export default function CareRobotRdPage() {
  const direction = getDirection("care-robot-rd");

  if (!direction) {
    notFound();
  }

  return (
    <DirectionPage direction={direction}>
      <section className="detail-section detail-section-roadmap">
        <div className="detail-section-copy">
          <p className="eyebrow">RESEARCH ROADMAP</p>
          <h2>Future orientation</h2>
          <p>
            Care Robot R&D is intentionally separated from the active commercial product directions. The
            track is designed for research framing, prototype thinking and long-term care technology
            exploration.
          </p>
          <ul className="roadmap-list">
            {robotRoadmap.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ul>
        </div>
        <ProductPanel variant="robot" />
      </section>
    </DirectionPage>
  );
}
