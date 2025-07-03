import { CommonModule } from '@angular/common';
import {
  APP_INITIALIZER,
  LOCALE_ID,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { I18nService } from './i18n.service';
import { I18nLocalesConfig, I18N_LOCALES_CONFIG } from './models/i18n-locales-config.interface';
import { I18nTranslationKeys } from './models/i18n-translation-keys';

export function localeIdFactory(localizationService: I18nService<I18nTranslationKeys>) {
  return localizationService.locale;
}

export function i18nServiceInitializer(i18n: I18nService<any>) {
  const factory = () => {
    return i18n.initService();
  };
  return factory;
}

@NgModule({
  imports: [CommonModule],
})
export class I18nModule {
  constructor(@Optional() @SkipSelf() parentModule: I18nModule) {
    if (parentModule) {
      throw new Error('I18nModule is already loaded. Import it in the Core Module only');
    }
  }

  static forRoot(config: I18nLocalesConfig): ModuleWithProviders<I18nModule> {
    return {
      ngModule: I18nModule,
      providers: [
        {
          provide: I18N_LOCALES_CONFIG,
          useValue: config,
        },
        I18nService,
        {
          provide: LOCALE_ID,
          useFactory: localeIdFactory,
          deps: [I18nService],
        },
        {
          provide: APP_INITIALIZER,
          useFactory: i18nServiceInitializer,
          multi: true,
          deps: [I18nService],
        },
      ],
    };
  }
}
