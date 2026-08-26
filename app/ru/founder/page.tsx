import { FounderProfile } from "@/components/FounderProfile";
import { createPageMetadata } from "@/lib/seo";
import { listPublishedArticles } from "@/lib/research-store";

export const metadata = createPageMetadata("/founder", "ru");
export const dynamic = "force-dynamic";

export default async function RuFounderPage() {
  const articles = await listPublishedArticles();
  return (
    <FounderProfile
      locale="ru"
      articles={articles.map((article) => ({ slug: article.slug, title: article.titleRu, excerpt: article.excerptRu }))}
    />
  );
}
