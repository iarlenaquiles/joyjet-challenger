import axios from "axios";

const api = axios.create({
  baseURL: "https://cdn.joyjet.com/tech-interview/mobile-test-one.json"
});

export default api;
