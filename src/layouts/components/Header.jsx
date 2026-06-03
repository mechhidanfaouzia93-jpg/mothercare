import { NavLink } from "react-router-dom";
import { useAtomValue } from "jotai";
import { IsConnectedAtom } from "../../atoms/auth.atom";
import { BtnLogout } from "../../features/auth/BtnLogout";

export const Header = () => {
  const isConnected = useAtomValue(IsConnectedAtom);

  const linkStyle = ({ isActive }) =>
    `font-StoryScript text-lg transition ${isActive ? "text-pink-500 font-bold" : "text-gray-600 hover:text-pink-400"
    }`;

  return (
    <header className="bg-white shadow-sm border-b border-pink-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">


        <div className="flex items-center gap-3">
          <img
            src="/icons/logo-mother-care.png"
            alt="MotherCare logo"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold text-pink-500 tracking-wide">
            Mother<span className="text-pink-300">Care</span>
          </h1>
        </div>

        <nav className="flex items-center gap-6">

          <ul className="hidden md:flex items-center gap-6">
            <li>
              <NavLink to="/" className={linkStyle}>
                Accueil
              </NavLink>
            </li>

            <li>
              <NavLink to="/maman" className={linkStyle}>
                Grossesse
              </NavLink>
            </li>

            <li>
              <NavLink to="/bebe" className={linkStyle}>
                Bébé
              </NavLink>
            </li>


            <li>
              <NavLink
                to="/about"
                className={linkStyle}
              >
                À propos
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/faq"
                className={linkStyle}
              >
                FAQ
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            {!isConnected ? (
              <NavLink to="/auth/login" className="btn">
                Connexion
              </NavLink>
            ) : (
              <BtnLogout />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};