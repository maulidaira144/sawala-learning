const angka1 = 10;
const angka2 = 10;

//function untuk menghitung
function hitung(a, b, operasi) {
 if (operasi === "tambah") {
        return a + b;
    } else if (operasi === "kurang") {
        return a - b;
    } else if (operasi === "kali") {
        return a * b;
    } else if (operasi === "bagi") {
        if (b === 0) {
            return "Tidak bisa dibagi nol";
        }
        return a / b;
        } else {
            return "Operasi tidak tersedia";
        }
    }
console.log("-- Kalkulator --");
console.log("Angka 1: " + angka1);
console.log("Angka 2: " + angka2);

console.log("Penjumlahan: " + hitung(angka1, angka2, "tambah"));
console.log("Pengurangan: " + hitung(angka1, angka2, "kurang"));
console.log("Perkalian: " + hitung(angka1, angka2, "kali"));
console.log("Pembagian: " + hitung(angka1, angka2, "bagi"));