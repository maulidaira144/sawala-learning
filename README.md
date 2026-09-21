# Sawala Learning

Repositori ini memuat dokumentasi lengkap proses pembelajaran, latihan logika, implementasi antarmuka berbasis web, serta proyek mini yang dikembangkan dalam program Sawala Learning. Cakupan materi berfokus pada penguasaan JavaScript modern (ES6+), pemrograman asinkron, konsumsi REST API, manipulasi Document Object Model (DOM), hingga penerapan TypeScript dasar.

---

## Daftar Isi

1. [Ringkasan Materi dan Implementasi](#ringkasan-materi-dan-implementasi)
   - [Milestone 1: JavaScript Fundamental](#milestone-1-javascript-fundamental)
   - [Milestone 2: Asynchronous JavaScript, REST API, dan TypeScript](#milestone-2-asynchronous-javascript-rest-api-dan-typescript)
   - [Proyek Antarmuka Web dan DOM](#proyek-antarmuka-web-dan-dom)
2. [Struktur Direktori Repositori](#struktur-direktori-repositori)
3. [Prasyarat Sistem](#prasyarat-sistem)
4. [Panduan Menjalankan Proyek](#panduan-menjalankan-proyek)

---

## Ringkasan Materi dan Implementasi

### Milestone 1: JavaScript Fundamental

Bagian ini mencakup fondasi utama bahasa pemrograman JavaScript serta sintaks modern ES6+:

- **01-variabel-tipe-data**: Mempelajari deklarasi variabel (`let`, `const`, `var`), tipe data primitif (string, number, boolean, null, undefined), objek, dan pengecekan tipe menggunakan operator `typeof`.
- **02-kondisi-function**: Implementasi percabangan logika (`if`, `else if`, `else`, `switch`), ternary operator, serta variasi penulisan fungsi (function declaration, function expression, dan arrow function).
- **03-object-array**: Pengelolaan struktur data Object (properti, method, objek bertingkat) dan Array (indeks, modifikasi elemen, array of objects).
- **04-looping-array-methods**: Penerapan perulangan (`for`, `while`, `for..of`) dan pemanfaatan fungsi bawaan array seperti `forEach`, `map`, `filter`, `reduce`, dan `find`.
- **05-destructuring-spread**: Penggunaan teknik destructuring assignment pada object dan array, penerapan rest parameter, serta spread operator (`...`) untuk manipulasi dan penggabungan data.
- **06-es-modules**: Modularisasi kode menggunakan sistem ES Modules (`import` dan `export`) untuk memisahkan logika matematika ke dalam file modular tersendiri.
- **Latihan Logika dan Proyek Mini Konsol**:
  - `mini-exercise-kalkulator-sederhana`: Fungsi aritmatika dasar (penjumlahan, pengurangan, perkalian, pembagian) disertai validasi penanganan pembagian dengan angka nol.
  - `mini-exercise-pengolahan-data-siswa`: Pengolahan dataset array siswa meliputi filter kelulusan berdasarkan nilai ambang batas, pencarian data tertentu, serta agregasi total dan rata-rata nilai menggunakan `reduce`.
  - `mini-project-produk-list`: Pengelolaan katalog produk berupa klasifikasi kategori (makanan/minuman), kalkulasi total nilai inventaris, rata-rata harga, dan penambahan produk baru secara *immutable* menggunakan spread operator.

---

### Milestone 2: Asynchronous JavaScript, REST API, dan TypeScript

Bagian ini mendalami konsep pemrosesan non-blocking, komunikasi jaringan, penanganan kesalahan, dan pengetikan statis:

- **01-promise-async-await**: Pemahaman alur eksekusi asinkron, pembuatan objek `Promise` dengan status *resolve* dan *reject*, perbandingan antara promise chaining (`.then()`, `.catch()`, `.finally()`) dan sintaks modern `async/await` pada simulasi alur pemesanan makanan.
- **02-fetch-api**: Penerapan komunikasi data HTTP menggunakan antarmuka `fetch()` untuk seluruh metode HTTP standar (GET, POST, PUT, PATCH, DELETE) ke endpoint publik JSONPlaceholder.
- **03-error-handling**: Implementasi mitigasi dan penanganan kesalahan runtime serta jaringan melalui blok `try...catch...finally`, validasi status respon HTTP (`response.ok`), dan pelemparan galat kustom (`throw new Error`).
- **04-typescript-basic**: Penerapan pengetikan statis menggunakan TypeScript, pendefinisian struktur data dengan `Interface` dan `Type Alias`, serta type checking pada atribut data entitas.
- **mini-project-consume-api**: Proyek integrasi REST API secara penuh menggunakan TypeScript dengan kontrak tipe data terdefinisi (`interface user`), pemrosesan respon secara asinkron, penanganan galat, serta penyajian data ke terminal secara terstruktur.

---

### Proyek Antarmuka Web dan DOM

Selain implementasi berbasis konsol/terminal, repositori ini juga memuat implementasi antarmuka interaktif pada browser menggunakan HTML, CSS, dan DOM Manipulation:

- **kalkulator-sederhana**: Aplikasi kalkulator interaktif berbasis antarmuka web yang membaca input form dan mengeksekusi operasi matematika melalui *event listener*.
- **data-siswa**: Dashboard visual data siswa yang menampilkan kartu data secara dinamis, dilengkapi fitur tombol filter status kelulusan (Semua, Lulus, Tidak Lulus) dan pembaruan statistik secara langsung.
- **daftar-produk**: Antarmuka katalog produk berbasis web yang menyajikan daftar item dinamis, filter kategori interaktif (Semua, Makanan, Minuman), serta ringkasan total dan rata-rata harga produk secara *real-time*.
- **contoh & contoh-promise**: Berkas eksplorasi alur logika Promise bertingkat (*chaining*) dan penanganan status asinkron.

---

## Struktur Direktori Repositori

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
├── kalkulator-sederhana/
│   ├── index.html
│   └── script.js
│
├── data-siswa/
│   ├── data.js
│   ├── index.html
│   └── index.js
│
├── daftar-produk/
│   ├── data.js
│   ├── index.html
│   └── index.js
│
├── contoh/
│   └── index.js
│
├── contoh-promise/
│   └── index.js
│
├── .gitignore
├── package.json
└── README.md
```

---

## Prasyarat Sistem

Untuk menjalankan seluruh berkas di repositori ini, pastikan sistem telah terpasang:

- **Node.js** (versi 18.0.0 atau lebih baru)
- **NPM** (Node Package Manager, terpasang bersama Node.js)
- Peramban web modern (Google Chrome, Mozilla Firefox, Microsoft Edge, atau sejenisnya)
- Eksekutor TypeScript (seperti `tsx` atau `ts-node`) untuk menjalankan file `.ts`

---

## Panduan Menjalankan Proyek

### 1. Kloning Repositori

```bash
git clone https://github.com/maulidaira144/sawala-learning.git
cd sawala-learning
```

### 2. Menjalankan Modul JavaScript (Node.js)

Seluruh berkas JavaScript dalam repositori ini dikonfigurasi menggunakan modul ES (`"type": "module"` pada `package.json`). Anda dapat mengeksekusi berkas JavaScript secara langsung melalui terminal:

```bash
# Contoh menjalankan materi JavaScript Fundamental
node 01-JavaScript-fundamental/01-variabel-tipe-data/index.js
node 01-JavaScript-fundamental/06-es-modules/index.js

# Contoh menjalankan Mini Exercise dan Mini Project Fundamental
node 01-JavaScript-fundamental/mini-exercise-kalkulator-sederhana/index.js
node 01-JavaScript-fundamental/mini-exercise-pengolahan-data-siswa/index.js
node 01-JavaScript-fundamental/mini-project-produk-list/index.js

# Contoh menjalankan materi Asynchronous & Fetch API
node 02-async-api-typescript/01-promise-async-await/index.js
node 02-async-api-typescript/02-fetch-api/index.js
node 02-async-api-typescript/03-error-handling/index.js
```

### 3. Menjalankan Modul TypeScript

Untuk menjalankan berkas berekstensi `.ts` tanpa perlu proses kompilasi manual ke JavaScript terlebih dahulu, gunakan `npx tsx`:

```bash
# Menjalankan latihan dasar TypeScript
npx tsx 02-async-api-typescript/04-typescript-basic/index.ts

# Menjalankan Mini Project Konsumsi REST API
npx tsx 02-async-api-typescript/mini-project-consume-api/index.ts
```

### 4. Menjalankan Proyek Antarmuka Web (DOM)

Untuk proyek yang memuat antarmuka pengguna web:
1. Buka berkas `index.html` yang berada di dalam folder masing-masing (`kalkulator-sederhana/`, `data-siswa/`, atau `daftar-produk/`) langsung menggunakan peramban web.
2. Sebagai alternatif yang disarankan (terutama untuk modul yang memuat ES Modules pada antarmuka web), jalankan ekstensi **Live Server** pada VS Code / IDE atau gunakan modul server lokal seperti `npx serve .`.