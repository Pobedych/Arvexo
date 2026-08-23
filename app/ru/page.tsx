import { EcosystemLanding } from "@/components/EcosystemLanding";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/", "ru");

export default function Home() {
  return <EcosystemLanding defaultLang="ru" />;
}
