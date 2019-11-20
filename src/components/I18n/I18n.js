import { createI18n } from 'react-router-i18n';

const locales = ['en'];

const translations = {
  en: {
    header: {
      title: 'LSJ Lexicon',
      fulltitle: 'Liddell-Scott-Jones Greek-English Lexicon',
    },
    input: {
      placeholder: 'Enter word ...',
    },
  },
};

const I18n = createI18n(
  locales,
  translations,
);

export default I18n;
