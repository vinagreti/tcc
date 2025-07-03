import { I18nLocale } from './i18n-locales.enum';
import { I18nTranslationKeys } from './i18n-translation-keys';

export interface I18nData {
  files: { [key: string]: I18nTranslationKeys };
  locale?: I18nLocale;
  previousLocale?: I18nLocale;
}
