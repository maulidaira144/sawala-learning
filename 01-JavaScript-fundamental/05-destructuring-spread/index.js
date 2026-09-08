const siswa = {
  nama: "Rara",
  kelas: "12 RPL",
  jurusan: "Rekayasa Perangkat Lunak",
  nilai: 90
};

//object destructuring
const { nama, kelas, jurusan, nilai } = siswa;
console.log(`Nama: ${nama}`);
console.log(`Kelas: ${kelas}`);
console.log(`Jurusan: ${jurusan}`);
console.log(`Nilai: ${nilai}`);

//array destructuring
const hobi = ["Menyanyi", "Main Game", "Membaca"];
const [hobi1, hobi2, hobi3] = hobi;
console.log(`Hobi 1: ${hobi1}`);
console.log(`Hobi 2: ${hobi2}`);
console.log(`Hobi 3: ${hobi3}`);

//spread object
const dataTambahan = {
  status: "Lulus",
};

const siswaLengkap = {
  ...siswa,
  ...dataTambahan,
  nilai:98
};
console.log(siswaLengkap);


//spread array
const hobiSiswa = ["Menyanyi", "Main Game", "Membaca"];
const hobiTambahan = [... hobiSiswa,"Olahraga", "Memasak"];

console.log("Hobi:", hobiTambahan);
