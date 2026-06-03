import { estimateBabyStats, getBabyAnimal } from "./babyUtils";

function BabyCard({ pregnancy, user }) {

  if (!pregnancy) {
    return <p>Aucune donnée bébé</p>;
  }

  // DATE DE DÉBUT
  const startDate = new Date(
    pregnancy.pregnancyStart
  );


  const today = new Date();

  // DIFF TEMPS
  const diffTime = today - startDate;

  // CALCUL SEMAINES
  const week = Math.max(
    1,
    Math.floor(
      diffTime / (1000 * 60 * 60 * 24 * 7)
    )
  );

  // STATS BÉBÉ
  const stats = estimateBabyStats(week);

  // ANIMAL/FRUIT
  const animal = getBabyAnimal(week);

    console.log("Pregnancy:", pregnancy);
console.log("Start:", pregnancy.pregnancyStart);
console.log("Week:", week);
console.log("Animal:", animal);
console.log("Stats:", stats);

  // MESSAGE PERSONNALISÉ
  const getMessage = () => {
    if (week <= 12) {
      return "Votre bébé commence à former ses organes principaux.";
    }

    if (week <= 24) {
      return "Votre bébé bouge de plus en plus et développe ses sens.";
    }

    if (week <= 36) {
      return "Votre bébé grandit rapidement et prend du poids.";
    }

    return "Votre bébé est presque prêt à rencontrer maman ❤️";
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow space-y-4">

      <div>
        <h2 className="text-xl font-bold">
          👶 Bébé de {user?.nom || "Maman"}
        </h2>

        <p className="text-sm text-gray-500">
          Semaine {week}
        </p>
      </div>

      <div className="space-y-1 text-sm text-gray-700">
        <p>📏 Taille estimée : {stats.height} cm</p>

        <p>⚖️ Poids estimé : {stats.weight} kg</p>

        <p>🐣 Comparaison : {animal.name}</p>
      </div>
      

      <img
        src={animal.image}
        alt={animal.name}
        className="w-full h-52 object-cover rounded-xl"
      />

      <div className="bg-pink-50 p-3 rounded-xl">
        <p className="text-sm text-gray-700">
          💡 {getMessage()}
        </p>
      </div>
    </div>
  );
}

export default BabyCard;