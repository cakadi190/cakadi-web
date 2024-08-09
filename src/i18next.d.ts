import en from '../public/locales/en/common.json';
import es from '../public/locales/es/common.json';
import id from '../public/locales/id/common.json';
import fr from '../public/locales/fr/common.json';
import jv from '../public/locales/jv/common.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false
    defaultNS: 'default'
    resources: {
      default: typeof en,
      en: typeof en,
      es: typeof es,
      id: typeof id,
      fr: typeof fr,
      jv: typeof jv
    }
  }
}