function PregnancyCard({ pregnancy, user }) {
  if (!pregnancy) return <p>Aucune donnée</p>;

  const week = pregnancy.week;

  const getTrimester = () => {
    if (week <= 13) return "1er trimestre";
    if (week <= 27) return "2ème trimestre";
    return "3ème trimestre";
  };

  const getMessage = () => {
    if (week <= 12) {
      return "Votre corps commence à changer et le bébé se développe rapidement.";
    }

    if (week <= 24) {
      return "Votre bébé bouge davantage et ses organes continuent de grandir.";
    }

    if (week <= 36) {
      return "Le bébé prend du poids et se prépare progressivement à la naissance.";
    }

    return "La naissance approche ❤️ Préparez votre valise maternité.";
  };

  const progress = Math.min((week / 40) * 100, 100);

  return (
    <div className="bg-white p-5 rounded-2xl shadow space-y-4">

      <div>
        <h2 className="text-xl font-bold">
          🤰 Bonjour<span className="text-pink-400 uppercase"> {user?.nom || "Maman"}</span>
        </h2>

        <p className="text-gray-500 text-sm">
          {getTrimester()}
        </p>
      </div>

      <div className="space-y-1">
        <p>
          📅 Début :{" "}
          {new Date(pregnancy.pregnancyStart).toLocaleDateString()}
        </p>

        <p>📆 Semaine actuelle : {week}</p>

        <p>⏳ Jours restants : {pregnancy.daysLeft}</p>
      </div>

      <div>
       

        <p className="text-xs text-gray-500 mt-1">
          {Math.round(progress)}% de la grossesse
        </p>
      </div>

      <div className="bg-pink-50 p-3 rounded-xl">
        <p className="text-sm text-gray-700">
          💡 {getMessage()}
        </p>
      </div>
    </div>
  );
}

export default PregnancyCard;