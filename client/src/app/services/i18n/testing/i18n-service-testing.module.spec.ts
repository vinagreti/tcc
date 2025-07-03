import { I18nLocale } from './../models/i18n-locales.enum';
import { I18nMockService, I18nServiceTestingModule } from './i18n-service-testing.module';

describe('I18nMockService', () => {
  it('should be created', () => {
    const service = new I18nMockService({});
    expect(service).toBeTruthy();
  });

  it('should set locale', () => {
    // given
    const service = new I18nMockService({});
    expect(() => {
      // when
      service.setLocale(I18nLocale.pt);
      // then
    }).not.toThrow();
  });

  it('should get enabledLocales', () => {
    // given
    const service = new I18nMockService({});
    // when
    const enabledLocales = service.enabledLocales;
    // then
    expect(enabledLocales).toBeTruthy();
  });

  it('shoud return module with providers in forRoot', () => {
    // given
    const module = I18nServiceTestingModule;
    // when
    const moduleWithProviders = module.forRoot({});
    // then
    expect(moduleWithProviders).toBeTruthy();
  });
});
