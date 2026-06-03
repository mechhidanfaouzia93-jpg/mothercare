import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const authService = {
  register: async (data) => {
    const res = await axios.post(`${API_URL}/register`, data);
    return res.data;
  },

  login: async (data) => {
    const res = await axios.post(`${API_URL}/login`, data);
    return res.data;
  },
};