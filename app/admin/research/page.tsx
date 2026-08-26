import Link from "next/link";
import { listArticles } from "@/lib/research-store";

export default async function AdminResearchListPage() {
  const articles = await listArticles();

  return (
    <div className="admin-shell">
      <header className="admin-header">
        <h1>Research articles</h1>
        <Link href="/admin/research/new" className="admin-btn admin-btn-primary">New article</Link>
      </header>

      {articles.length === 0 ? (
        <p className="admin-empty">No articles yet. Create the first one.</p>
      ) : (
        <ul className="admin-article-list">
          {articles.map((article) => (
            <li key={article.id}>
              <Link href={`/admin/research/${article.id}`}>
                <span className={article.published ? "admin-badge admin-badge-live" : "admin-badge"}>
                  {article.published ? "Published" : "Draft"}
                </span>
                <span className="admin-article-title">{article.titleEn || "(untitled)"}</span>
                <span className="admin-article-meta">/{article.slug}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
