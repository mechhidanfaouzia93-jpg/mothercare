import { useState } from "react";
import { useAtom } from "jotai";
import { tokenAtom } from "../../../atoms/auth.atom";
import api from "../../../services/api";

function AddGrowthForm({ onAdd }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [token] = useAtom(tokenAtom);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/growth",
        {
          weight: Number(weight),
          height: Number(height),
        },
        {
          headers: {
            Authorization: `Bearer ${token || localStorage.getItem("token")}`,
          },
        }
      );

      console.log("API growth:", response.data);

      onAdd((prev) => [...prev, response.data]);

      setWeight("");
      setHeight("");
    } catch (error) {
      console.error("Erreur croissance:", error);
    }
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h2 className="text-lg font-bold mb-4">
        ➕ Ajouter croissance
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="number"
          step="0.1"
          placeholder="Poids (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        />

        <input
          type="number"
          step="0.1"
          placeholder="Taille (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AddGrowthForm;