import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "/src/services/auth.service";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const id = useId();

  const [form, setForm] = useState({
    nom: "",
    email: "",
    password: "",
    pregnancyStart: "",
    hasBaby: false,
    babyName: "",
    babyBirthDate: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("FORM DATA:", form);

    try {
      const res = await authService.register(form);

      console.log("REGISTER RESPONSE:", res);

      if (!res) {
        throw new Error("No response from backend");
      }

      navigate("/maman");

    } catch (err) {

      console.error("REGISTER ERROR:", err.response?.data || err.message);

      setError(
        err.response?.data?.message || "Erreur serveur"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50 p-6">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-pink-100 shadow-2xl rounded-3xl p-8"
      >

        {/* TITLE */}
        <h2 className="text-3xl font-extrabold text-center text-pink-500 mb-2">
          Créer un compte 💕
        </h2>

        <p className="text-center text-gray-500 text-sm mb-6">
          Suivez votre grossesse avec douceur et simplicité
        </p>

        {/* INPUT STYLE */}
        <div className="space-y-4">

          <input
            className="w-full px-4 py-3 rounded-2xl border border-pink-100 bg-pink-50/40 focus:bg-white focus:ring-2 focus:ring-pink-300 outline-none transition"
            type="text"
            name="nom"
            placeholder="Nom"
            value={form.nom}
            onChange={handleChange}
          />

          <input
            className="w-full px-4 py-3 rounded-2xl border border-pink-100 bg-pink-50/40 focus:bg-white focus:ring-2 focus:ring-pink-300 outline-none transition"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="w-full px-4 py-3 rounded-2xl border border-pink-100 bg-pink-50/40 focus:bg-white focus:ring-2 focus:ring-pink-300 outline-none transition"
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={form.password}
            onChange={handleChange}
          />

          <div>
            <label className="text-xs text-gray-500 ml-1">
              Début de grossesse
            </label>

            <input
              className="w-full px-4 py-3 rounded-2xl border border-pink-100 bg-pink-50/40 focus:bg-white focus:ring-2 focus:ring-pink-300 outline-none transition"
              type="date"
              name="pregnancyStart"
              value={form.pregnancyStart}
              onChange={handleChange}
            />
          </div>

          {/* CHECKBOX CARD STYLE */}
          <div className="flex items-center gap-3 bg-pink-50/60 p-3 rounded-2xl border border-pink-100">
            <input
              type="checkbox"
              name="hasBaby"
              checked={form.hasBaby}
              onChange={handleChange}
              className="w-4 h-4 accent-pink-500"
            />
            <label className="text-sm text-gray-700">
              J’ai déjà un bébé 👶
            </label>
          </div>


          {form.hasBaby && (
            <div className="space-y-3 animate-fadeIn">

              <input
                className="w-full px-4 py-3 rounded-2xl border border-pink-100 bg-pink-50/40 focus:bg-white focus:ring-2 focus:ring-pink-300 outline-none transition"
                type="text"
                name="babyName"
                placeholder="Nom du bébé"
                value={form.babyName}
                onChange={handleChange}
              />

              <input
                className="w-full px-4 py-3 rounded-2xl border border-pink-100 bg-pink-50/40 focus:bg-white focus:ring-2 focus:ring-pink-300 outline-none transition"
                type="date"
                name="babyBirthDate"
                value={form.babyBirthDate}
                onChange={handleChange}
              />

            </div>
          )}

          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}
          
          <button
            className="w-full mt-4 py-3 rounded-2xl text-white font-semibold
          bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400
          shadow-lg hover:shadow-pink-300 hover:scale-[1.02]
          transition-all duration-300"
          >
            S'inscrire ✨
          </button>



        </div>
      </form>
    </div>
  );
};