// src/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import your language translation files
import en from '../assets/locales/en.json'
import ru from '../assets/locales/ru.json'
import et from '../assets/locales/et.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    et: { translation: et }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n
