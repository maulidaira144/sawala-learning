const articles = [
  {
    id: 1,
    title: "Belajar Node.js",
  },
  {
    id: 2,
    title: "Belajar Express.js",
  },
]; //data memory bukan database

const getArticles = (req, res) => {
  res.json(articles);
};

const createArticle = (req, res) => {
  const newArticle = {
    id: articles.length + 1,
    title: req.body.title,
  };

  articles.push(newArticle);

  res.status(201).json(newArticle);
};

const updateArticle = (req, res) => {
  const id = Number(req.params.id);

  const article = articles.find((article) => article.id === id); //mencari data

  if (!article) {
    return res.status(404).json({
      message: "Artikel tidak ditemukan",
    });
  }

  article.title = req.body.title; //mengambil nilai dari property title.

  res.json(article);
};

const deleteArticle = (req, res) => {
  const id = Number(req.params.id);

  const articleIndex = articles.findIndex( //mencari posisi index data
    (article) => article.id === id
  );

  if (articleIndex === -1) {
    return res.status(404).json({
      message: "Artikel tidak ditemukan",
    });
  }

  articles.splice(articleIndex, 1); //untuk menghapus data dari array.

  res.json({
    message: "Artikel berhasil dihapus",
  });
};
module.exports = {
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
};