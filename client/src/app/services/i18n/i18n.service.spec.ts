import { TestBed } from '@angular/core/testing';
import { I18nService } from './i18n.service';
import { I18N_LOCALES_CONFIG } from './models/i18n-locales-config.interface';
import { I18nLocale } from './models/i18n-locales.enum';

describe('I18nService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        I18nService,
        {
          provide: I18N_LOCALES_CONFIG,
          useValue: {
            defaultLocale: I18nLocale.en,
            extraLocales: [I18nLocale.pt],
            getTranslation: () => new Promise(res => res({ default: {} })),
          },
        },
      ],
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(I18nService);
    service.appService = {
      reloadMainApp: () => {},
    };
    expect(service).toBeTruthy();
  });

  it('should set fake store if in server side', () => {
    const service = TestBed.inject(I18nService);
    service.appService = {
      reloadMainApp: () => {},
    };
    // given
    service.isBrowser = false;
    // when
    service.setStore();
    //
    expect(() => {
      service.store.getItem('test');
      service.store.setItem('test', 'test');
    }).not.toThrow();
  });

  it('should get locale', () => {
    const service = TestBed.inject(I18nService);
    service.appService = {
      reloadMainApp: () => {},
    };
    // when
    const locale = service.locale;
    // then
    expect(locale).toBeTruthy();
  });

  it('should set locale', () => {
    const service = TestBed.inject(I18nService);
    service.appService = {
      reloadMainApp: () => {},
    };
    // given
    // when
    const spy = spyOn(service, 'reloadApp').and.callFake(() => {});
    service.setLocale(I18nLocale.pt);
    const locale = service.locale;
    // then
    expect(locale).toEqual(I18nLocale.pt);
  });

  it('should reload app if new location is set from outside', () => {
    const service = TestBed.inject(I18nService);
    service.appService = {
      reloadMainApp: () => {},
    };
    // given
    const locale = I18nLocale.pt;
    service.localeData.files = {};
    service.localeData.files[locale] = {};
    service.localeData.previousLocale = locale;
    // when
    const spy = spyOn(service, 'reloadApp').and.callFake(() => {});
    service.setLocale(locale);
    // then
    expect(spy).toHaveBeenCalled();
  });

  it('should set stored in setStoredOrDefaultLocale', () => {
    const service = TestBed.inject(I18nService);
    service.appService = {
      reloadMainApp: () => {},
    };
    // given
    const locale = I18nLocale.pt;
    // when
    spyOn(service, 'getLocaleFromMemory').and.returnValue(locale);
    const spy = spyOn(service, 'setLocale').and.returnValue(true);
    service.setStoredOrDefaultLocale();
    // then
    expect(spy).toHaveBeenCalledWith(locale);
  });

  it('should set default locale in setStoredOrDefaultLocale', () => {
    const service = TestBed.inject(I18nService);
    service.appService = {
      reloadMainApp: () => {},
    };
    // given
    // when
    spyOn(service, 'getLocaleFromMemory').and.returnValue(false);
    const spy = spyOn(service, 'setLocale').and.returnValue(true);
    service.setStoredOrDefaultLocale();
    // then
    expect(spy).toHaveBeenCalledWith(I18nLocale.en);
  });

  it('should return undefined from memory', () => {
    const service = TestBed.inject(I18nService);
    service.appService = {
      reloadMainApp: () => {},
    };
    // given
    service.store = {
      getItem: key => {},
      setItem: (key, value) => {},
    };
    // when
    const result = service.getLocaleFromMemory();
    // then
    expect(result).toEqual(undefined);
  });

  it('should return locale from memory', () => {
    const service = TestBed.inject(I18nService);
    service.appService = {
      reloadMainApp: () => {},
    };
    // given
    const locale = I18nLocale.pt;
    service.store = {
      getItem: key => locale,
      setItem: (key, value) => {},
    };
    // when
    const result = service.getLocaleFromMemory();
    // then
    expect(result).toEqual(locale);
  });

  it('should not reload if in server', () => {
    const service = TestBed.inject(I18nService);
    service.appService = {
      reloadMainApp: () => {},
    };
    // given
    const locale = I18nLocale.pt;
    service.isBrowser = false;
    // when
    const spy = spyOn(service, 'reloadApp');
    service.saveTranslationFileAndReload(locale, {});
    // then
    expect(spy).not.toHaveBeenCalled();
  });
});
