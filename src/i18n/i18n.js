import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar archivos de traducción
import translationES from './locales/es.json';
import translationEN from './locales/en.json';
import translationDE from './locales/de.json';

// Recursos de traducción
const resources = {
  es: translationES,
  en: translationEN,
  de: translationDE
};

i18n
  // Detectar el idioma del navegador
  .use(LanguageDetector)
  // Pasar el módulo i18n a react-i18next
  .use(initReactI18next)
  // Inicializar i18next
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto
    debug: true, // Habilitar logs de depuración (desactivar en producción)
    interpolation: {
      escapeValue: false // No es necesario para React
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n; 