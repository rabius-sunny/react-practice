import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      // en: {
      //   translation: {
      //     welcome: 'Welcome to react with i18next'
      //   }
      // },
      bn: {
        translation: {
          welcome: 'i18next এর সাথে react এ স্বাগতম'
        }
      }
    }
  })
