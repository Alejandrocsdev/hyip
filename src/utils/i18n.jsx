// 函式庫 (library)
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// 資料 (json)
import lang from '../assets/locales/lang.json'
// import en from '../assets/locales/en.json'
// import ru from '../assets/locales/ru.json'
// import et from '../assets/locales/et.json'

i18n.use(initReactI18next).init({
  resources: lang,
  // resources: {
  //   en: { translation: en },
  //   ru: { translation: ru },
  //   et: { translation: et }
  // },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
  // if { escapeValue: true }:
  // "Welcome <strong>John</strong>!"
  // Welcome &lt;strong&gt;John&lt;/strong&gt;!
})

export default i18n
