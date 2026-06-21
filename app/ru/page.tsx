import { ArvexoLanding } from "@/components/ArvexoLanding";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/", "ru");

export default function Home() {
  return <ArvexoLanding defaultLang="ru" />;
}
