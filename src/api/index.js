import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/episode/",
});

export default api;
