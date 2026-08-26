import DOMPurify from "isomorphic-dompurify";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, SEO_IMAGE, SITE_NAME } from "@/lib/seo";
import { getArticleBySlug } from "@/lib/research-store";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article || !article.published) return {};

  const url = absoluteUrl(`/ru/research/${article.slug}`);

  return {
    title: `${article.titleRu} — ${SITE_NAME}`,
    description: article.excerptRu || undefined,
    alternates: { canonical: url, languages: { en: absoluteUrl(`/research/${article.slug}`), ru: url } },
    openGraph: {
      title: article.titleRu,
      description: article.excerptRu || undefined,
      url,
      siteName: SITE_NAME,
      type: "article",
      locale: "ru_RU",
      alternateLocale: ["en_US"],
      publishedTime: article.createdAt,
      modifiedTime: article.updatedAt,
      authors: [absoluteUrl("/ru/founder")],
      images: [{ url: absoluteUrl(SEO_IMAGE), width: 1200, height: 630, alt: article.titleRu }]
    },
    twitter: {
      card: "summary_large_image",
      title: article.titleRu,
      description: article.excerptRu || undefined,
      images: [absoluteUrl(SEO_IMAGE)]
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } }
  };
}

export default async function ResearchArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article || !article.published) notFound();

  const html = DOMPurify.sanitize(article.bodyRu);
  const url = absoluteUrl(`/ru/research/${article.slug}`);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline: article.titleRu,
    description: article.excerptRu || undefined,
    inLanguage: "ru",
    datePublished: article.createdAt,
    dateModified: article.updatedAt,
    author: { "@type": "Person", "@id": `${absoluteUrl("/founder")}#person`, name: "Алексей Доборин", url: absoluteUrl("/ru/founder") },
    publisher: { "@type": "Organization", "@id": `${absoluteUrl("/")}#organization`, name: SITE_NAME, url: absoluteUrl("/") }
  };

  return (
    <article className="research-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="research-article-head">
        <Link href="/ru/research" className="research-text-link">Исследования<span aria-hidden="true">↖</span></Link>
        <h1>{article.titleRu}</h1>
        {article.excerptRu && <p className="research-article-excerpt">{article.excerptRu}</p>}
      </div>
      <div className="research-article-body" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
