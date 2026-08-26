import { ArticleForm } from "@/components/admin/ArticleForm";

export default function NewArticlePage() {
  return (
    <div className="admin-shell">
      <header className="admin-header">
        <h1>New article</h1>
      </header>
      <ArticleForm />
    </div>
  );
}
