const angka1 = document.getElementById("angka1");
const angka2 = document.getElementById("angka2");
const hasil = document.getElementById("hasil");

const tambah = document.getElementById("tambah");
const kurang = document.getElementById("kurang");
const kali = document.getElementById("kali");
const bagi = document.getElementById("bagi");

function hitung(operasi) {
    const nilai1 = Number(angka1.value);
    const nilai2 = Number(angka2.value);

    if (operasi === "+") {
        return nilai1 + nilai2;
    } else if (operasi === "-") {
        return nilai1 - nilai2;
    } else if (operasi === "*") {
        return nilai1 * nilai2;
    } else if (operasi === "/") {
        if (nilai2 === 0) {
            return "Tidak bisa dibagi nol";
        }
        return nilai1 / nilai2;
        }
    }

    tambah.addEventListener("click", function () {
        hasil.textContent = hitung ("+");
    });
    kurang.addEventListener("click", function () {
        hasil.textContent = hitung ("-");
    });
    kali.addEventListener("click", function () {
        hasil.textContent = hitung ("*");
    });
    bagi.addEventListener("click", function () {
        hasil.textContent = hitung ("/");
    });