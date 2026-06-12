import { useState } from "react";
import data from "/src/data/didYouKnow.json";

function DidYouKnow() {
  const [index, setIndex] = useState(0);

  const nextFact = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prevFact = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-pink-500 mb-6 text-center">
        💡 Le saviez-vous ?
      </h2>

      <div className="bg-pink-50 border border-pink-100 rounded-2xl p-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          {data[index].description}
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prevFact}
          className="px-4 py-2 bg-pink-100 rounded-full hover:bg-pink-200"
        >
          ← Précédent
        </button>

        <button
          onClick={nextFact}
          className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600"
        >
          Suivant →
        </button>
      </div>
    </div>
  );
}

export default DidYouKnow;