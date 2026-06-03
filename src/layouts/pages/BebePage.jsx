import { useEffect, useState } from "react";

import BabyCard from "/src/features/pages/bebe/BabyCard";
import GrowthChart from "/src/features/pages/bebe/GrowthChart";
import BebeArticles from "../../features/pages/bebe/BabyArticles";

import { useAtom } from "jotai";
import { tokenAtom } from "/src/atoms/auth.atom";

import axios from "axios";
import { growthTable } from "/src/features/pages/bebe/babyUtils";

function BebePage() {
  const [baby, setBaby] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [token] = useAtom(tokenAtom);

  // ---------------- FETCH BABY ----------------
  useEffect(() => {
    const fetchBaby = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get("http://localhost:3000/api/baby", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBaby(res.data);
      } catch (err) {
        console.error("BebePage error:", err);
        setError("Erreur lors du chargement des données bébé");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchBaby();
    } else {
      setLoading(false);
    }
  }, [token]);

  // ---------------- LOADING ----------------
  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Chargement...
      </p>
    );
  }

  // ---------------- ERROR ----------------
  if (error) {
    return (
      <p className="text-center text-red-500 mt-10">
        {error}
      </p>
    );
  }

  // ---------------- CALCUL SEMAINE ----------------
  const startDate = baby?.pregnancyStart
    ? new Date(baby.pregnancyStart)
    : null;

  const week = Math.max(
    1,
    Math.floor(
      (new Date() - startDate) / (1000 * 60 * 60 * 24 * 7)
    )
  );

  // LE GRAPHIQUE DE CROISSANCE
const growthData = growthTable.map((p) => ({
  date: `S${p.week}`,
  weight: p.weight,
  height: p.height,
}));

  // ---------------- UI ----------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 p-6">

      <h1 className="text-2xl font-bold text-pink-500 mb-6">
        👶 Suivi de mon bébé
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* CARD BÉBÉ */}
        <BabyCard
          pregnancy={baby}
          user={baby}
        />

        {/* GRAPH */}
        <GrowthChart
          data={growthData}
        />

        {/* ARTICLES */}
        <BebeArticles />

      </div>
    </div>
  );
}

export default BebePage;