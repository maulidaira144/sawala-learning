
import { useState } from "react";
import Card from "./components/Card";


const articles = [
  {
    id: 1,
    category: "Programming",
    title: "Mengenal React",
    description:
      "Pelajari dasar React untuk membangun antarmuka web yang interaktif.",
  },
  {
    id: 2,
    category: "Web Development",
    title: "Belajar TypeScript",
    description:
      "Kenali TypeScript untuk membantu menulis kode JavaScript yang lebih terstruktur.",
  },
  {
    id: 3,
    category: "Technology",
    title: "Apa Itu Next.js?",
    description:
      "Pelajari framework React untuk membangun aplikasi web.",
  },
  {
    id: 4,
    category: "Programming",
    title: "Memahami JavaScript",
    description:
      "Pelajari dasar JavaScript untuk membuat website lebih dinamis dan interaktif.",
  },
  {
    id: 5,
    category: "Web Development",
    title: "Mengenal HTML dan CSS",
    description:
      "Kenali HTML untuk menyusun halaman web dan CSS untuk mengatur tampilannya.",
  },
  {
    id: 6,
    category: "Technology",
    title: "Perkembangan Teknologi AI",
    description:
      "Cari tahu bagaimana kecerdasan buatan membantu berbagai aktivitas manusia.",
  },
  {
    id: 7,
    category: "Programming",
    title: "Belajar Node.js",
    description:
      "Kenali Node.js untuk menjalankan JavaScript di luar browser.",
  },
  {
    id: 8,
    category: "Web Development",
    title: "Responsive Web Design",
    description:
      "Pelajari cara membuat tampilan website yang menyesuaikan berbagai ukuran layar.",
  },
  {
    id: 9,
    category: "Technology",
    title: "Mengenal Cloud Computing",
    description:
      "Pahami cara kerja komputasi awan untuk menyimpan data dan menjalankan aplikasi.",
  },
];

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
 
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "Semua" || article.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main>
      <h1>Dashboard Artikel</h1>
      <p>Temukan artikel terbaru seputar teknologi.</p>

      <input
        type="text"
        placeholder="Cari artikel berdasarkan judul..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="Semua">Semua Kategori</option>
        <option value="Programming">Programming</option>
        <option value="Web Development">Web Development</option>
        <option value="Technology">Technology</option>
      </select>

    <p>Jumlah artikel ditemukan: {filteredArticles.length}</p>
      <section>
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <Card
              key={article.id}
              category={article.category}
              title={article.title}
              description={article.description}
            />
          ))
        ) : (
          <p>Artikel tidak ditemukan.</p>
        )}
      </section>
    </main>
  );
};

export default App;
