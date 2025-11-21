// src/hooks/useFetch.ts
// import useSWR from "swr";
// import apiClient from "../api/client";

// const fetcher = (url: string) => apiClient.get(url).then((res) => res.data.data);

// /**
//  * Generic data fetching hook using SWR
//  * @param endpoint Strapi API endpoint (without baseURL)
//  */
// export function useFetch<T>(endpoint: string) {
//   const { data, error, isLoading } = useSWR<T>(endpoint, fetcher);
//   return { data, error, isLoading };
// }

import useSWR from "swr";
import apiClient from "../api/client"; // ✅ no curly braces

const fetcher = (url: string) => apiClient.get(url).then((res) => res.data.data);

export function useFetch<T>(endpoint: string) {
  const { data, error, isLoading } = useSWR<T>(endpoint, fetcher);
  return { data, error, isLoading };
}