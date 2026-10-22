import Link from "next/link";
import ArticleList from "@/components/organisms/ArticleList";
import { getArticles } from "@/lib/strapi";
import Button from "@/components/atoms/Button";

export default async function HomePage() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen">
      {/* HERO - GRADASI TETAP DIPERTAHANKAN */}
      <section className="relative isolate overflow-hidden border-b border-blue-100/80 bg-gradient-to-br from-sky-50 via-white to-blue-100">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl sm:h-96 sm:w-96" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Ruang Belajar Teknologi
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl">
            Temukan Inspirasi,
            <span className="mt-2 block bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              Mulai Belajar.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Jelajahi artikel seputar pemrograman, teknologi, dan
            pengembangan web untuk menemani perjalanan belajarmu.
          </p>

          <Button
            scrollTo="artikel"
            className="mt-8 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-white shadow-lg shadow-blue-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <span className="inline-flex items-center gap-3">
              Jelajahi Artikel
              <span aria-hidden="true" className="relative -top-px text-lg leading-none">
                ↓
              </span>
            </span>
          </Button>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <span>✦ Materi pemrograman</span>
            <span>✦ Teknologi terbaru</span>
            <span>✦ Belajar sesuai ritme kamu</span>
          </div>
        </div>
      </section>

      {/* DAFTAR ARTIKEL - LATAR SKY BLUE POLOS SELEBAR LAYAR */}
      <section
        id="artikel"
        className="scroll-mt-6 w-full bg-sky-100 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 sm:mb-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-600 sm:text-sm">
              Pilihan bacaan
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
              Artikel Terbaru
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Temukan wawasan baru dan kembangkan kemampuanmu melalui
              berbagai artikel seputar dunia teknologi.
            </p>
          </div>

          <ArticleList articles={articles} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-blue-100 bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-5 py-7 sm:flex-row sm:px-8 lg:px-12">
          <p className="font-bold text-slate-800">
            Ruang Belajar
          </p>
          <p className="text-sm text-slate-500">
            Dibuat oleh <span className="font-semibold text-slate-700">Ira Maulida</span>
          </p>
          <p className="text-center text-xs text-slate-400 sm:text-right">
            © 2026 Ruang Belajar. Dibangun dengan Next.js &amp; Strapi.
          </p>
  </div>
</footer>
    </main>
  );
}