import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';

const LANGUAGES = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'ca', label: 'CA', name: 'Català' }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Detectar idioma del navegador al inicio
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    } else {
      const browserLang = navigator.language.split('-')[0];
      const supportedLang = LANGUAGES.find(lang => lang.code === browserLang);
      const defaultLang = supportedLang ? browserLang : 'es';
      i18n.changeLanguage(defaultLang);
      localStorage.setItem('preferred-language', defaultLang);
    }
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('preferred-language', lng);
  };

  const currentLang = LANGUAGES.find(lang => lang.code === i18n.language) || LANGUAGES[0];

  return (
    <div className="relative group">
      <button 
        className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-primary/20 text-white transition-all duration-300"
        aria-label="Seleccionar idioma"
      >
        <FaGlobeAmericas className="text-primary" />
        <span className="font-medium">{currentLang.label}</span>
      </button>
      
      <div className="absolute right-0 mt-2 py-1 w-44 bg-dark rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-dark/10">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full px-4 py-2 text-left flex items-center justify-between hover:bg-primary/10 transition-colors ${
              i18n.language === lang.code 
                ? 'text-primary font-medium bg-primary/5' 
                : 'text-gray-200'
            }`}
          >
            <span>{lang.name}</span>
            <span className="text-sm font-medium opacity-60">{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher; 