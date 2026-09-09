

import axios from "axios";

const API = "https://node-mothercare.onrender.com/appointments";

const getAuthHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

// CRÉER
export const createAppointment = async (data) => {
  return await axios.post(API, data, {
    headers: getAuthHeaders(),
  });
};

// RÉCUPÉRER
export const getAppointments = async () => {
  return await axios.get(API, {
    headers: getAuthHeaders(),
  });
};

// SUPPRIMER
export const deleteAppointment = async (id) => {
  return await axios.delete(`${API}/${id}`, {
    headers: getAuthHeaders(),
  });
};



// import axios from "axios";

// const API = "https://node-mothercare.onrender.com/appointments";

// export const createAppointment = async (data) => {
//   return await axios.post(API, data, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
// };

// export const getAppointments = async () => {
//   return await axios.get(API, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
// };

// export const deleteAppointment = async (id) => {
//   return await axios.delete(`${API}/${id}`, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
// };

// // import axios from "axios";

// // // const API = "http://localhost:3000/appointments";
// // const API = `${import.meta.env.VITE_API_URL}/../appointments`;

// // export const createAppointment = async (data) => {
// //   return await axios.post(API, data, {
// //     headers: {
// //       Authorization: `Bearer ${localStorage.getItem("token")}`,
// //     },
// //   });
// // };

// // export const getAppointments = async () => {
// //   return await axios.get(API, {
// //     headers: {
// //       Authorization: `Bearer ${localStorage.getItem("token")}`,
// //     },
// //   });
// // };

// // export const deleteAppointment = async (id) => {
// //   return await axios.delete(`${API}/${id}`, {
// //     headers: {
// //       Authorization: `Bearer ${localStorage.getItem("token")}`,
// //     },
// //   });
// // };