// src/api/client.ts
import axios from "axios";

/**
import axios from "axios";

/**
 * Axios instance for Strapi API
 * Reads baseURL from environment
 */
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // uses the Vite env var
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
  },
});

export default apiClient;
