import { useEffect, useState } from "react";

import PregnancyCard from "/src/features/pages/maman/PregnancyCard";
import WeekProgress from "/src/features/pages/maman/WeekProgress";
import BabyDevelopment from "/src/features/pages/maman/BabyDevelopment";
import AdviceCard from "/src/features/pages/maman/AdviceCard";

import api from "/src/services/api";
import MamanArticles from "../../features/pages/maman/MamanArticles";
import DidYouKnow from "../../features/pages/maman/didYouKnow";
import RendezVous from "./RendezVous";

function MamanPage() {
  const [pregnancy, setPregnancy] = useState(null);
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPregnancy = async () => {
      try {
        const res = await api.get("/pregnancy");

        console.log("API DATA:", res.data);

        // USER
        setUser(res.data);

        // DATE DE DÉBUT GROSSESSE
        const startDate = new Date(
          res.data.pregnancyStart
        );

        console.log("START DATE:", startDate);

        const today = new Date();

        // DIFFÉRENCE TEMPS
        const diffTime = today - startDate;

        // CALCUL SEMAINES
        const week = Math.floor(
          diffTime / (1000 * 60 * 60 * 24 * 7)
        );

        // CALCUL JOURS PASSÉS
        const passedDays = Math.floor(
          diffTime / (1000 * 60 * 60 * 24)
        );

        // CALCUL JOURS RESTANTS
        const daysLeft = 280 - passedDays;

        // DONNÉES PERSONNALISÉES
        setPregnancy({
          ...res.data,
          week,
          daysLeft,
        });

      } catch (err) {
        console.error("MamanPage error:", err);

        setError("Erreur lors du chargement");
      } finally {
        setLoading(false);
      }
    };

      fetchPregnancy();
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Chargement...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500">
        {error}
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 p-6">

      <h1 className="text-2xl font-bold text-pink-500 mb-6">
        🤰 Suivi de ma grossesse
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <PregnancyCard
          pregnancy={pregnancy}
          user={user}
        />

        <WeekProgress
          pregnancy={pregnancy}
          user={user}
        />
        <RendezVous />

        {/* <BabyDevelopment
          pregnancy={pregnancy}
          user={user}
        /> */}

        <DidYouKnow />

        <MamanArticles />

      </div>
    </div>
  );
}

export default MamanPage;