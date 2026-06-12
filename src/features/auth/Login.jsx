import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { tokenAtom } from "/src/atoms/auth.atom";
import { authService } from "/src/services/auth.service";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [, setToken] = useAtom(tokenAtom);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await authService.login(data);

      if (!res?.token) {
        throw new Error("Token manquant");
      }

      // ✅ ICI SEULEMENT
      setToken(res.token);
      localStorage.setItem("token", res.token);

      navigate("/maman");

    } catch (err) {
      console.error("Login error:", err);
      setError("Email ou mot de passe incorrect ❌");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-pink-100">

        <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
          Connexion 💕
        </h2>

        <form onSubmit={handleLoginSubmit} className="space-y-5">

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl border border-pink-200 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Mot de passe"
            className="w-full p-3 rounded-xl border border-pink-200 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />

          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition disabled:opacity-50"
          >
            {loading ? "Connexion..." : "Se connecter 🎀"}
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Pas encore de compte ?{" "}
          <span
            className="text-pink-500 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/auth/register")}
          >
            S'inscrire
          </span>
        </p>

      </div>
    </div>
  );
};