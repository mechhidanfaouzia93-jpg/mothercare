// import axios from "axios";
// import { getDefaultStore } from "jotai";
// import { tokenAtom } from "../atoms/auth.atom";


// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL, // 🔥 important pour Vercel
//   timeout: 10000,
// });

// // Interceptor pour ajouter le token à chaque requête
// const store = getDefaultStore();


// api.interceptors.request.use(
//   (config) => {
//     // token depuis Jotai
//     let token = store.get(tokenAtom);

    
//     if (!token) {
//       token = localStorage.getItem("token");
//     }

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Interceptor pour gérer les erreurs globalement
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const status = error?.response?.status;

   
//     if (status === 401) {
//       console.warn("🔒 Unauthorized - token invalide ou expiré");

     
//     }

//     // 💥 erreur serveur
//     if (status >= 500) {
//       console.error("💥 Server error");
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;


import axios from "axios";
import { getDefaultStore } from "jotai";
import { tokenAtom } from "../atoms/auth.atom";


const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 10000, 
});

//  Interceptors pour gérer l'authentification et les erreurs globalement
const store = getDefaultStore();

// intercepteur pour ajouter le token à chaque requête

api.interceptors.request.use(
  (config) => {
    const token = store.get(tokenAtom);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

  

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// intercepteur pour gérer les erreurs globalement

api.interceptors.response.use(
  (response) => {
   

    return response;
  },
  (error) => {
    const status = error?.response?.status;

    //  token expiré / non autorisé
    if (status === 401) {
      console.warn("🔒 Non autorisé - token invalide ou expiré");

      // redirection vers la page de login
      // window.location.href = "/auth/login";
    }

    
    if (status >= 500) {
      console.error("💥 Erreur serveur");
    }

    return Promise.reject(error);
  }
);

export default api;