export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-rose-500 text-white mt-auto">

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">

        {/* LOGO */}
        <div>
          <h2 className="text-2xl font-bold mb-2">MotherCare 💕</h2>
          <p className="text-sm text-pink-100">
            Suivi grossesse, santé maman et développement de bébé.
          </p>
        </div>

        {/* NAV */}
        <div>
          <h3 className="font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm text-pink-100">
            <li className="hover:underline cursor-pointer">Accueil</li>
            <li className="hover:underline cursor-pointer">Grossesse</li>
            <li className="hover:underline cursor-pointer">Bébé</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm text-pink-100">support@mothercare.com</p>
          <p className="text-sm text-pink-100">+32 123 456 789</p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm py-4 border-t border-pink-400">
        © {new Date().getFullYear()} MotherCare 💖
      </div>

    </footer>
  );
};