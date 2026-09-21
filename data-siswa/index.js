import { siswa } from "./data.js";

const daftarSiswa = document.getElementById("daftarSiswa");

const tombolSemua = document.getElementById("semua");
const tombolLulus = document.getElementById("lulus");
const tombolTidakLulus = document.getElementById("tidakLulus");

const jumlahSiswa = document.getElementById("jumlahSiswa");
const rataRataNilai = document.getElementById("rataRataNilai");

function tampilkanSiswa(data) {
    daftarSiswa.innerHTML = "";
    data.forEach(function (item) {
        const card = document.createElement("div");
        card.className = "siswa";
        card.innerHTML = `<h3>Nama: ${item.nama}</h3><p>Kelas: ${item.kelas}</p><p>Nilai: ${item.nilai}</p>`;
        daftarSiswa.appendChild(card);
    });
    jumlahSiswa.textContent = `Jumlah Siswa: ${data.length}`;

    const totalNilai = data.reduce(function (total, item) {
    return total + item.nilai;
}, 0);

const rataRata = totalNilai / data.length;
rataRataNilai.textContent = `Rata-rata Nilai: ${rataRata.toFixed(2)}`;

}

tampilkanSiswa(siswa);

// tombol //
tombolSemua.addEventListener("click", function () {
    tampilkanSiswa(siswa);
    });

tombolLulus.addEventListener("click", function () {
    const siswaLulus = siswa.filter(function (item) {
    return item.nilai >= 70;
    });
    tampilkanSiswa(siswaLulus);
    });

tombolTidakLulus.addEventListener("click", function () {
    const siswaTidakLulus = siswa.filter(function (item) {
    return item.nilai < 70;
    });
    tampilkanSiswa(siswaTidakLulus);
    });




// array methods //
const namaSiswa = siswa.map(function (item) {
    return item.nama;
});
console.log(namaSiswa);

const siswaLulus = siswa.filter(function (item) {
    return item.nilai >= 70;
});
console.log(siswaLulus);

const siswaTidakLulus = siswa.filter(function (item) {
    return item.nilai < 70;
});
console.log(siswaTidakLulus);

const cariSiswa = siswa.find(function (item) {
    return item.nama === "Budi";
});
console.log(cariSiswa);

const siswaNilaiTertinggi = siswa.find(function (item) {
    return item.nilai === 95;
});
console.log(siswaNilaiTertinggi);



