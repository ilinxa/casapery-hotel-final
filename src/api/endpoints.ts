// src/api/endpoints.ts
import apiClient from "./client";

export const fetchLandingPage = async (lang: string) => {
  const res = await apiClient.get(`/landing-page?locale=${lang}`);
  return res.data.data;
};

export const fetchJournalPage = async (lang: string) => {
  const res = await apiClient.get(`/journal-page?locale=${lang}`);
  return res.data.data;
};

export const fetchJournalDetail = async (id: string, lang: string) => {
  const res = await apiClient.get(`/journals/${id}?locale=${lang}`);
  return res.data.data;
};

export const fetchGlobal = async (lang: string) => {
  const res = await apiClient.get(`/global?locale=${lang}`);
  return res.data.data;
};
