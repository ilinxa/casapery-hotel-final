import { useLanguage } from "../context/LanguageContext";

/**
 * Language Switcher component
 * - Toggles between "EN" and "TR"
 * - Updates LanguageContext
 * - Automatically re-fetches localized Strapi content
 */
const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  const toggleLanguage = () => {
    setLang(lang === "en" ? "tr" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-lg text-sm font-semibold border border-white/30 text-white 
                 hover:bg-white/10 transition-colors duration-200"
    >
      {lang === "en" ? "TR" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
