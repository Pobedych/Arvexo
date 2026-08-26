import { ResearchPage } from "@/components/ResearchPage";
import { createPageMetadata } from "@/lib/seo";
import { listPublishedArticles } from "@/lib/research-store";

export const metadata = createPageMetadata("/research", "en");
export const dynamic = "force-dynamic";

export default async function Research() {
  const articles = await listPublishedArticles();
  return (
    <ResearchPage
      locale="en"
      articles={articles.map((article) => ({ slug: article.slug, title: article.titleEn, excerpt: article.excerptEn }))}
    />
  );
}
