import { useAtom } from "jotai";
import { useNavigate } from "react-router";
import { tokenAtom } from "../../atoms/auth.atom";

export const BtnLogout = ()=>{

     const navigate = useNavigate();

   const [token, setToken] = useAtom(tokenAtom);

   const handleLogout =()=>{
    setToken(null);

    navigate("/home")
   };

   return(
    <button onClick={handleLogout} className="btn">
        Déconnexion
    </button>
   )

}