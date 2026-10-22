# React Dashboard Artikel

## Deskripsi Proyek

React Dashboard Artikel merupakan mini project yang dibuat untuk mempraktikkan konsep dasar React dan TypeScript dalam membangun antarmuka web interaktif. Aplikasi ini menampilkan kumpulan artikel teknologi yang dapat dicari, difilter berdasarkan kategori, dan dibaca detailnya.

## Fitur

- Menampilkan 9 artikel teknologi.
- Menampilkan kategori dan deskripsi setiap artikel.
- Mencari artikel berdasarkan judul.
- Memfilter artikel berdasarkan kategori.
- Menampilkan dan menyembunyikan detail artikel.
- Menampilkan pesan ketika artikel tidak ditemukan.
- Tampilan responsif dengan tema warna navy.

## Teknologi yang Digunakan

- **React** — membangun antarmuka menggunakan komponen.
- **TypeScript** — menambahkan tipe data untuk membantu menjaga konsistensi kode.
- **Vite** — menjalankan server pengembangan dan proses build aplikasi.
- **CSS** — mengatur tampilan, tata letak, dan responsivitas halaman.

## Konsep React yang Dipelajari

- JSX untuk menulis struktur antarmuka.
- Components untuk membagi antarmuka menjadi bagian yang dapat digunakan kembali.
- Props untuk mengirimkan data antar-komponen.
- `useState` untuk mengelola state.
- Event handling untuk menangani interaksi pengguna.
- List rendering menggunakan `map()`.
- Conditional rendering untuk menampilkan konten berdasarkan kondisi.
- Pencarian dan filter data menggunakan `filter()`.

## Struktur Proyek

```text
mini-project-react-dashboard/
├── src/
│   ├── components/
│   │   ├── Card.tsx
│   │   └── Button.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Cara Menjalankan Proyek

Pastikan Node.js dan npm sudah terpasang.

1. Buka terminal di folder `mini-project-react-dashboard`.
2. Instal dependensi:

   ```bash
   npm install
   ```

3. Jalankan aplikasi:

   ```bash
   npm run dev
   ```

4. Buka alamat lokal yang ditampilkan di terminal menggunakan browser.

## Pemeriksaan Proyek

Untuk memeriksa kode dan memastikan aplikasi dapat dibangun, jalankan:

```bash
npm run lint
npm run build
```
