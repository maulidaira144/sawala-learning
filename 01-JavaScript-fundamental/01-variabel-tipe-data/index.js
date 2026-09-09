// const = nilai yang tidak bisa diubah
const nama = "Ira Maulida";
const umur = 17;
const cantik = true;

// let = nilai yang bisa diubah
let nilai = 85;
nilai = 90;

let sisaUangJajan = 10000;
sisaUangJajan = sisaUangJajan - 5000;


let hargaPermen = 1000;
let hargaBiskuit = 2000;
let totalHarga = hargaPermen + hargaBiskuit;

//menampilkan nilai ke console
console.log(`
Nama: ${nama}
Umur: ${umur}
Cantik: ${cantik}
Nilai: ${nilai}
Sisa Uang Jajan: ${sisaUangJajan}
Total Harga:: ${totalHarga}`);


//mengecek tipe data
console.log("Tipe Nama: ", typeof nama);
console.log("Tipe Umur: ", typeof umur);
console.log("Tipe Cantik: ", typeof cantik);
console.log("Tipe Nilai: ", typeof nilai);
console.log("Tipe sisaUangJajan: ", typeof sisaUangJajan);
console.log("Tipe hargaPermen: ", typeof hargaPermen);
console.log("Tipe hargaBiskuit: ", typeof hargaBiskuit);
console.log("Tipe totalHarga: ", typeof totalHarga);
