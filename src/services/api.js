import axios from "axios";

const api = axios.create({
  baseURL: "https://cdn.joyjet.com/tech-interview/"
});

export default api;
