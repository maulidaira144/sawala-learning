import { Mahasiswa } from "./type-interface";

const mahasiswa: Mahasiswa = {
  nama: "Rara",
  umur: 20,
  jurusan: "Informatika",
  status: "tidak lulus"
};

console.log(`Nama: ${mahasiswa.nama}`);
console.log(`Umur: ${mahasiswa.umur}`);
console.log(`Jurusan: ${mahasiswa.jurusan}`);
console.log(`Status: ${mahasiswa.status}`);