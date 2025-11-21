// src/context/LanguageContext.tsx
import React, { createContext, useContext, useState } from "react";

type Lang = "en" | "tr";

interface LanguageContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

// Create context with default 'en'
const LanguageContext = createContext<LanguageContextProps>({
  lang: "en",
  setLang: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
