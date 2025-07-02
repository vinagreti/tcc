import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { appEffects } from './redux/app.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appReducers, metaReducers } from './redux/app.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(appReducers, { metaReducers }),
    provideStoreDevtools(),
    provideEffects(appEffects),
  ],
};
