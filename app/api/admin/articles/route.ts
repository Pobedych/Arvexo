import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-guard";
import { createArticle, listArticles, type ResearchArticleInput } from "@/lib/research-store";

function parseInput(body: unknown): ResearchArticleInput {
  const b = body as Record<string, unknown>;
  return {
    slug: String(b.slug ?? "").trim(),
    titleEn: String(b.titleEn ?? "").trim(),
    titleRu: String(b.titleRu ?? "").trim(),
    excerptEn: String(b.excerptEn ?? "").trim(),
    excerptRu: String(b.excerptRu ?? "").trim(),
    bodyEn: String(b.bodyEn ?? ""),
    bodyRu: String(b.bodyRu ?? ""),
    published: Boolean(b.published)
  };
}

export async function GET() {
  if (!(await isAdminRequest())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const articles = await listArticles();
  return NextResponse.json({ articles });
}

export async function POST(request: Request) {
  if (!(await isAdminRequest())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const input = parseInput(await request.json());
    if (!input.titleEn || !input.titleRu) {
      return NextResponse.json({ error: "Title (EN and RU) is required" }, { status: 400 });
    }
    const article = await createArticle(input);
    return NextResponse.json({ article }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to create article" }, { status: 400 });
  }
}
