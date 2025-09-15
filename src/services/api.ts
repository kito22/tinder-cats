import axios from "axios";
import { CAT_API_KEY } from "@env";

const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key": CAT_API_KEY,
  },
});

export default api;
