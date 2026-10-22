import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getStrapiImageUrl,
} from "@/lib/strapi";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  const imageUrl = getStrapiImageUrl(article.cover?.url);

  return (
    <main className="min-h-screen bg-white px-6 py-10 md:py-16">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/#artikel"
          scroll={true}
          className="mb-8 inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-white px-5 py-3 font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-50"
        >
          <span aria-hidden="true">←</span>
          Kembali ke Artikel
        </Link>

        <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-100/50">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={article.cover?.alternativeText || article.title}
              className="max-h-[480px] w-full bg-blue-50 object-cover"
            />
          )}

          <div className="px-6 py-9 md:px-12 md:py-12">
            <span className="inline-block rounded-full bg-sky-50 px-4 py-2 text-xs font-bold tracking-wider text-sky-700">
              ARTIKEL TEKNOLOGI
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-800 md:text-5xl">
              {article.title}
            </h1>

            <p className="mt-5 border-l-4 border-sky-300 pl-4 text-lg leading-8 text-slate-500">
              {article.excerpt}
            </p>

            <div className="my-8 h-px bg-gradient-to-r from-sky-200 via-blue-100 to-transparent" />

            <div className="space-y-5 text-base leading-8 text-slate-700 md:text-lg">
              {article.content?.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <p key={index}>
                      {block.children?.map((child, childIndex) => (
                        <span key={childIndex}>{child.text}</span>
                      ))}
                    </p>
                  );
                }

                return null;
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-slate-500">
          Terus belajar dan kembangkan kemampuanmu ✦
        </div>
      </article>
    </main>
  );
}