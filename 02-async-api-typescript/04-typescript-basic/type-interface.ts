type Status = "lulus" | "tidak lulus";

interface Mahasiswa {
  nama: string;
  umur: number;
  jurusan: string;
  status: Status;
}

export { Mahasiswa, Status };

//TypeScript adalah JavaScript yang ditambahkan sistem tipe (type)
//bedanya JS lebih fleksibel dalam penulisan kode, TS lebih ketat dalam penulisan kode jadi bisa mengetahui error sebelum dijalankan