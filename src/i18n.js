import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import de from './locales/de.json'
import fr from './locales/fr.json'

// Keep <html lang="..."> in sync with the selected language
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
})

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      fr: { translation: fr },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'de', 'fr'],
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
  })

export default i18n