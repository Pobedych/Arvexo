import { FounderProfile } from "@/components/FounderProfile";
import { createPageMetadata } from "@/lib/seo";
import { listPublishedArticles } from "@/lib/research-store";

export const metadata = createPageMetadata("/founder", "en");
export const dynamic = "force-dynamic";

export default async function FounderPage() {
  const articles = await listPublishedArticles();
  return (
    <FounderProfile
      locale="en"
      articles={articles.map((article) => ({ slug: article.slug, title: article.titleEn, excerpt: article.excerptEn }))}
    />
  );
}
