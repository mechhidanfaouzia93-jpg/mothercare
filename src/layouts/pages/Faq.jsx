function Faq() {

  const faqs = [
    {
      question: "Comment suivre ma grossesse ?",
      answer:
        "Ajoutez votre date de début de grossesse lors de l'inscription.",
    },

    {
      question: "Comment voir l’évolution du bébé ?",
      answer:
        "La page bébé affiche les estimations selon votre semaine actuelle.",
    },

    {
      question: "Mes données sont-elles sécurisées ?",
      answer:
        "Oui, toutes les données sont stockées de manière sécurisée.",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-8">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-pink-500 mb-8">
          ❓ FAQ
        </h1>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow"
            >
              <h2 className="font-bold text-lg mb-2">
                {faq.question}
              </h2>

              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Faq;