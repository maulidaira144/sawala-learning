"use client";

import { useState } from "react";
import type { Article } from "@/lib/strapi";
import ArticleCard from "@/components/molecules/ArticleCard";

const ARTICLES_PER_PAGE = 6;

type Props = {
  articles: Article[];
};

export default function ArticleList({ articles }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const visibleArticles = articles.slice(
    startIndex,
    startIndex + ARTICLES_PER_PAGE
  );

  if (articles.length === 0) {
    return (
      <div className="rounded-2xl border border-sky-200 bg-white p-8 text-center">
        <div className="mb-4 text-4xl">📚</div>
        <h3 className="text-xl font-bold text-slate-800">
          Belum ada artikel
        </h3>
        <p className="mt-2 text-slate-500">
          Artikel yang sudah dipublikasikan akan muncul di sini.
        </p>
      </div>
    );
  }

  return (
    <div className="block w-full">
      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          alignItems: "stretch",
          gap: "24px",
        }}
      >
        {visibleArticles.map((article) => (
          <div
            key={article.id}
            className="w-full"
            style={{ minWidth: 0 }}
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Navigasi halaman artikel"
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            className="rounded-xl border border-sky-200 bg-white px-4 py-2.5 text-sm disabled:opacity-40"
          >
            ← Sebelumnya
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                type="button"
                aria-current={currentPage === page ? "page" : undefined}
                onClick={() => setCurrentPage(page)}
                className={`h-10 min-w-10 rounded-xl px-3 text-sm font-bold ${
                  currentPage === page
                    ? "bg-sky-500 text-white"
                    : "border border-sky-200 bg-white text-slate-600"
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
            className="rounded-xl border border-sky-200 bg-white px-4 py-2.5 text-sm disabled:opacity-40"
          >
            Selanjutnya →
          </button>
        </nav>
      )}

      <p className="mt-4 text-center text-sm text-slate-600">
        Menampilkan {startIndex + 1}–
        {Math.min(startIndex + ARTICLES_PER_PAGE, articles.length)} dari{" "}
        {articles.length} artikel
      </p>
    </div>
  );
}