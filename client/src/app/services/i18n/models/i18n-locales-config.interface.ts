import { InjectionToken } from '@angular/core';
import { I18nLocale } from './i18n-locales.enum';
import { I18nTranslationKeys } from './i18n-translation-keys';

export interface I18nLocalesConfig {
  defaultLocale: I18nLocale;
  extraLocales: I18nLocale[];
  storagePath?: string;
  /** import function used to import the files
   * example:
   *
   * {app: {title: 'AppTitle', version: (v) => `Version ${v}`}}
   */
  translationKeys: I18nTranslationKeys;
  /** import function used to import the files
   * example:
   *
   * (locale: I18nLocale) => import( ./i18n.${locale}.ts );
   */
  getTranslation?: (locale: I18nLocale) => Promise<I18nTranslationKeys>;
}

export const I18N_LOCALES_CONFIG = new InjectionToken<I18nLocalesConfig>('I18N_LOCALES_CONFIG');

export const I18N_TRANSLATION_KEYS = new InjectionToken<I18nTranslationKeys>(
  'I18N_TRANSLATION_KEYS',
);
