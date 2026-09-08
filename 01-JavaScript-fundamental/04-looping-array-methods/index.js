const siswa = [
  {
    nama: "Rafif",
    kelas: "XII RPL 1",
    nilai: 90
  },
  {
    nama: "Reza",
    kelas: "XII RPL 2",
    nilai: 65
  },
  {
    nama: "Rizky",
    kelas: "XII RPL 3",
    nilai: 95
  },
  {
    nama: "Rasya",
    kelas: "XII RPL 2",
    nilai: 70
  },
  {
    nama: "Renata",
    kelas: "XII RPL 1",
    nilai: 85
  },
  {
    nama: "Raina",
    kelas: "XII RPL 3",
    nilai: 80
  },
  {
    nama: "Rafaela",
    kelas: "XII RPL 2",
    nilai: 83
  },
  {
    nama: "Regina",
    kelas: "XII RPL 3",
    nilai: 91
  },
  {
    nama: "Raisa",
    kelas: "XII RPL 1",
    nilai: 69
  }
];

console.log("===Daftar Siswa===");
console.log(siswa);

siswa.forEach((siswa, index) => {
  console.log(
    `${index + 1}. ${siswa.nama} - Nilai: ${siswa.nilai}`
  );
});

const namaSiswa = siswa.map((siswa) => {
  return siswa.nama;
});
console.log("=== NAMA SISWA ===");
console.log(namaSiswa);

const siswaLulus = siswa.filter((siswa) => {
  return siswa.nilai >= 75;
});
console.log("=== SISWA LULUS ===");
console.log(siswaLulus);

const siswaRafif = siswa.find((siswa) => {
  return siswa.nama === "Rafif";
});
console.log("=== DATA RAFIF ===");
console.log(siswaRafif);

const totalNilai = siswa.reduce((total, siswa) => {
  return total + siswa.nilai;
}, 0);

const rataRata = totalNilai / siswa.length;

console.log("=== HASIL NILAI ===");
console.log("Total nilai:", totalNilai);
console.log("Rata-rata:", rataRata);

const siswaTerbaik = [...siswa].sort((a, b) => {
  return b.nilai - a.nilai;
});

console.log("=== RANKING SISWA ===");
console.log(siswaTerbaik);