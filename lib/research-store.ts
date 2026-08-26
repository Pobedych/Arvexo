import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type ResearchArticle = {
  id: string;
  slug: string;
  titleEn: string;
  titleRu: string;
  excerptEn: string;
  excerptRu: string;
  bodyEn: string;
  bodyRu: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ResearchArticleInput = {
  slug: string;
  titleEn: string;
  titleRu: string;
  excerptEn: string;
  excerptRu: string;
  bodyEn: string;
  bodyRu: string;
  published: boolean;
};

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "research-articles.json");

async function readAll(): Promise<ResearchArticle[]> {
  try {
    const raw = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as ResearchArticle[];
  } catch {
    return [];
  }
}

async function writeAll(articles: ResearchArticle[]) {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(articles, null, 2), "utf-8");
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export async function listArticles(): Promise<ResearchArticle[]> {
  const articles = await readAll();
  return articles.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export async function listPublishedArticles(): Promise<ResearchArticle[]> {
  const articles = await listArticles();
  return articles.filter((article) => article.published);
}

export async function getArticleBySlug(slug: string): Promise<ResearchArticle | null> {
  const articles = await readAll();
  return articles.find((article) => article.slug === slug) ?? null;
}

export async function getArticleById(id: string): Promise<ResearchArticle | null> {
  const articles = await readAll();
  return articles.find((article) => article.id === id) ?? null;
}

export async function createArticle(input: ResearchArticleInput): Promise<ResearchArticle> {
  const articles = await readAll();
  const slug = slugify(input.slug || input.titleEn);
  if (!slug) throw new Error("Slug is required");
  if (articles.some((article) => article.slug === slug)) {
    throw new Error("An article with this slug already exists");
  }

  const now = new Date().toISOString();
  const article: ResearchArticle = { id: randomUUID(), ...input, slug, createdAt: now, updatedAt: now };
  articles.push(article);
  await writeAll(articles);
  return article;
}

export async function updateArticle(id: string, input: ResearchArticleInput): Promise<ResearchArticle> {
  const articles = await readAll();
  const index = articles.findIndex((article) => article.id === id);
  if (index === -1) throw new Error("Article not found");

  const slug = slugify(input.slug || input.titleEn);
  if (!slug) throw new Error("Slug is required");
  if (articles.some((article) => article.slug === slug && article.id !== id)) {
    throw new Error("An article with this slug already exists");
  }

  const updated: ResearchArticle = { ...articles[index], ...input, slug, updatedAt: new Date().toISOString() };
  articles[index] = updated;
  await writeAll(articles);
  return updated;
}

export async function deleteArticle(id: string): Promise<void> {
  const articles = await readAll();
  await writeAll(articles.filter((article) => article.id !== id));
}
