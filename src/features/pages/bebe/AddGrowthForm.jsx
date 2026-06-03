import { useState } from "react";
import { useAtom } from "jotai";
import { tokenAtom } from "../../../atoms/auth.atom";
import axios from "axios";

function AddGrowthForm({ onAdd }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [token] = useAtom(tokenAtom);
const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await axios.post(
    "http://localhost:3000/api/growth",
    {
      weight,
      height,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("API growth:", response.data);

  onAdd((prev) => [...prev, response.data]);

  setWeight("");
  setHeight("");
}; 


  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h2 className="text-lg font-bold mb-4">
        ➕ Ajouter croissance
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="number"
          placeholder="Poids"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />

        <input
          type="number"
          placeholder="Taille"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />

        <button className="w-full bg-pink-500 text-white py-2 rounded-lg">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AddGrowthForm;