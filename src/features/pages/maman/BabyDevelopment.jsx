function BabyDevelopment({ pregnancy }) {
  if (!pregnancy) return null;

  const week = pregnancy.week;

  const getMessage = (week) => {
    if (week < 5) {
      return "Le début de la grossesse : l’embryon commence à se former.";
    }
     if (week < 6) {
      return "Le cœur du bébé commence à battre.";
    }
     if (week < 7) {
      return "L’embryon se développe rapidement.";
    }

    if (week < 12) {
      return "Les organes principaux commencent à se développer.";
    }

    if (week < 20) {
      return "Le bébé grandit rapidement et commence à bouger.";
    }

    if (week < 30) {
      return "Le bébé prend du poids et ses sens se développent.";
    }

    return "Le bébé est presque prêt pour la naissance, il continue de se renforcer.";
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h2 className="text-lg font-bold mb-3">
        👶 Développement du bébé
      </h2>

      <p className="text-gray-600 text-sm">
        Semaine {week} : {getMessage(week)}
      </p>
    </div>
  );
}

export default BabyDevelopment;