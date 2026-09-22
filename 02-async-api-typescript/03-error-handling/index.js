const url = "https://jsonplaceholder.typicode.com/post";

async function ambilData(){

    try {
        console.log("Mengambil data...");
        const response = await fetch(url);

        if (!response.ok) {
         throw new Error(`Request gagal: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data berhasil diambil!");
        console.log(data[0]);

    } catch (error) {
      console.log("Terjadi error!");

      if (error instanceof Error) {
         console.log(error.message);
      }
   }
}

ambilData();