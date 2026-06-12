import { useState } from "react";
import data from "../../data/advices.json";

function Conseils() {
  const [week, setWeek] = useState(1);

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
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-500">
            🤰 Suivi de grossesse
          </h1>
          <p className="text-gray-600 mt-2">
            Conseils et informations semaine par semaine
          </p>
        </div>

        {/* PROGRESSION */}
        <div className="bg-white rounded-2xl shadow p-5 mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">
              Semaine {week}
            </span>
            <span className="text-gray-500">
              40 semaines
            </span>
          </div>

          <div className="w-full bg-pink-100 rounded-full h-3">
            <div
              className="bg-pink-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${(week / 40) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="bg-white rounded-2xl shadow p-5 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

            <button
              disabled={week === 1}
              onClick={() => setWeek((prev) => prev - 1)}
              className="px-4 py-2 bg-pink-500 text-white rounded-xl disabled:opacity-50"
            >
              ← Semaine précédente
            </button>

            <select
              value={week}
              onChange={(e) => setWeek(Number(e.target.value))}
              className="border border-pink-200 rounded-xl p-3 w-full md:w-64"
            >
              {data.map((item) => (
                <option
                  key={item.week}
                  value={item.week}
                >
                  Semaine {item.week}
                </option>
              ))}
            </select>

            <button
              disabled={week === data.length}
              onClick={() => setWeek((prev) => prev + 1)}
              className="px-4 py-2 bg-pink-500 text-white rounded-xl disabled:opacity-50"
            >
              Semaine suivante →
            </button>
          </div>
        </div>

        {/* TITRE SEMAINE */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-pink-500">
            {current.title}
          </h2>
        </div>

        {/* GRILLE */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* MAMAN */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-pink-500 mb-4">
              🤰 Changements chez la maman
            </h3>

            <ul className="space-y-2 text-gray-700">
              {current.momChanges.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* BÉBÉ */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-pink-500 mb-4">
              👶 Développement du bébé
            </h3>

            <ul className="space-y-2 text-gray-700">
              {current.babyDevelopment.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* CONSEILS */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-green-600 mb-4">
              💡 Conseils
            </h3>

            <ul className="space-y-2 text-gray-700">
              {current.tips.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* INTERDITS */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-red-500 mb-4">
              ❌ À éviter
            </h3>

            <ul className="space-y-2 text-gray-700">
              {current.donts.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Conseils;