import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es.json';
import en from './locales/en.json';
import de from './locales/de.json';

const resources = {
  es: {
    translation: es.translation
  },
  en: {
    translation: en.translation
  },
  de: {
    translation: de.translation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export default i18n; 