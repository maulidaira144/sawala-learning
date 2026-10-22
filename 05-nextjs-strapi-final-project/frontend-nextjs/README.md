
# Ruang Belajar Teknologi — Frontend

Frontend website Ruang Belajar Teknologi dibuat menggunakan Next.js untuk menampilkan artikel seputar teknologi. Data artikel diambil dari Strapi sebagai Headless CMS melalui REST API.

## Teknologi yang Digunakan

- Next.js dengan App Router
- React
- TypeScript
- Tailwind CSS
- Strapi REST API

## Fitur

- Menampilkan halaman utama dengan bagian pengenalan website.
- Menampilkan daftar artikel yang diambil dari Strapi.
- Menampilkan gambar sampul, judul, dan ringkasan artikel.
- Menampilkan 6 artikel per halaman dengan fitur pagination.
- Menampilkan detail artikel berdasarkan slug.
- Menyediakan navigasi untuk membaca artikel dan kembali ke daftar artikel.
- Menggunakan pendekatan Atomic Design untuk menyusun komponen.

## Struktur Folder

```text
frontend-nextjs/
├── app/
│   ├── articles/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── atoms/
│   │   └── Button.tsx
│   ├── molecules/
│   │   └── ArticleCard.tsx
│   └── organisms/
│       └── ArticleList.tsx
├── lib/
│   └── strapi.ts
├── .env.local
└── package.json
```

## Persyaratan

Sebelum menjalankan frontend, pastikan sudah menginstal:

- Node.js
- npm
- Backend Strapi yang sudah berjalan

## Instalasi dan Menjalankan Frontend

### 1. Instal dependensi

Buka terminal di folder `frontend-nextjs`, kemudian jalankan:

```bash
npm install
```

### 2. Konfigurasi environment

Buat file `.env.local` di dalam folder `frontend-nextjs` dengan konfigurasi berikut:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

Variabel tersebut digunakan untuk menentukan alamat backend Strapi yang menjadi sumber data artikel.

### 3. Jalankan server pengembangan

```bash
npm run dev
```

### 4. Buka website

Buka browser dan akses:

http://localhost:3000

Pastikan backend Strapi sudah berjalan agar data artikel dapat ditampilkan.

## Integrasi dengan Strapi

Frontend mengambil data artikel dari REST API Strapi melalui fungsi yang tersedia di `lib/strapi.ts`.

Endpoint yang digunakan untuk mengambil artikel beserta gambar sampul:

```text
http://localhost:1337/api/articles?populate=cover
```

Data dari API kemudian ditampilkan melalui halaman utama dan halaman detail artikel.

## Penerapan Atomic Design

Komponen frontend disusun menggunakan pendekatan Atomic Design agar kode lebih terstruktur dan dapat digunakan kembali.

- **Atoms:** `Button.tsx`, komponen tombol yang dapat digunakan kembali.
- **Molecules:** `ArticleCard.tsx`, komponen kartu untuk menampilkan informasi artikel.
- **Organisms:** `ArticleList.tsx`, komponen daftar artikel yang mencakup kartu artikel dan pagination.

## Halaman Utama

- `app/page.tsx` — menampilkan halaman utama dan daftar artikel.
- `app/articles/[slug]/page.tsx` — menampilkan detail artikel berdasarkan slug.
- `app/layout.tsx` — mengatur layout utama aplikasi.

## Penanganan Masalah

**Artikel tidak muncul**

- Pastikan backend Strapi sedang berjalan.
- Pastikan artikel sudah dipublikasikan.
- Periksa izin akses endpoint API di Strapi.

**Gambar artikel tidak muncul**

- Pastikan artikel memiliki gambar sampul.
- Periksa konfigurasi URL Strapi di `.env.local`.

**Frontend tidak dapat mengambil data dari Strapi**

- Pastikan `NEXT_PUBLIC_STRAPI_URL` mengarah ke alamat Strapi yang benar.
- Jika mengubah `.env.local`, hentikan dan jalankan kembali server Next.js.

---

Frontend ini merupakan bagian dari proyek Ruang Belajar Teknologi yang terintegrasi dengan backend Strapi untuk mengelola dan menampilkan konten artikel.
