const namaSiswa = "apip";
const nilaiSiswa = 80;

let status;
if (nilaiSiswa >= 75) {
    status = "Lulus";
} else {
    status = "Tidak Lulus";
}

function tentukanGrade(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else if (nilai >= 60) {
        return "D";
    } else {
        return "E";
    }
}

const grade = tentukanGrade(nilaiSiswa);

console.log(`Nama Siswa: ${namaSiswa}`);
console.log(`Nilai Siswa: ${nilaiSiswa}`);
console.log(`Status Kelulusan: ${status}`);
console.log(`Grade: ${grade}`);
