import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-guard";
import { deleteArticle, getArticleById, updateArticle, type ResearchArticleInput } from "@/lib/research-store";

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

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminRequest())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const article = await getArticleById(id);
  if (!article) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ article });
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminRequest())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;

  try {
    const input = parseInput(await request.json());
    if (!input.titleEn || !input.titleRu) {
      return NextResponse.json({ error: "Title (EN and RU) is required" }, { status: 400 });
    }
    const article = await updateArticle(id, input);
    return NextResponse.json({ article });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to update article" }, { status: 400 });
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminRequest())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  await deleteArticle(id);
  return NextResponse.json({ ok: true });
}
