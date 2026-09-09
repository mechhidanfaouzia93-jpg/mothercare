import { useEffect, useState } from "react";
import api from "../../../services/api";

function MamanArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = 3;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await api.get("/articles");

        console.log("ARTICLES:", res.data);

        // Selon la structure de ton backend
        setArticles(res.data.data || res.data);
      } catch (err) {
        console.error("Erreur articles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-500 py-6">
        Chargement des articles...
      </p>
    );
  }

  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;

  const currentArticles = articles.slice(
    indexOfFirst,
    indexOfLast
  );

  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4">
        📰 Articles pour maman
      </h2>

      {/* LISTE ARTICLES */}
      <div className="space-y-4">
        {currentArticles.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            Aucun article disponible.
          </p>
        ) : (
          currentArticles.map((article) => (
            <div
              key={article._id}
              onClick={() => setSelectedArticle(article)}
              className="border-b pb-4 cursor-pointer hover:bg-pink-50 rounded-lg p-2 transition"
            >
              <h3 className="font-semibold text-pink-500">
                {article.title}
              </h3>

              <p className="text-sm text-gray-500">
                {article.excerpt}
              </p>
            </div>
          ))
        )}
      </div>

      {/* ARTICLE SÉLECTIONNÉ */}
      {selectedArticle && (
        <div className="mt-6 p-4 bg-pink-50 rounded-lg shadow">

          {selectedArticle.image && (
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
          )}

          <h2 className="text-2xl font-bold text-pink-500">
            {selectedArticle.title}
          </h2>

          <p className="text-gray-500 mt-2">
            {selectedArticle.excerpt}
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            {selectedArticle.content}
          </p>

          <div className="text-xs text-gray-400 mt-4 flex justify-between">
            <span>{selectedArticle.category}</span>
            <span>{selectedArticle.author}</span>
          </div>

          <button
            onClick={() => setSelectedArticle(null)}
            className="mt-4 text-red-500 text-sm"
          >
            Fermer
          </button>
        </div>
      )}

      {/* PAGINATION */}
      {articles.length > 0 && (
        <div className="flex justify-between mt-6">

          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((prev) => prev - 1)
            }
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            ← Précédent
          </button>

          <span className="text-sm text-gray-500">
            Page {currentPage}
          </span>

          <button
            disabled={indexOfLast >= articles.length}
            onClick={() =>
              setCurrentPage((prev) => prev + 1)
            }
            className="px-4 py-2 bg-pink-500 text-white rounded disabled:opacity-50"
          >
            Suivant →
          </button>

        </div>
      )}
    </div>
  );
}

export default MamanArticles;