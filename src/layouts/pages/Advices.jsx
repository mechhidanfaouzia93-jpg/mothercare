
import { useState } from "react";

function Conseils() {
  const [week, setWeek] = useState(4);

  const current = data.find((d) => d.week === week);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-center text-pink-500 mb-6">
        🤰 Suivi grossesse semaine par semaine
      </h1>

      {/* NAV WEEKS */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {data.map((d) => (
          <button
            key={d.week}
            onClick={() => setWeek(d.week)}
            className={`px-3 py-1 rounded-full text-sm ${
              week === d.week
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {d.week}
          </button>
        ))}
      </div>

      {/* CARD */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-6 space-y-6">

        <h2 className="text-xl font-bold text-pink-500">
          Semaine {current.week} — {current.title}
        </h2>

        {/* MAMAN */}
        <div>
          <h3 className="font-semibold text-gray-700">🤰 Changements maman</h3>
          <ul className="text-gray-600 list-disc ml-5">
            {current.momChanges.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* BEBE */}
        <div>
          <h3 className="font-semibold text-gray-700">👶 Développement bébé</h3>
          <ul className="text-gray-600 list-disc ml-5">
            {current.babyDevelopment.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* CONSEILS */}
        <div>
          <h3 className="font-semibold text-gray-700">💡 Conseils</h3>
          <ul className="text-gray-600 list-disc ml-5">
            {current.tips.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* INTERDITS */}
        <div>
          <h3 className="font-semibold text-red-500">❌ À éviter</h3>
          <ul className="text-gray-600 list-disc ml-5">
            {current.donts.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Conseils;