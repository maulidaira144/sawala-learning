import { daftarProduk } from "./data.js";

console.log("-- Daftar Produk --")
console.log(`Jumlah produk: ${daftarProduk.length}`);
console.log(daftarProduk);

function tampilkanProduk (produk, item) {
  console.log(
    `${item + 1}. ${produk.nama} - Harga: Rp. ${produk.harga} - Kategori: ${produk.kategori}`
  );
}

daftarProduk.forEach(tampilkanProduk);

const namaProduk = daftarProduk.map(function(produk) {
return produk.nama;
});
console.log("-- Nama Produk --");
console.log(namaProduk);

const produkMakanan = daftarProduk.filter(function(produk) {
  return produk.kategori === "Makanan";
});
console.log("-- DaftarProduk Makanan --");
console.log(produkMakanan);

const produkMinuman = daftarProduk.filter(function(produk) {
  return produk.kategori === "Minuman";
});
console.log("-- Daftar Produk Minuman --");
console.log(produkMinuman);

const cariProduk = daftarProduk.find(function(produk) {
  return produk.nama === "Bakso";
});
console.log("-- CariProduk --");
console.log(cariProduk);

const totalHarga = daftarProduk.reduce(function(total, produk) {
  return total + produk.harga;
}, 0);
const rataRata = totalHarga / daftarProduk.length;
console.log(`-- Hasil Nilai --`);
console.log("Total Harga: ",totalHarga);
console.log("Rata-rata: ", rataRata.toFixed(2));

const produkBaru = {
  nama: "Pisang Keju",
  harga: 13000,
  kategori: "Makanan"
};

const daftarProdukBaru = [...daftarProduk, produkBaru];

console.log("-- Daftar Produk Baru --");
console.log(`Jumlah Produk: ${daftarProdukBaru.length}`);
daftarProdukBaru.forEach(tampilkanProduk);