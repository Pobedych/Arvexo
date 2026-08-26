"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import type { ResearchArticle } from "@/lib/research-store";

type ArticleFormProps = {
  article?: ResearchArticle;
};

type FormState = {
  slug: string;
  titleEn: string;
  titleRu: string;
  excerptEn: string;
  excerptRu: string;
  bodyEn: string;
  bodyRu: string;
  published: boolean;
};

const emptyState: FormState = {
  slug: "",
  titleEn: "",
  titleRu: "",
  excerptEn: "",
  excerptRu: "",
  bodyEn: "",
  bodyRu: "",
  published: false
};

export function ArticleForm({ article }: ArticleFormProps) {
  const router = useRouter();
  const [tab, setTab] = useState<"en" | "ru">("en");
  const [state, setState] = useState<FormState>(article ? { ...article } : emptyState);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError(null);

    const url = article ? `/api/admin/articles/${article.id}` : "/api/admin/articles";
    const method = article ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state)
    });

    setSaving(false);

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      setError(data.error ?? "Something went wrong");
      return;
    }

    router.push("/admin/research");
    router.refresh();
  }

  async function handleDelete() {
    if (!article) return;
    if (!window.confirm("Delete this article? This cannot be undone.")) return;

    setDeleting(true);
    const response = await fetch(`/api/admin/articles/${article.id}`, { method: "DELETE" });
    setDeleting(false);

    if (response.ok) {
      router.push("/admin/research");
      router.refresh();
    }
  }

  return (
    <form className="admin-article-form" onSubmit={handleSubmit}>
      <div className="admin-field-row">
        <label>
          Slug
          <input value={state.slug} onChange={(event) => update("slug", event.target.value)} placeholder="how-we-measure-ai-adoption" />
        </label>
        <label className="admin-publish-toggle">
          <input type="checkbox" checked={state.published} onChange={(event) => update("published", event.target.checked)} />
          Published
        </label>
      </div>

      <div className="admin-lang-tabs">
        <button type="button" className={tab === "en" ? "is-active" : ""} onClick={() => setTab("en")}>English</button>
        <button type="button" className={tab === "ru" ? "is-active" : ""} onClick={() => setTab("ru")}>Русский</button>
      </div>

      {tab === "en" ? (
        <div className="admin-lang-panel">
          <label>
            Title (EN)
            <input value={state.titleEn} onChange={(event) => update("titleEn", event.target.value)} required />
          </label>
          <label>
            Excerpt (EN)
            <textarea value={state.excerptEn} onChange={(event) => update("excerptEn", event.target.value)} rows={2} />
          </label>
          <label>
            Body (EN)
            <RichTextEditor key="body-en" value={state.bodyEn} onChange={(html) => update("bodyEn", html)} placeholder="Write the article..." />
          </label>
        </div>
      ) : (
        <div className="admin-lang-panel">
          <label>
            Заголовок (RU)
            <input value={state.titleRu} onChange={(event) => update("titleRu", event.target.value)} required />
          </label>
          <label>
            Краткое описание (RU)
            <textarea value={state.excerptRu} onChange={(event) => update("excerptRu", event.target.value)} rows={2} />
          </label>
          <label>
            Текст статьи (RU)
            <RichTextEditor key="body-ru" value={state.bodyRu} onChange={(html) => update("bodyRu", html)} placeholder="Напишите статью..." />
          </label>
        </div>
      )}

      {error && <p className="admin-error">{error}</p>}

      <div className="admin-form-actions">
        <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </button>
        {article && (
          <button type="button" className="admin-btn admin-btn-danger" onClick={handleDelete} disabled={deleting}>
            {deleting ? "Deleting..." : "Delete"}
          </button>
        )}
      </div>
    </form>
  );
}
