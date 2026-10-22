# Sawala Learning — Full-Stack Web Development Journey

Selamat datang di repositori dokumentasi pembelajaran **Sawala Learning**. Repositori ini merangkum seluruh rekam jejak, latihan logika, implementasi kode, arsitektur antarmuka, hingga proyek aplikasi web berskala penuh yang disusun secara terstruktur dari **Materi 1 hingga Materi 5**.

Perjalanan ini dirancang secara berjenjang (progresif)—dimulai dari fondasi bahasa pemrograman JavaScript, pemrograman asinkron dan konsumsi REST API, pengenalan sistem pengetikan statis TypeScript, pengembangan server backend dengan Node.js dan Express, pembuatan antarmuka modern berbasis komponen reaktif menggunakan React, hingga pengembangan final project *full-stack* berbasis Headless CMS (Strapi v5) dan frontend modern (Next.js App Router).

---

## Daftar Isi

- [Gambaran Umum Repositori](#gambaran-umum-repositori)
- [Peta Perjalanan Pembelajaran](#peta-perjalanan-pembelajaran)
- [Rincian Pembelajaran per Materi](#rincian-pembelajaran-per-materi)
  - [Materi 1 — JavaScript Fundamentals](#materi-1--javascript-fundamentals)
  - [Catatan Implementasi Awal — Web Interface & Manipulasi DOM](#catatan-implementasi-awal--web-interface--manipulasi-dom)
  - [Materi 2 — Asynchronous JavaScript, REST API, dan TypeScript](#materi-2--asynchronous-javascript-rest-api-dan-typescript)
  - [Materi 3 — Node.js Fundamentals & Mini Project REST API](#materi-3--nodejs-fundamentals--mini-project-rest-api)
  - [Materi 4 — React Fundamentals & Dashboard Artikel](#materi-4--react-fundamentals--dashboard-artikel)
  - [Materi 5 — Final Project: Ruang Belajar Teknologi (Next.js & Strapi v5)](#materi-5--final-project-ruang-belajar-teknologi-nextjs--strapi-v5)
- [Keterkaitan Antara Materi Fundamental dan Final Project](#keterkaitan-antara-materi-fundamental-dan-final-project)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Direktori Repositori](#struktur-direktori-repositori)
- [Prasyarat Sistem](#prasyarat-sistem)
- [Panduan Instalasi dan Menjalankan Proyek](#panduan-instalasi-dan-menjalankan-proyek)
  - [1. Menjalankan Latihan JavaScript Fundamental & Asynchronous](#1-menjalankan-latihan-javascript-fundamental--asynchronous)
  - [2. Menjalankan Modul TypeScript](#2-menjalankan-modul-typescript)
  - [3. Menjalankan Mini Project REST API (Node.js & Express)](#3-menjalankan-mini-project-rest-api-nodejs--express)
  - [4. Menjalankan Mini Project React Dashboard Artikel (Vite)](#4-menjalankan-mini-project-react-dashboard-artikel-vite)
  - [5. Menjalankan Final Project: Backend Strapi v5](#5-menjalankan-final-project-backend-strapi-v5)
  - [6. Menjalankan Final Project: Frontend Next.js](#6-menjalankan-final-project-frontend-nextjs)
- [Konfigurasi Environment Variables](#konfigurasi-environment-variables)
- [Dokumentasi Endpoint REST API](#dokumentasi-endpoint-rest-api)
- [Panduan Pengujian dan Verifikasi Kode](#panduan-pengujian-dan-verifikasi-kode)
- [Kesimpulan Pembelajaran](#kesimpulan-pembelajaran)

---

## Gambaran Umum Repositori

Repositori ini merefleksikan transformasi kemampuan teknis dari pemahaman sintaks dasar hingga perancangan arsitektur perangkat lunak modern. Setiap direktori modul diisolasi secara mandiri dengan konfigurasi dependensi masing-masing, sehingga memudahkan eksplorasi, pengujian, serta pemeliharaan kode tanpa konflik dependensi global.

### Sorotan Pembelajaran:
1. **Fondasi Kuat:** Penguasaan struktur data, perulangan, algoritma kalkulasi, dan modularitas ES Modules di JavaScript modern.
2. **Konektivitas & Ketahanan Data:** Pemrosesan asinkron non-blocking, integrasi RESTful HTTP client, penanganan error jaringan secara graceful, dan kontrak tipe data statis dengan TypeScript.
3. **Backend Engineering:** Membangun REST API server sendiri menggunakan Node.js core modules, npm package management, Express.js, arsitektur route-controller-middleware, serta environment variables.
4. **Komponen Reaktif:** Mengembangkan Single Page Application (SPA) berbasis komponen modular, unidirectional data flow, React Hooks (`useState`), conditional rendering, dan filtering data dinamis dengan Vite & TypeScript.
5. **Aplikasi Skala Produksi:** Memadukan Headless CMS Strapi v5 berbasis relasional database (MySQL) dengan Next.js App Router, Tailwind CSS, metodologi Atomic Design, dan client-side pagination.

---

## Peta Perjalanan Pembelajaran

```
┌────────────────────────────────────────────────────────────────────────┐
│                      ROADMAP SAWALA LEARNING                           │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ MATERI 1: JavaScript Fundamentals                                      │
│ • Variabel, Tipe Data & Operator   • ES Modules                        │
│ • Kondisi & Functions              • Mini Exercise: Kalkulator & Siswa │
│ • Object, Array & Looping Methods  • Mini Project: Katalog Produk      │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ MATERI 2: Asynchronous JS, REST API, & TypeScript                      │
│ • Promise & async/await            • TypeScript Basics & Interface     │
│ • Fetch API (CRUD HTTP Methods)    • Mini Project: Consume REST API    │
│ • Error Handling (try-catch-throw) • Type-Safe JSON Parsing            │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ MATERI 3: Node.js Fundamentals & Mini Project REST API                 │
│ • Core Modules (os, path) & CommonJS  • Custom Request Logger          │
│ • npm Ecosystem & package.json        • Router & Controller CRUD       │
│ • Mini Project Express REST API       • In-Memory Article Storage      │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ MATERI 4: React Fundamentals & Dashboard Artikel                       │
│ • React 19 + TypeScript + Vite     • State Management (useState)       │
│ • Modular Component Architecture   • Real-Time Search & Category Filter│
│ • Props Interface & Strict Typing  • Conditional Rendering & Cards UI  │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ MATERI 5: Final Project — Ruang Belajar Teknologi                      │
│ ┌───────────────────────────────┐   ┌────────────────────────────────┐ │
│ │ BACKEND: Strapi v5 (Headless) │   │ FRONTEND: Next.js (App Router) │ │
│ │ • MySQL Database (XAMPP)      │──►│ • React 19 + TypeScript        │ │
│ │ • Article Collection & Media  │   │ • Atomic Design Methodology    │ │
│ │ • REST API (/api/articles)    │   │ • Tailwind CSS + Pagination    │ │
│ └───────────────────────────────┘   └────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Rincian Pembelajaran per Materi

### Materi 1 — JavaScript Fundamentals

Direktori: [`01-JavaScript-fundamental/`](./01-JavaScript-fundamental/)

Modul ini berfokus pada penguasaan dasar-dasar logika pemrograman menggunakan standar ECMAScript modern (ES6+):

- **01-variabel-tipe-data:** Deklarasi variabel (`let`, `const`, `var`), tipe data primitif (`string`, `number`, `boolean`, `null`, `undefined`), objek, operator aritmatika, serta inspeksi tipe data dengan operator `typeof`.
- **02-kondisi-function:** Alur percabangan keputusan (`if`, `else if`, `else`), operator perbandingan, ternary operator, dan perbandingan variasi penulisan fungsi (function declaration, function expression, dan arrow function).
- **03-object-array:** Manipulasi struktur data Object (properti, method, objek bersarang) dan Array (pengindeksan, manipulasi elemen, array of objects).
- **04-looping-array-methods:** Penerapan perulangan (`for`, `while`) serta metode iterasi array fungsional modern (`forEach`, `map`, `filter`, `reduce`, `find`).
- **05-destructuring-spread:** Ekstraksi data yang efisien menggunakan *destructuring assignment* pada object dan array, *rest parameters*, serta *spread operator* (`...`) untuk menyalin dan menggabungkan data secara *immutable*.
- **06-es-modules:** Modularisasi logika matematika ke dalam file terpisah ([`math.js`](./01-JavaScript-fundamental/06-es-modules/math.js)) menggunakan kata kunci `export`, kemudian dikonsumsi di [`index.js`](./01-JavaScript-fundamental/06-es-modules/index.js) melalui `import`.

#### Latihan & Mini Project Konsol:
- **`mini-exercise-kalkulator-sederhana`:** Implementasi fungsi aritmatika (`tambah`, `kurang`, `kali`, `bagi`) yang dilengkapi validasi penanganan khusus pembagian dengan angka nol. Dokumentasi lengkap tersedia di [README Kalkulator](./01-JavaScript-fundamental/mini-exercise-kalkulator-sederhana/README.md).
- **`mini-exercise-pengolahan-data-siswa`:** Pengolahan dataset array siswa ([`data.js`](./01-JavaScript-fundamental/mini-exercise-pengolahan-data-siswa/data.js)), meliputi penyaringan siswa yang lulus berdasarkan nilai ambang batas (KKM), pencarian data dengan `find()`, serta kalkulasi nilai total dan nilai rata-rata kelas menggunakan metode akumulator `reduce()`.
- **`mini-project-produk-list`:** Manajemen katalog inventaris produk ([`data.js`](./01-JavaScript-fundamental/mini-project-produk-list/data.js)) yang mencakup pemfilteran kategori (makanan/minuman), kalkulasi total nilai inventaris & rata-rata harga barang, serta penambahan item produk baru secara *immutable* menggunakan *spread operator*.

---

### Catatan Implementasi Awal — Web Interface & Manipulasi DOM

Sebagai tahap transisi awal dalam kurikulum dari eksekusi berbasis terminal menuju lingkungan peramban (*browser*), logika pemrograman dasar sempat diimplementasikan ke dalam antarmuka web interaktif menggunakan HTML5, CSS3, dan DOM API (*Document Object Model*):
- Penanganan formulir dan interaksi pengguna melalui *event listener* (`click`, `submit`, `input`).
- Manipulasi elemen halaman secara langsung (`document.getElementById`, `innerHTML`, `classList`).
- Pembaruan tampilan dinamis untuk aplikasi kalkulator, penyajian kartu data siswa, dan filter kategori produk.

Latihan awal ini menjadi jembatan pemahaman penting mengenai bagaimana kode JavaScript berinteraksi dengan antarmuka pengguna sebelum melangkah ke abstraksi komponen deklaratif di React dan Next.js.

---

### Materi 2 — Asynchronous JavaScript, REST API, dan TypeScript

Direktori: [`02-async-api-typescript/`](./02-async-api-typescript/)

Modul ini memperdalam interaksi client-server, eksekusi non-blocking, serta penjaminan kualitas kode melalui sistem tipe data statis:

- **01-promise-async-await:** Memahami siklus hidup `Promise` (status *pending*, *fulfilled*, *rejected*), mekanisme *event loop* asinkron, serta penulisan kode asynchronous yang bersih dan menyerupai kode sinkron menggunakan sintaks `async/await` pada alur simulasi pemesanan makanan.
- **02-fetch-api:** Menguasai penggunaan Fetch API native untuk melakukan pemanggilan HTTP client lengkap ke endpoint publik *JSONPlaceholder* (`https://jsonplaceholder.typicode.com/posts`):
  - `GET`: Mengambil data kiriman.
  - `POST`: Mengirim data baru dengan menyertakan HTTP request headers (`Content-Type: application/json`) dan request body bertipe JSON stringified.
  - `PUT`: Memperbarui seluruh isi entitas berdasarkan ID.
  - `PATCH`: Memperbarui sebagian properti entitas.
  - `DELETE`: Menghapus entitas dan memeriksa status respon HTTP.
- **03-error-handling:** Penerapan mitigasi kesalahan runtime dan jaringan melalui blok `try...catch`, validasi kondisi status HTTP (`response.ok`), pelemparan pengecualian kustom (`throw new Error(...)`), serta inspeksi instance galat melalui `error instanceof Error`.
- **04-typescript-basic:** Pengenalan TypeScript untuk meningkatkan keterbacaan kode dan mencegah *type error* sebelum kode dijalankan. Mendefinisikan struktur data menggunakan `type` (*union type*: `"lulus" | "tidak lulus"`) dan `interface` ([`type-interface.ts`](./02-async-api-typescript/04-typescript-basic/type-interface.ts)).

#### Proyek Konsumsi REST API:
- **`mini-project-consume-api`:** Integrasi API secara menyeluruh dengan TypeScript. Berkas [`api.ts`](./02-async-api-typescript/mini-project-consume-api/api.ts) mendefinisikan kontrak data `interface User` dan fungsi `getUsers(): Promise<User[]>`. Berkas [`index.ts`](./02-async-api-typescript/mini-project-consume-api/index.ts) memanggil API, memproses data dengan penanganan kesalahan `try...catch`, dan menyajikan daftar pengguna ke konsol terminal secara terformat.

---

### Materi 3 — Node.js Fundamentals & Mini Project REST API

Direktori: [`03-nodejs-fundamentals/`](./03-nodejs-fundamentals/)

Materi ketiga berfokus murni pada **fondasi sisi server (backend) menggunakan Node.js**, ekosistem pengelola paket npm, dan pembuatan web API mandiri:

#### 1. Node.js Module System
Berkas: [`01-module-system/index.js`](./03-nodejs-fundamentals/01-module-system/index.js)
- Memahami konsep eksekusi JavaScript di luar browser menggunakan Node.js runtime.
- Mempelajari sistem modul CommonJS (`require`).
- Menggunakan built-in core modules:
  - Modul `os` untuk membaca informasi sistem operasi (`os.platform()`) dan arsitektur CPU (`os.arch()`).
  - Modul `path` untuk manipulasi alamat berkas lintas platform (`path.join()`, `path.basename()`, `path.extname()`).

#### 2. npm dan `package.json`
Direktori: [`02-npm-package-json/`](./03-nodejs-fundamentals/02-npm-package-json/)
- Memahami peran npm (*Node Package Manager*) dalam inisialisasi dan pengelolaan pustaka pihak ketiga.
- Memahami anatomi berkas `package.json` sebagai manifest proyek (metadata, scripts, dependencies).
- Memahami fungsi `package-lock.json` untuk penguncian versi dependency (*deterministic install*).
- Eksperimen pemasangan dan konfigurasi dependency eksternal (contoh implementasi: `lodash: ^4.18.1`).

#### 3. Mini Project REST API (Express.js)
Direktori: [`mini-project-rest-api/`](./03-nodejs-fundamentals/mini-project-rest-api/)

Mini project ini membangun server REST API mandiri yang mengelola sumber daya artikel menggunakan framework **Express.js (v5.2.1)** dan **dotenv (v18.0.4)** dengan pembagian tanggung jawab kode (*Separation of Concerns*):

- **Arsitektur Direktori:**
  - `src/server.js`: Titik masuk aplikasi, inisialisasi Express, parser body JSON (`express.json()`), pemasangan middleware logger, mounting router `/articles`, dan pengikatan port server.
  - `src/middlewares/logger.middleware.js`: Custom middleware untuk mencatat (*log*) setiap request masuk ke terminal dengan format `${req.method} ${req.url}` sebelum diteruskan via `next()`.
  - `src/routes/articles.route.js`: Peta routing Express Router yang menghubungkan metode HTTP dan endpoint ke fungsi controller terkait.
  - `src/controllers/articles.controller.js`: Logika pengendali CRUD dengan data state tersimpan di memori (*in-memory array*).
- **Endpoint yang Diimplementasikan:**
  - `GET /articles` — Mengambil seluruh koleksi artikel (HTTP 200).
  - `POST /articles` — Membuat artikel baru dengan ID inkremental otomatis (HTTP 201).
  - `PUT /articles/:id` — Memperbarui judul artikel berdasarkan parameter ID, dilengkapi validasi jika ID tidak ditemukan (HTTP 200 / 404).
  - `DELETE /articles/:id` — Menghapus artikel dari array menggunakan `splice()`, dilengkapi validasi jika ID tidak ditemukan (HTTP 200 / 404).
- **Environment & Scripts:**
  - Dikonfigurasi menggunakan file `.env` (`PORT=3000`).
  - Script pengembangan: `npm run dev` (memanfaatkan fitur bawaan Node.js `node --watch src/server.js`).
  - Script produksi: `npm start` (`node src/server.js`).

---

### Materi 4 — React Fundamentals & Dashboard Artikel

Direktori: [`04-react-fundamentals/`](./04-react-fundamentals/)

Materi keempat mempelajari paradigma antarmuka berbasis komponen deklaratif menggunakan pustaka **React 19**, **TypeScript**, dan build tool berkecepatan tinggi **Vite**.

Implementasi proyek terpusat pada **Mini Project React Dashboard Artikel** ([`mini-project-react-dashboard/`](./04-react-fundamentals/mini-project-react-dashboard/)), dengan dokumentasi detail pada [README Dashboard Artikel](./04-react-fundamentals/mini-project-react-dashboard/README.md).

#### Konsep dan Fitur yang Diterapkan:
1. **Arsitektur Komponen Modular:**
   - [`src/App.tsx`](./04-react-fundamentals/mini-project-react-dashboard/src/App.tsx): Komponen utama yang mengelola dataset (9 artikel teknologi), state pencarian, pemfilteran, dan tata letak utama.
   - [`src/components/Card.tsx`](./04-react-fundamentals/mini-project-react-dashboard/src/components/Card.tsx): Komponen kartu artikel mandiri dengan state lokal untuk membaca detail.
   - [`src/components/Button.tsx`](./04-react-fundamentals/mini-project-react-dashboard/src/components/Button.tsx): Komponen tombol yang dapat digunakan kembali (*reusable button*).
2. **Type Safety dengan TypeScript:**
   - Pengetikan ketat pada props komponen (`CardProps`, `ButtonProps`).
3. **Pengelolaan State Dinamis (`useState`):**
   - State `search`: Menyimpan kata kunci pencarian judul artikel.
   - State `category`: Menyimpan pilihan filter kategori (*Semua, Programming, Web Development, Technology*).
   - State `showDetail` (di dalam `Card.tsx`): Menangani *toggle* interaktif untuk menampilkan dan menyembunyikan keterangan detail artikel.
4. **List & Conditional Rendering:**
   - Rendering daftar artikel dinamis menggunakan perulangan array `.map()` disertai identitas `key={article.id}`.
   - Menampilkan jumlah hasil temuan artikel secara *real-time*.
   - Menampilkan umpan balik ramah pengguna (*fallback UI*: "Artikel tidak ditemukan.") ketika filter tidak menghasilkan data.
5. **Styling & User Experience:**
   - Tampilan bersih dan responsif menggunakan CSS modern bertema nuansa warna *navy*.

---

### Materi 5 — Final Project: Ruang Belajar Teknologi (Next.js & Strapi v5)

Direktori: [`05-nextjs-strapi-final-project/`](./05-nextjs-strapi-final-project/)

Sebagai puncak dari seluruh rangkaian pembelajaran, proyek **Ruang Belajar Teknologi** mengintegrasikan arsitektur *full-stack* modern: memisahkan backend konten (Headless CMS) dengan frontend antarmuka berkinerja tinggi (Server-Side Rendering & Client Components).

```
┌──────────────────────────────────────┐          REST API HTTP Request           ┌──────────────────────────────────────┐
│        FRONTEND (Next.js 16)         │ ───────────────────────────────────────► │         BACKEND (Strapi v5)          │
│ • Next.js App Router (SSR + Client)  │   GET /api/articles?populate=cover       │ • Content Manager Admin Panel        │
│ • Atomic Design Components           │                                          │ • SQLite / MySQL Database (XAMPP)    │
│ • Tailwind CSS & Client Pagination   │ ◄─────────────────────────────────────── │ • Media Library (Uploads)            │
│ • http://localhost:3000              │            JSON Response Data            │ • http://localhost:1337             │
└──────────────────────────────────────┘                                          └──────────────────────────────────────┘
```

#### 1. Backend — Strapi v5 Headless CMS ([`backend-strapi/`](./05-nextjs-strapi-final-project/backend-strapi/))
Dokumentasi teknis backend tersedia di [README Backend Strapi](./05-nextjs-strapi-final-project/backend-strapi/README.md).

- **Teknologi:** Strapi v5 (`@strapi/strapi: 5.59.0`), Node.js, driver database `mysql2: 3.20.0` (kompatibel dengan MySQL XAMPP).
- **Skema Konten `article` (`collectionType`):**
  - `title` (string): Judul artikel.
  - `slug` (uid): URL-friendly identifier yang digenerasi otomatis dari `title`.
  - `excerpt` (text): Ringkasan singkat artikel untuk pratinjau kartu.
  - `content` (blocks): Konten utama artikel menggunakan editor blok terstruktur Strapi v5.
  - `cover` (media single): Berkas gambar ilustrasi sampul artikel.
  - Fitur `draftAndPublish`: Memungkinkan alur kerja peninjauan sebelum artikel dipublikasikan ke publik.
- **REST API Endpoint:**
  - `GET http://localhost:1337/api/articles?populate=cover`
  - Menyediakan relasi berkas media sampul secara lengkap untuk dikonsumsi frontend.
- **Panel Administrasi:**
  - Diakses melalui peramban di `http://localhost:1337/admin` untuk memanajemen artikel, mengunggah aset media, dan mengonfigurasi hak akses publik (*Public Roles & Permissions*).

#### 2. Frontend — Next.js App Router ([`frontend-nextjs/`](./05-nextjs-strapi-final-project/frontend-nextjs/))
Dokumentasi teknis frontend tersedia di [README Frontend Next.js](./05-nextjs-strapi-final-project/frontend-nextjs/README.md).

- **Teknologi:** Next.js 16 (`16.4.2`), React 19 (`19.3.0`), TypeScript (`^5`), Tailwind CSS v4 (`^4`, didukung `@tailwindcss/turbopack`).
- **Implementasi Metodologi Atomic Design:**
  - **Atoms (`components/atoms/`):** [`Button.tsx`](./05-nextjs-strapi-final-project/frontend-nextjs/components/atoms/Button.tsx) — Komponen tombol dengan dukungan varian (`primary`, `secondary`) dan mekanisme *smooth scrolling* otomatis menuju section konten target (`#artikel`).
  - **Molecules (`components/molecules/`):** [`ArticleCard.tsx`](./05-nextjs-strapi-final-project/frontend-nextjs/components/molecules/ArticleCard.tsx) — Komponen kartu artikel yang menggabungkan gambar sampul Strapi, badge kategori, judul artikel, ringkasan, efek *hover transition*, dan tautan navigasi.
  - **Organisms (`components/organisms/`):** [`ArticleList.tsx`](./05-nextjs-strapi-final-project/frontend-nextjs/components/organisms/ArticleList.tsx) — Komponen daftar artikel berbasis Client Component (`"use client"`) yang menyajikan:
    - Grid kartu artikel responsif (1 kolom di mobile, 2 kolom di tablet, 3 kolom di desktop).
    - Fitur **Pagination Client-Side** yang membatasi tampilan **6 artikel per halaman**.
    - Tombol navigasi nomor halaman aktif, tombol *Sebelumnya*, dan *Selanjutnya*.
    - Informasi rentang artikel yang sedang ditampilkan secara dinamis.
    - Tampilan *fallback* ketika belum ada artikel yang dipublikasikan.
- **Halaman dan Routing:**
  - [`app/layout.tsx`](./05-nextjs-strapi-final-project/frontend-nextjs/app/layout.tsx): Kerangka dasar halaman, konfigurasi metadata situs, dan pengaturan styling global.
  - [`app/page.tsx`](./05-nextjs-strapi-final-project/frontend-nextjs/app/page.tsx): Halaman utama (Server Component) dengan Hero Section modern bergradasi, tombol penjelajahan dengan *smooth scroll*, integrasi data artikel langsung dari Strapi, dan footer informasi pengembang (*Ira Maulida*).
  - [`app/articles/[slug]/page.tsx`](./05-nextjs-strapi-final-project/frontend-nextjs/app/articles/%5Bslug%5D/page.tsx): Halaman rute dinamis (*dynamic route*) berbasis `slug`. Menampilkan gambar sampul ukuran penuh, kutipan ringkasan bergaris batas elegan, rendering blok paragraf konten artikel, tautan kembali ke beranda, serta penanganan rute tidak valid melalui fungsi `notFound()`.
- **Integrasi Layanan API ([`lib/strapi.ts`](./05-nextjs-strapi-final-project/frontend-nextjs/lib/strapi.ts)):**
  - Pendefinisian tipe data TypeScript `Article`.
  - `getArticles()`: Mengambil daftar artikel dari Strapi dengan *Incremental Static Regeneration* / caching revalidasi waktu (`{ next: { revalidate: 60 } }`).
  - `getArticleBySlug(slug)`: Mengambil artikel spesifik berdasarkan parameter slug.
  - `getStrapiImageUrl(imageUrl)`: Menyesuaikan alamat URL gambar agar dapat dimuat dengan tepat baik dari domain absolut maupun path relatif Strapi (`http://localhost:1337`).

---

## Keterkaitan Antara Materi Fundamental dan Final Project

Final Project **Ruang Belajar Teknologi** tidak berdiri sendiri, melainkan merupakan sintesis langsung dari konsep-konsep yang dipelajari pada modul-modul sebelumnya:

| Modul Pembelajaran | Konsep Kunci | Penerapan Langsung pada Final Project |
| :--- | :--- | :--- |
| **Materi 1 — JavaScript Fundamentals** | Array Methods (`map`, `filter`, `find`), Object Destructuring, Arrow Functions, Modularitas ES Modules | Digunakan pada fungsi `getArticleBySlug`, rendering list kartu artikel di `ArticleList.tsx`, serta ekstraksi properti artikel di komponen UI. |
| **Materi 2 — Async JS & TypeScript** | `Promise`, `async/await`, Fetch API, Error Handling (`response.ok`), Type & Interface | Menjadi fondasi implementasi [`lib/strapi.ts`](./05-nextjs-strapi-final-project/frontend-nextjs/lib/strapi.ts), pengetikan tipe data `Article`, dan pemanggilan data asinkron dari backend ke frontend. |
| **Materi 3 — Node.js Fundamentals** | REST API Architecture, HTTP Methods, Routing, Controllers, Middlewares, `.env` | Membantu memahami bagaimana backend Strapi mengelola routing data, menangani CORS, membaca variabel lingkungan, dan menyajikan RESTful endpoint. |
| **Materi 4 — React Fundamentals** | Komponen Deklaratif, Props, State (`useState`), Event Handling, Conditional Rendering | Ditransformasikan menjadi arsitektur Atomic Design di Next.js: tombol interaktif, state pagination artikel di `ArticleList.tsx`, dan fallback UI. |
| **Materi 5 — Final Project** | Next.js App Router, Strapi v5 Headless CMS, Tailwind CSS, Dynamic Routing | Menyatukan seluruh lapisan arsitektur menjadi satu ekosistem web aplikasi modern yang utuh, cepat, aman, dan siap pakai. |

---

## Teknologi yang Digunakan

### Bahasa Pemrograman & Format
- **JavaScript (ES6+)** — Bahasa dasar logika, skrip fungsional, dan pemrograman asynchronous.
- **TypeScript (v5 / v6)** — Pengetikan statis, interface, dan kontrak tipe data pada React dan Next.js.
- **HTML5 & CSS3** — Struktur semantik dan penataan antarmuka.

### Ekosistem Backend & Server
- **Node.js (v18+)** — Lingkungan eksekusi JavaScript sisi server (*runtime*).
- **Express.js (v5.2.1)** — Web framework minimalis untuk pembuatan Mini Project REST API.
- **Strapi (v5.59.0)** — Headless Content Management System berbasis Node.js untuk Final Project.
- **MySQL / MySQL2 (v3.20.0)** — Basis data relasional (didukung oleh XAMPP).
- **dotenv** — Pengelolaan konfigurasi environment variables lokal.

### Ekosistem Frontend & UI
- **React (v18 & v19)** — Pustaka antarmuka berbasis komponen.
- **Next.js (v16.4.2 — App Router)** — Full-stack React framework dengan Server Components dan file-system based routing.
- **Vite (v8.3.4)** — Development server & bundler berkinerja tinggi untuk proyek React.
- **Tailwind CSS (v4)** — Utility-first CSS framework untuk perancangan antarmuka modern yang responsif.

---

## Struktur Direktori Repositori

Struktur folder aktual di dalam repositori tersusun sebagai berikut:

```text
sawala-learning/
├── 01-JavaScript-fundamental/
│   ├── 01-variabel-tipe-data/
│   │   └── index.js
│   ├── 02-kondisi-function/
│   │   └── index.js
│   ├── 03-object-array/
│   │   └── index.js
│   ├── 04-looping-array-methods/
│   │   └── index.js
│   ├── 05-destructuring-spread/
│   │   └── index.js
│   ├── 06-es-modules/
│   │   ├── index.js
│   │   └── math.js
│   ├── mini-exercise-kalkulator-sederhana/
│   │   ├── index.js
│   │   └── README.md
│   ├── mini-exercise-pengolahan-data-siswa/
│   │   ├── data.js
│   │   └── index.js
│   └── mini-project-produk-list/
│       ├── data.js
│       └── index.js
│
├── 02-async-api-typescript/
│   ├── 01-promise-async-await/
│   │   └── index.js
│   ├── 02-fetch-api/
│   │   └── index.js
│   ├── 03-error-handling/
│   │   └── index.js
│   ├── 04-typescript-basic/
│   │   ├── index.ts
│   │   └── type-interface.ts
│   └── mini-project-consume-api/
│       ├── api.ts
│       └── index.ts
│
├── 03-nodejs-fundamentals/
│   ├── 01-module-system/
│   │   └── index.js
│   ├── 02-npm-package-json/
│   │   ├── package-lock.json
│   │   └── package.json
│   └── mini-project-rest-api/
│       ├── src/
│       │   ├── controllers/
│       │   │   └── articles.controller.js
│       │   ├── middlewares/
│       │   │   └── logger.middleware.js
│       │   ├── routes/
│       │   │   └── articles.route.js
│       │   └── server.js
│       ├── .env
│       ├── package-lock.json
│       └── package.json
│
├── 04-react-fundamentals/
│   └── mini-project-react-dashboard/
│       ├── public/
│       │   ├── favicon.svg
│       │   └── icons.svg
│       ├── src/
│       │   ├── assets/
│       │   │   ├── hero.png
│       │   │   ├── react.svg
│       │   │   └── vite.svg
│       │   ├── components/
│       │   │   ├── Button.tsx
│       │   │   └── Card.tsx
│       │   ├── App.css
│       │   ├── App.tsx
│       │   ├── index.css
│       │   └── main.tsx
│       ├── .gitignore
│       ├── eslint.config.js
│       ├── index.html
│       ├── package-lock.json
│       ├── package.json
│       ├── README.md
│       ├── tsconfig.app.json
│       ├── tsconfig.json
│       ├── tsconfig.node.json
│       └── vite.config.ts
│
├── 05-nextjs-strapi-final-project/
│   ├── backend-strapi/
│   │   ├── config/
│   │   │   ├── admin.js
│   │   │   ├── api.js
│   │   │   ├── database.js
│   │   │   ├── middlewares.js
│   │   │   ├── plugins.js
│   │   │   └── server.js
│   │   ├── database/
│   │   ├── public/
│   │   │   └── robots.txt
│   │   ├── src/
│   │   │   ├── admin/
│   │   │   ├── api/
│   │   │   │   └── article/
│   │   │   │       ├── content-types/article/schema.json
│   │   │   │       ├── controllers/article.js
│   │   │   │       ├── routes/article.js
│   │   │   │       └── services/article.js
│   │   │   └── index.js
│   │   ├── types/
│   │   │   └── generated/
│   │   ├── .env.example
│   │   ├── .gitignore
│   │   ├── jsconfig.json
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   └── README.md
│   │
│   └── frontend-nextjs/
│       ├── app/
│       │   ├── articles/[slug]/
│       │   │   └── page.tsx
│       │   ├── favicon.ico
│       │   ├── globals.css
│       │   ├── layout.tsx
│       │   └── page.tsx
│       ├── components/
│       │   ├── atoms/
│       │   │   └── Button.tsx
│       │   ├── molecules/
│       │   │   └── ArticleCard.tsx
│       │   └── organisms/
│       │       └── ArticleList.tsx
│       ├── lib/
│       │   └── strapi.ts
│       ├── public/
│       ├── .env.local
│       ├── .gitignore
│       ├── eslint.config.mjs
│       ├── next.config.ts
│       ├── package-lock.json
│       ├── package.json
│       ├── README.md
│       └── tsconfig.json
│
├── .gitignore
└── README.md
```

---

## Prasyarat Sistem

Sebelum menjalankan proyek-proyek di dalam repositori ini, pastikan komputer Anda telah terpasang:

- **Node.js**: Versi **20.x** atau **22.x/24.x LTS** (direkomendasikan versi yang kompatibel dengan Strapi v5 dan Next.js 16).
- **npm**: Versi **9.x** atau yang lebih baru (terpasang otomatis bersama Node.js).
- **TypeScript Runner**: `npx tsx` untuk mengeksekusi berkas skrip `.ts` secara cepat tanpa proses kompilasi manual.
- **MySQL / XAMPP**: Diperlukan jika ingin menjalankan backend Strapi dengan basis data MySQL lokal.
- **Peramban Web Modern**: Google Chrome, Mozilla Firefox, Microsoft Edge, atau peramban modern lainnya.

---

## Panduan Instalasi dan Menjalankan Proyek

### 1. Menjalankan Latihan JavaScript Fundamental & Asynchronous

Berkas-berkas JavaScript pada Materi 1 dan Materi 2 dapat langsung dieksekusi menggunakan perintah `node` dari direktori root repositori:

```bash
# Menjalankan latihan Materi 1 (JavaScript Fundamental)
node 01-JavaScript-fundamental/01-variabel-tipe-data/index.js
node 01-JavaScript-fundamental/02-kondisi-function/index.js
node 01-JavaScript-fundamental/03-object-array/index.js
node 01-JavaScript-fundamental/04-looping-array-methods/index.js
node 01-JavaScript-fundamental/05-destructuring-spread/index.js
node 01-JavaScript-fundamental/06-es-modules/index.js

# Menjalankan Mini Exercise & Mini Project Materi 1
node 01-JavaScript-fundamental/mini-exercise-kalkulator-sederhana/index.js
node 01-JavaScript-fundamental/mini-exercise-pengolahan-data-siswa/index.js
node 01-JavaScript-fundamental/mini-project-produk-list/index.js

# Menjalankan latihan Materi 2 (Asynchronous & Fetch API)
node 02-async-api-typescript/01-promise-async-await/index.js
node 02-async-api-typescript/02-fetch-api/index.js
node 02-async-api-typescript/03-error-handling/index.js
```

### 2. Menjalankan Modul TypeScript

Untuk menjalankan berkas skrip TypeScript (`.ts`) pada Materi 2 tanpa perlu melakukan konfigurasi transpilasi manual:

```bash
# Menjalankan latihan dasar pengetikan TypeScript
npx tsx 02-async-api-typescript/04-typescript-basic/index.ts

# Menjalankan Mini Project Konsumsi REST API TypeScript
npx tsx 02-async-api-typescript/mini-project-consume-api/index.ts
```

### 3. Menjalankan Mini Project REST API (Node.js & Express)

Masuk ke folder `03-nodejs-fundamentals/mini-project-rest-api/`:

```bash
# 1. Pindah ke direktori proyek
cd 03-nodejs-fundamentals/mini-project-rest-api

# 2. Pasang dependensi (express, dotenv)
npm install

# 3. Jalankan server dalam mode pengembangan (auto-reload)
npm run dev
```

Server akan aktif dan dapat diakses di:
```text
http://localhost:3000/articles
```

### 4. Menjalankan Mini Project React Dashboard Artikel (Vite)

Masuk ke folder `04-react-fundamentals/mini-project-react-dashboard/`:

```bash
# 1. Pindah ke direktori proyek
cd 04-react-fundamentals/mini-project-react-dashboard

# 2. Pasang dependensi
npm install

# 3. Jalankan server pengembangan Vite
npm run dev
```

Buka URL lokal yang muncul di terminal (biasanya `http://localhost:5173`) pada peramban web Anda.

### 5. Menjalankan Final Project: Backend Strapi v5

Masuk ke folder `05-nextjs-strapi-final-project/backend-strapi/`:

```bash
# 1. Pindah ke direktori backend Strapi
cd 05-nextjs-strapi-final-project/backend-strapi

# 2. Pasang dependensi
npm install

# 3. Siapkan database
# Pastikan modul MySQL pada control panel XAMPP sudah aktif jika menggunakan MySQL.

# 4. Pastikan file konfigurasi .env sudah tersedia (lihat contoh di .env.example)

# 5. Jalankan server Strapi dalam mode pengembangan
npm run develop
```

Setelah proses *build* selesai, akses panel administrasi Strapi untuk mengelola artikel:
```text
http://localhost:1337/admin
```

> **Catatan Izin Akses (Permissions):**
> Agar artikel dapat dibaca oleh frontend publik, pastikan pada dashboard admin Strapi Anda membuka menu **Settings** → **Users & Permissions Plugin** → **Roles** → **Public** → centang izin `find` dan `findOne` pada Content Type **Article**, lalu simpan perubahan.

### 6. Menjalankan Final Project: Frontend Next.js

Buka tab terminal baru, kemudian masuk ke folder `05-nextjs-strapi-final-project/frontend-nextjs/`:

```bash
# 1. Pindah ke direktori frontend Next.js
cd 05-nextjs-strapi-final-project/frontend-nextjs

# 2. Pasang dependensi
npm install

# 3. Pastikan file .env.local telah dibuat dan mengarah ke URL Strapi:
# NEXT_PUBLIC_STRAPI_URL=http://localhost:1337

# 4. Jalankan server pengembangan Next.js
npm run dev
```

Buka peramban dan kunjungi alamat aplikasi web:
```text
http://localhost:3000
```

---

## Konfigurasi Environment Variables

Repositori ini menjaga keamanan kredensial dan konfigurasi rahasia dengan tidak menyertakan berkas kredensial sensitif secara terbuka. Berikut adalah panduan variabel lingkungan yang digunakan:

### 1. Mini Project REST API (`03-nodejs-fundamentals/mini-project-rest-api/.env`)
```env
PORT=3000
```

### 2. Final Project Backend Strapi (`05-nextjs-strapi-final-project/backend-strapi/.env`)
Gunakan template yang tersedia pada [`.env.example`](./05-nextjs-strapi-final-project/backend-strapi/.env.example):
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS="kunciRahasia1,kunciRahasia2"
API_TOKEN_SALT=kunciSaltApi
ADMIN_JWT_SECRET=kunciRahasiaJwtAdmin
TRANSFER_TOKEN_SALT=kunciSaltTransfer
JWT_SECRET=kunciRahasiaJwt
ENCRYPTION_KEY=kunciEnkripsi

# Konfigurasi Database (Jika menggunakan MySQL / XAMPP)
DATABASE_CLIENT=mysql
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_NAME=nama_database_strapi
DATABASE_USERNAME=root
DATABASE_PASSWORD=
```

### 3. Final Project Frontend Next.js (`05-nextjs-strapi-final-project/frontend-nextjs/.env.local`)
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

---

## Dokumentasi Endpoint REST API

### 1. Express Mini Project REST API (Port 3000)

| Metode HTTP | Endpoint | Deskripsi | Status Code | Body Request / Keterangan |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/articles` | Mendapatkan semua artikel di memori | `200 OK` | - |
| `POST` | `/articles` | Membuat entri artikel baru | `201 Created` | `{ "title": "Judul Artikel" }` |
| `PUT` | `/articles/:id` | Memperbarui judul artikel berdasarkan ID | `200 OK` / `404 Not Found` | `{ "title": "Judul Baru" }` |
| `DELETE` | `/articles/:id` | Menghapus artikel berdasarkan ID | `200 OK` / `404 Not Found` | - |

### 2. Strapi v5 Headless CMS REST API (Port 1337)

| Metode HTTP | Endpoint | Deskripsi & Parameter |
| :--- | :--- | :--- |
| `GET` | `/api/articles` | Mengambil daftar artikel yang telah dipublikasikan. |
| `GET` | `/api/articles?populate=cover` | Mengambil artikel lengkap dengan relasi media gambar sampul (*cover*). |
| `GET` | `/api/articles?populate=cover&pagination[page]=1&pagination[pageSize]=100` | Mengambil seluruh koleksi artikel berpaginasi untuk dikonsumsi frontend Next.js. |

---

## Panduan Pengujian dan Verifikasi Kode

Untuk memverifikasi keabsahan penulisan kode (*type checking* dan *linting*) pada proyek-proyek berbasis modern tooling:

### Verifikasi Proyek React Dashboard Artikel:
```bash
cd 04-react-fundamentals/mini-project-react-dashboard
npm run lint    # Memeriksa standard kode ESLint
npm run build   # Memvalidasi type checking TypeScript (tsc -b) dan bundler Vite
```

### Verifikasi Proyek Frontend Next.js:
```bash
cd 05-nextjs-strapi-final-project/frontend-nextjs
npm run lint    # Memeriksa kesesuaian aturan Next.js ESLint
npm run build   # Memeriksa build produksi, sintaks TSX, dan rute App Router
```

---

## Kesimpulan Pembelajaran

Kurikulum **Sawala Learning** memberikan pemahaman yang komprehensif mengenai ekosistem rekayasa web modern. Melalui pengerjaan materi secara bertahap:

1. **Penguasaan Logika & Bahasa:** Memahami seluk-beluk JavaScript murni sebelum bergantung pada framework tingkat tinggi.
2. **Kesiapan Data & Keandalan Tipe:** Memanfaatkan TypeScript dan asynchronous fetching untuk menjamin stabilitas data aplikasi.
3. **Pemahaman Utuh Dua Sisi (Full-Stack Perspective):** Mengetahui cara kerja backend dari dasar (Node.js, Express, middleware, routing) membuat integrasi dengan Headless CMS (Strapi v5) menjadi jauh lebih intuitif.
4. **Penerapan Standar Industri:** Menggunakan metodologi *Atomic Design*, pembagian komponen reaktif, pemanfaatan *Tailwind CSS v4*, serta *Server Components* pada Next.js mencerminkan praktik terbaik pengembangan perangkat lunak modern.

Repositori ini menjadi bukti komitmen terhadap pembelajaran yang disiplin, terdokumentasi rapi, dan berorientasi pada penerapan nyata di dunia industri teknologi web.