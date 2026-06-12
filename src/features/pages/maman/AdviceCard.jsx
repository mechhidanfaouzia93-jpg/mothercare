import { useState } from "react";
import data from "/src/data/advices.json";

function Conseils() {
  const [week, setWeek] = useState(data[0]?.week || 1);

  const current = data.find((d) => d.week === week);

  if (!current) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Aucun conseil trouvé.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-6">
      {/* HEADER */}
      <h1 className="text-3xl font-bold text-center text-pink-500 mb-8">
        💡 Conseils de grossesse
      </h1>

      {/* NAVIGATION SEMAINES */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {data.map((item) => (
          <button
            key={item.week}
            onClick={() => setWeek(item.week)}
            className={`px-4 py-2 rounded-full transition ${
              week === item.week
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-700 shadow hover:bg-pink-100"
            }`}
          >
            S{item.week}
          </button>
        ))}
      </div>

      {/* CARTE PRINCIPALE */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-pink-500 mb-6">
          {current.title}
        </h2>

        {/* CHANGEMENTS MAMAN */}
        <section className="mb-6">
          <h3 className="font-bold text-lg mb-2">
            🤰 Changements chez la maman
          </h3>

          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            {current.momChanges?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* DÉVELOPPEMENT BÉBÉ */}
        <section className="mb-6">
          <h3 className="font-bold text-lg mb-2">
            👶 Développement du bébé
          </h3>

          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            {current.babyDevelopment?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* CONSEILS */}
        <section className="mb-6">
          <h3 className="font-bold text-lg mb-2">
            💡 Conseils
          </h3>

          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            {current.tips?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* À ÉVITER */}
        <section>
          <h3 className="font-bold text-lg text-red-500 mb-2">
            ❌ À éviter
          </h3>

          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            {current.donts?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Conseils;