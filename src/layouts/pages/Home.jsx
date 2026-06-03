import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex flex-col">

      {/* HERO */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-24">

        <h1 className="text-5xl md:text-6xl font-extrabold text-pink-500 mb-4 drop-shadow-sm">
          MotherCare 💕
        </h1>

        <p className="text-gray-600 max-w-md mb-10 text-lg">
          Suivez votre grossesse et la croissance de votre bébé en toute simplicité.
          Recevez des conseils personnalisés chaque jour.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">

          <button
            onClick={() => navigate("/auth/register")}
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
          >
            Commencer 🚀
          </button>

          <button
            onClick={() => navigate("/auth/login")}
            className="bg-white/70 backdrop-blur-md text-pink-500 border border-pink-200 px-8 py-3 rounded-2xl font-semibold hover:bg-white transition"
          >
            Se connecter 🎀
          </button>

        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-10 pb-20">

  {/* GROSSESSE */}
  <div
    onClick={() => navigate("/maman")}
    className="cursor-pointer bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-lg border border-pink-100 hover:scale-105 hover:shadow-xl transition"
  >
    <h3 className="text-xl font-bold text-pink-500 mb-3">
      🤰 Suivi grossesse
    </h3>
    <p className="text-gray-600 text-sm">
      Suivez semaine par semaine l’évolution de votre grossesse.
    </p>
  </div>

  
  <div
    onClick={() => navigate("/bebe")}
    className="cursor-pointer bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-lg border border-pink-100 hover:scale-105 hover:shadow-xl transition"
  >
    <h3 className="text-xl font-bold text-pink-500 mb-3">
      👶 Suivi bébé
    </h3>
    <p className="text-gray-600 text-sm">
      Croissance, poids, taille et santé de votre bébé.
    </p>
  </div>

  {/* CONSEILS */}
  <div
    onClick={() => navigate("/advices")}
    className="cursor-pointer bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-lg border border-pink-100 hover:scale-105 hover:shadow-xl transition"
  >
    <h3 className="text-xl font-bold text-pink-500 mb-3">
      💡 Conseils
    </h3>
    <p className="text-gray-600 text-sm">
      Recevez des conseils personnalisés chaque jour.
    </p>
  </div>

</div>

  

    </div>
  );
}

export default HomePage;