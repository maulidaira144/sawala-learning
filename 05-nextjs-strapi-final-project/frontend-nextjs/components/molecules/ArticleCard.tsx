import Link from "next/link";
import type { Article } from "@/lib/strapi";
import { getStrapiImageUrl } from "@/lib/strapi";

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  const imageUrl = getStrapiImageUrl(article.cover?.url);

  return (
    <article className="group flex h-full w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/70">
      {/* GAMBAR ARTIKEL */}
      <Link
        href={`/articles/${article.slug}`}
        aria-label={`Baca artikel ${article.title}`}
        className="relative block h-48 w-full shrink-0 overflow-hidden bg-sky-50"
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={article.cover?.alternativeText || article.title}
            loading="lazy"
            className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100 text-5xl">
            📘
          </div>
        )}
      </Link>

      {/* ISI KARTU */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="mb-3 w-fit shrink-0 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold tracking-wide text-sky-700">
          ARTIKEL TEKNOLOGI
        </span>

        <h3 className="line-clamp-2 min-h-[3.5rem] break-words text-lg font-bold leading-7 text-slate-800 transition-colors duration-200 group-hover:text-sky-600">
          {article.title}
        </h3>

        <p className="mt-2 line-clamp-3 break-words text-sm leading-6 text-slate-600">
          {article.excerpt}
        </p>

        {/* TOMBOL BACA */}
        <div className="mt-auto pt-5">
          <Link
            href={`/articles/${article.slug}`}
            className="inline-flex max-w-full items-center justify-center gap-2 rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700 transition-all duration-200 hover:border-sky-500 hover:bg-sky-500 hover:text-white"
          >
            Baca selengkapnya
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}