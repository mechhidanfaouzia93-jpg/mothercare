import { useState } from "react";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const faqs = [
    {
      category: "🌸 Général",
      question: "Comment suivre ma grossesse ?",
      answer:
        "Ajoutez les informations demandées lors de la configuration de votre profil. MotherCare pourra ensuite afficher votre suivi de grossesse semaine après semaine.",
    },
    {
      category: "👶 Bébé",
      question: "Comment voir l'évolution de mon bébé ?",
      answer:
        "La section dédiée au bébé vous permet de découvrir son développement selon votre semaine de grossesse actuelle.",
    },
    {
      category: "📅 Suivi",
      question: "Comment connaître ma semaine de grossesse ?",
      answer:
        "MotherCare utilise les informations de votre grossesse pour estimer votre semaine actuelle et vous proposer les contenus correspondants.",
    },
    {
      category: "🤰 Maman",
      question: "Pourquoi mon corps change-t-il pendant la grossesse ?",
      answer:
        "La grossesse entraîne de nombreux changements physiques et hormonaux. MotherCare vous aide à comprendre les changements que vous pouvez ressentir semaine après semaine.",
    },
    {
      category: "🩺 Santé",
      question: "Les informations de MotherCare remplacent-elles un médecin ?",
      answer:
        "Non. MotherCare est une application d'information et d'accompagnement. Elle ne remplace jamais les conseils, le diagnostic ou le suivi d'un médecin ou d'une sage-femme.",
    },
    {
      category: "🔒 Confidentialité",
      question: "Mes données sont-elles sécurisées ?",
      answer:
        "MotherCare doit protéger vos informations personnelles conformément à sa politique de confidentialité et aux mesures de sécurité mises en place par l'application.",
    },
    {
      category: "📱 Utilisation",
      question: "Puis-je utiliser MotherCare pendant toute ma grossesse ?",
      answer:
        "Oui. MotherCare est conçu pour vous accompagner tout au long de votre grossesse, avec des informations adaptées à chaque étape.",
    },
    {
      category: "💡 Conseils",
      question: "Que faire si j'ai une question ou une inquiétude concernant ma grossesse ?",
      answer:
        "En cas de douleur, de symptôme inhabituel ou d'inquiétude concernant votre santé ou celle de votre bébé, contactez un médecin, une sage-femme ou un professionnel de santé.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase()) ||
      faq.category.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">

        
        <div className="mb-10 text-center">
          <div className="mb-4 text-5xl">❓</div>

          <h1 className="text-4xl font-bold text-pink-500">
            Questions fréquentes
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Retrouvez les réponses aux questions les plus fréquentes
            concernant MotherCare et le suivi de votre grossesse.
          </p>
        </div>

        
        <div className="mb-8">
          <div className="rounded-2xl bg-white p-2 shadow-md">
            <input
              type="text"
              placeholder="🔍 Rechercher une question..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl px-5 py-3 outline-none"
            />
          </div>
        </div>

      
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <div>
                    <span className="text-sm font-medium text-pink-400">
                      {faq.category}
                    </span>

                    <h2 className="mt-1 text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h2>
                  </div>

                  <span className="ml-4 text-2xl font-light text-pink-500">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="border-t border-pink-100 px-6 py-5">
                    <p className="leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="rounded-2xl bg-white p-8 text-center shadow">
              <p className="text-gray-600">
                😔 Aucune question ne correspond à votre recherche.
              </p>
            </div>
          )}
        </div>

      
        <div className="mt-10 rounded-3xl border border-pink-100 bg-pink-50 p-7">
          <h2 className="mb-3 text-xl font-bold text-pink-600">
            🩺 Information importante
          </h2>

          <p className="leading-7 text-gray-700">
            MotherCare est conçu pour informer et accompagner les futures
            mamans. Les informations présentes dans l'application ne remplacent
            pas un avis médical professionnel.
          </p>

          <p className="mt-3 leading-7 text-gray-700">
            Si vous ressentez une douleur importante, un symptôme inhabituel
            ou si vous êtes inquiète pour votre grossesse, contactez rapidement
            votre médecin ou votre sage-femme.
          </p>
        </div>

        
        {/* <div className="mt-8 rounded-3xl bg-white p-8 text-center shadow-md">
          <div className="text-4xl">💌</div>

          <h2 className="mt-3 text-2xl font-bold text-gray-800">
            Vous n'avez pas trouvé votre réponse ?
          </h2>

          <p className="mt-3 text-gray-600">
            Notre équipe est là pour vous aider et répondre à vos questions
            concernant l'utilisation de MotherCare.
          </p>

          {/* <button className="mt-6 rounded-full bg-pink-500 px-6 py-3 font-medium text-white transition hover:bg-pink-600">
            Nous contacter
          </button> */}
        {/* </div> } */}

        
        <div className="mt-10 text-center">
          <p className="text-pink-500">
            🌸 MotherCare — À vos côtés à chaque étape de votre grossesse ❤️
          </p>
        </div>

      </div>
    </div>
  );
}

export default Faq;