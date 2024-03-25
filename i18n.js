import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './src/locales/en.json';

const resources = {
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  compatilityJSON: 'v3',
  resources,
  fallbackLng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
