import { NavLink } from "react-router-dom";
export const Footer = () => {
  const footerLinkStyle =
    "text-sm text-pink-100 hover:text-white hover:underline transition cursor-pointer";

  return (
    <footer className="bg-gradient-to-r from-pink-500 to-rose-500 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">

        <div>
          <NavLink to="/" className="inline-block">
            <h2 className="text-2xl font-bold mb-2 hover:opacity-90 transition">
              MotherCare 💕
            </h2>
          </NavLink>

          <p className="text-sm text-pink-100">
            Suivi grossesse, santé maman et développement de bébé.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="font-semibold mb-2">Navigation</h3>

          <ul className="space-y-1">
            <li>
              <NavLink to="/" className={footerLinkStyle}>
                Accueil
              </NavLink>
            </li>

            <li>
              <NavLink to="/maman" className={footerLinkStyle}>
                Grossesse
              </NavLink>
            </li>

            <li>
              <NavLink to="/bebe" className={footerLinkStyle}>
                Bébé
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={footerLinkStyle}>
                À propos
              </NavLink>
            </li>

            <li>
              <NavLink to="/faq" className={footerLinkStyle}>
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>

          <p className="text-sm text-pink-100">
            support@mothercare.com
          </p>

          <p className="text-sm text-pink-100">
            +32 123 456 789
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm py-4 border-t border-pink-400">
        © {new Date().getFullYear()} MotherCare 💖
      </div>
    </footer>
  );
};