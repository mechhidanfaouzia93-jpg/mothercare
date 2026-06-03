function BebeArticles() {

  const articles = [
    {
      title: "Le sommeil du bébé",
      content:
        "Les nouveau-nés dorment beaucoup pendant les premiers mois.",
    },

    {
      title: "L’allaitement",
      content:
        "L’allaitement apporte de nombreux bienfaits au bébé.",
    },

    {
      title: "Les premières dents",
      content:
        "Les premières dents apparaissent généralement vers 6 mois.",
    },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl shadow">

      <h2 className="text-xl font-bold mb-4">
        👶 Articles bébé
      </h2>

      <div className="space-y-4">

        {articles.map((article, index) => (
          <div
            key={index}
            className="border-b pb-3"
          >
            <h3 className="font-semibold text-pink-500">
              {article.title}
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              {article.content}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default BebeArticles;