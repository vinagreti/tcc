import { AppTranslationKeysMap } from '@/i18n/i18n-translation-keys';

// Using AppTranslationKeysMap as TYPE is the JUMP OF THE CAT
export const enUs: AppTranslationKeysMap = {
  app: {
    title: 'Lets test!',
    subtitle: 'You innovate, we test!',
    welcome: (name) => `Welcome ${name}`,
  },
};

export default enUs;
