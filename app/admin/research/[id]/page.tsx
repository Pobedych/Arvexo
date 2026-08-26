import { notFound } from "next/navigation";
import { ArticleForm } from "@/components/admin/ArticleForm";
import { getArticleById } from "@/lib/research-store";

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await getArticleById(id);
  if (!article) notFound();

  return (
    <div className="admin-shell">
      <header className="admin-header">
        <h1>Edit article</h1>
      </header>
      <ArticleForm article={article} />
    </div>
  );
}
