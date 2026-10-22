require("dotenv").config(); // untuk membaca isi .env
const express = require("express"); //Mengambil package Express yang sudah kita install.
const articlesRouter = require("./routes/articles.route"); //Mengambil router artikel dari file
const logger = require("./middlewares/logger.middleware"); //Mengambil middleware logger

const app = express(); //membuat aplikasi Express

app.use(express.json()); //supaya Express bisa membaca JSON dari request body.
app.use(logger); //setiap request akan melewati logger

app.use("/articles", articlesRouter); 

app.listen(process.env.PORT, () => {
  console.log(`Server berjalan di http://localhost:${process.env.PORT}`);
}); //Menjalankan server