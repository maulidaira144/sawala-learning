import { siswa } from"./data.js";

//looping array methods
console.log("-- Data Siswa --");
console.log(siswa);

siswa.forEach(function (item) {
    const {nama, kelas, nilai } = item;

    let status;
    if (nilai >= 70) {
        status = "Lulus";
    } else {
        status = "Tidak Lulus";
    }
    console.log(` 
Nama: ${nama}    
Kelas: ${kelas}
Nilai: ${nilai}
Status: ${status}
`);
});

const namaSiswa = siswa.map(function(item) {
    return item.nama;
});
console.log("-- Nama Siswa --");
console.log(namaSiswa);

const siswaLulus = siswa.filter(function(item){
    return item.nilai >= 70;
});
console.log("-- Siswa Lulus --");
console.log(siswaLulus);

const siswaTidakLulus = siswa.filter(function(item){
    return item.nilai < 70;
});
console.log("-- Siswa Tidak Lulus --");
console.log(siswaTidakLulus);

const siswaRara = siswa.find(function(item){
    return item.nama === "Rara";
});
console.log("-- Cari Siswa Bernama Rara --");
console.log(siswaRara);

const totalNilai = siswa.reduce(function(total, item){
    return total + item.nilai;
}, 0);
console.log("-- Nilai --");
console.log(`Total Nilai: ${totalNilai}`);

const rataRata = totalNilai / siswa.length;
console.log(`Jumlah Siswa: ${siswa.length}`);
console.log(`Rata-rata nilai: ${rataRata.toFixed(2)}`);


