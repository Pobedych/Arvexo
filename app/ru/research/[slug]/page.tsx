import DOMPurify from "isomorphic-dompurify";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";
import { getArticleBySlug } from "@/lib/research-store";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article || !article.published) return {};

  return {
    title: `${article.titleRu} — ${SITE_NAME}`,
    description: article.excerptRu || undefined,
    alternates: { canonical: absoluteUrl(`/ru/research/${article.slug}`), languages: { en: absoluteUrl(`/research/${article.slug}`), ru: absoluteUrl(`/ru/research/${article.slug}`) } }
  };
}

export default async function ResearchArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article || !article.published) notFound();

  const html = DOMPurify.sanitize(article.bodyRu);

  return (
    <article className="research-article">
      <div className="research-article-head">
        <Link href="/ru/research" className="research-text-link">Исследования<span aria-hidden="true">↖</span></Link>
        <h1>{article.titleRu}</h1>
        {article.excerptRu && <p className="research-article-excerpt">{article.excerptRu}</p>}
      </div>
      <div className="research-article-body" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
