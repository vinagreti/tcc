import { CommonModule } from '@angular/common';
import {
  Inject,
  Injectable,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { I18nService } from './../i18n.service';
import { I18N_TRANSLATION_KEYS } from './../models/i18n-locales-config.interface';
import { I18nLocale } from './../models/i18n-locales.enum';

@Injectable({
  providedIn: 'root',
})
export class I18nMockService<T> {
  locale = I18nLocale.en;
  trans: T;
  constructor(
    @Inject(I18N_TRANSLATION_KEYS)
    i18nTranslationKeys: any,
  ) {
    this.trans = i18nTranslationKeys;
  }
  setLocale(locale: I18nLocale) {
    this.locale = locale;
  }
  get enabledLocales() {
    return [I18nLocale.en, I18nLocale.pt];
  }
}

@NgModule({
  imports: [CommonModule],
})
export class I18nServiceTestingModule {
  static forRoot(
    translationKeys: any,
  ): ModuleWithProviders<I18nServiceTestingModule> {
    return {
      ngModule: I18nServiceTestingModule,
      providers: [
        {
          provide: I18N_TRANSLATION_KEYS,
          useValue: translationKeys,
        },
        {
          provide: I18nService,
          useClass: I18nMockService,
        },
      ],
    };
  }
}
