
# Ruang Belajar Teknologi — Backend

## Deskripsi

Backend Ruang Belajar Teknologi menggunakan Strapi v5 sebagai Headless CMS untuk mengelola konten artikel. Data artikel disediakan melalui REST API agar dapat diambil dan ditampilkan oleh frontend Next.js.

Database yang digunakan adalah MySQL, dengan XAMPP sebagai lingkungan database lokal apabila dikonfigurasi demikian.

## Teknologi yang Digunakan

- Strapi v5
- Node.js dan npm
- MySQL
- REST API

## Fitur

- Mengelola artikel melalui panel admin Strapi.
- Menyimpan dan mengelola data artikel.
- Mengelola gambar sampul artikel.
- Menyediakan endpoint REST API untuk frontend.
- Menghubungkan konten Strapi dengan aplikasi Next.js.

## Persyaratan

Sebelum menjalankan backend, pastikan sudah tersedia:

- Node.js dan npm.
- MySQL atau XAMPP.
- Konfigurasi database Strapi yang sesuai.

## Instalasi dan Menjalankan Backend

### 1. Instal Dependensi

Buka terminal pada folder `backend-strapi`, lalu jalankan:

```bash
npm install
```

### 2. Konfigurasi Database

Jalankan MySQL melalui XAMPP jika digunakan.

Pastikan konfigurasi koneksi database pada proyek Strapi sudah sesuai dengan database lokal yang digunakan.

### 3. Jalankan Server Strapi

Jalankan perintah berikut:

```bash
npm run develop
```

Setelah server berhasil berjalan, buka panel admin Strapi:

http://localhost:1337/admin

Masuk menggunakan akun administrator Strapi yang sudah dibuat.

## Pengelolaan Artikel

Artikel dikelola melalui panel admin Strapi.

1. Buka menu pengelolaan konten artikel.
2. Tambahkan atau edit artikel sesuai field yang tersedia.
3. Tambahkan gambar sampul jika diperlukan.
4. Simpan dan publikasikan artikel agar dapat diakses oleh frontend.

## REST API

Endpoint yang digunakan untuk mengambil artikel beserta gambar sampul:

```text
http://localhost:1337/api/articles?populate=cover
```

Frontend menggunakan endpoint tersebut untuk mendapatkan data artikel dari Strapi.

Pastikan artikel sudah dipublikasikan dan izin akses endpoint telah diatur melalui pengaturan Roles dan Permissions Strapi.

## Integrasi dengan Frontend

Frontend Next.js menggunakan variabel environment berikut pada file `.env.local`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

Variabel tersebut menentukan alamat backend Strapi yang digunakan untuk mengambil data artikel.

Pastikan backend Strapi dan frontend Next.js berjalan bersamaan saat menguji aplikasi secara lokal.

## Penanganan Masalah

### Strapi Tidak Dapat Dijalankan

- Periksa dependensi dan pesan error pada terminal.
- Pastikan konfigurasi environment sudah tersedia.

### Database Gagal Terhubung

- Pastikan MySQL sedang berjalan.
- Periksa konfigurasi database Strapi.
- Pastikan nama database dan kredensial sudah sesuai.

### Artikel Tidak Muncul

- Pastikan artikel sudah dipublikasikan.
- Periksa izin akses REST API.
- Pastikan endpoint API sudah benar.

### Gambar Sampul Tidak Muncul

- Pastikan artikel memiliki gambar sampul.
- Periksa relasi `cover` pada respons API.
- Pastikan URL backend Strapi pada frontend sudah benar.

---

Backend ini merupakan bagian dari proyek Ruang Belajar Teknologi yang terintegrasi dengan frontend Next.js melalui REST API.
