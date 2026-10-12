import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // 'id' for Indonesian, 'en' for English; remembered so refreshes and direct /project links keep the choice
  const [language, setLanguageState] = useState(() => {
    try { return localStorage.getItem('lang') === 'en' ? 'en' : 'id'; } catch { return 'id'; }
  });

  const setLanguage = (lang) => {
    setLanguageState(lang);
    try { localStorage.setItem('lang', lang); } catch { /* storage blocked — keep in-memory choice */ }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    isIndonesian: language === 'id',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};