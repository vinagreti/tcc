import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { appEffects } from './redux/app.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appReducers, metaReducers } from './redux/app.reducers';

// LOAD THE ANGULAR LOCALE FILES (for each locale enabled)
import localePtExtra from '@angular/common/locales/extra/pt';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { I18nLocale, I18nModule } from './services/i18n';
import { AppTranslationKeys } from './i18n/i18n-translation-keys';

// REGISTER THE ANGULAR LOCALE FILES
registerLocaleData(localePt, I18nLocale.pt, localePtExtra);

// LOCALE LOADER
export function getTranslation(locale: I18nLocale) {
  return import(`./i18n/i18n.${locale}.ts`);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(appReducers, { metaReducers }),
    provideStoreDevtools(),
    provideEffects(appEffects),
    importProvidersFrom(
      I18nModule.forRoot({
        defaultLocale: I18nLocale.en,
        extraLocales: [I18nLocale.pt],
        getTranslation,
        translationKeys: AppTranslationKeys, // creatd on item 2
      }),
    ),
  ],
};
