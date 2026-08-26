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
    title: `${article.titleEn} — ${SITE_NAME}`,
    description: article.excerptEn || undefined,
    alternates: { canonical: absoluteUrl(`/research/${article.slug}`), languages: { en: absoluteUrl(`/research/${article.slug}`), ru: absoluteUrl(`/ru/research/${article.slug}`) } }
  };
}

export default async function ResearchArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article || !article.published) notFound();

  const html = DOMPurify.sanitize(article.bodyEn);

  return (
    <article className="research-article">
      <div className="research-article-head">
        <Link href="/research" className="research-text-link">Research<span aria-hidden="true">↖</span></Link>
        <h1>{article.titleEn}</h1>
        {article.excerptEn && <p className="research-article-excerpt">{article.excerptEn}</p>}
      </div>
      <div className="research-article-body" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
