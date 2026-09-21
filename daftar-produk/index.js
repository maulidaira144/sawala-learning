import { daftarProduk } from "./data.js";

// ambil elemen html //
const daftarProdukContainer = document.getElementById("daftarProduk");

// ambil tombol //
const tombolSemuaProduk = document.getElementById("semua");
const tombolMakanan = document.getElementById("makanan");
const tombolMinuman = document.getElementById("minuman");

// ambil elemen statistik //
const jumlahProduk = document.getElementById("jumlahProduk");
const totalHargaElement = document.getElementById("totalHarga");
const rataRataHarga = document.getElementById("rataRataHarga");

function tampilkanStatistik(data) {
    jumlahProduk.innerHTML = `<hr><h3>Jumlah Produk: ${data.length}</h3>`;
    // total harga
    const totalHarga = data.reduce(function (total, item) {
    return total + item.harga;
}, 0);
    totalHargaElement.innerHTML = `<h3>Total Harga: Rp ${totalHarga}</h3>`;
    
    // rata-rata harga
    const rataRata = totalHarga / data.length;
    rataRataHarga.innerHTML = `<h3>Rata-rata Harga: Rp ${rataRata.toFixed(2)}</h3>`;
}
function tampilkanProduk(data) {
    daftarProdukContainer.innerHTML = "";
    data.forEach(function (item) {
        const card = document.createElement("div");
        card.className = "produk";
        card.innerHTML = `<h3>Nama: ${item.nama}</h3><p>Harga: Rp ${item.harga}</p><p>Kategori: ${item.kategori}</p>`;
        daftarProdukContainer.appendChild(card);
    });
    tampilkanStatistik(data);
}

tampilkanProduk(daftarProduk);

// tombol //
tombolSemuaProduk.addEventListener("click", function () {
    tampilkanProduk(daftarProduk);
});

tombolMakanan.addEventListener("click", function () {
    const produkMakanan = daftarProduk.filter(function (item) {
        return item.kategori === "Makanan";
    }); 
    tampilkanProduk(produkMakanan);
});

tombolMinuman.addEventListener("click", function () {
    const produkMinuman = daftarProduk.filter(function (item) {
        return item.kategori === "Minuman";
    });
    tampilkanProduk(produkMinuman);
});


const namaProduk = daftarProduk.map(function (item) {
    return item.nama;
});
console.log(namaProduk);

const produkMakanan = daftarProduk.filter(function (item) {
    return item.kategori === "Makanan";
});
console.log(produkMakanan);

const produkMinuman = daftarProduk.filter(function (item) {
    return item.kategori === "Minuman";
});
console.log(produkMinuman);

const cariProduk = daftarProduk.find(function (item) {
    return item.nama === "Bakso";
});
console.log(cariProduk);
