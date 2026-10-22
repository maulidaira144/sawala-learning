
const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export type Article = {
  id: number;
  documentId: string;
  title: string;
  excerpt: string;
  slug: string;
  content: {
    type: string;
    children?: {
      type: string;
      text?: string;
    }[];
  }[];
  cover?: {
    url: string;
    alternativeText?: string | null;
  } | null;
};


export async function getArticles(): Promise<Article[]> {
  const pageSize = 100;
  const response = await fetch(
    `${STRAPI_URL}/api/articles?populate=cover&pagination[page]=1&pagination[pageSize]=${pageSize}`,
    { next: { revalidate: 60 } }
  );

  if (!response.ok) {
    throw new Error("Gagal mengambil artikel dari Strapi");
  }

  const result = await response.json();
  return result.data;
}


export async function getArticleBySlug(
  slug: string
): Promise<Article | undefined> {
  const articles = await getArticles();
  return articles.find((article) => article.slug === slug);
}

export function getStrapiImageUrl(
  imageUrl?: string | null
): string {
  if (!imageUrl) return "";

  if (imageUrl.startsWith("http")) return imageUrl;

  return `${STRAPI_URL}${imageUrl}`;
}
