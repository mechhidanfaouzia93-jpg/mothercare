function WeekProgress({ pregnancy, user }) {
  if (!pregnancy) return null;

  const week = pregnancy.week;

  const progress = Math.min((week / 40) * 100, 100);

  const getTrimester = () => {
    if (week <= 13) return "1er trimestre";
    if (week <= 27) return "2ème trimestre";
    return "3ème trimestre";
  };

  const getMotivation = () => {
    if (week <= 12) {
      return "🌱 Chaque semaine est une nouvelle étape magique.";
    }

    if (week <= 24) {
      return "💖 Votre bébé devient de plus en plus actif.";
    }

    if (week <= 36) {
      return "👶 Votre bébé continue de grandir rapidement.";
    }

    return "🎉 La naissance approche bientôt !";
  };

  const getProgressColor = () => {
    if (week <= 13) return "bg-pink-300";
    if (week <= 27) return "bg-pink-500";
    return "bg-pink-700";
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow space-y-4">

      <div>
        <h2 className="text-lg font-bold">
          📊 Progression de grossesse
        </h2>

        <p className="text-sm text-gray-500">
          {user?.nom ? `${user.nom}` : "Maman"} • {getTrimester()}
        </p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className={`${getProgressColor()} h-4 rounded-full transition-all duration-500`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between text-sm text-gray-600">
        <span>Semaine {week}</span>
        <span>{Math.round(progress)}%</span>
      </div>

      <p className="text-sm text-gray-700">
        ⏳ {40 - week} semaines restantes avant l’arrivée du bébé
      </p>

      <div className="bg-pink-50 p-3 rounded-xl">
        <p className="text-sm text-gray-700">
          {getMotivation()}
        </p>
      </div>
    </div>
  );
}

export default WeekProgress;