import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { appReducer } from './reducers/app.reducers';
import { provideEffects } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      appReducer,
    }),
    provideStoreDevtools(),
    provideEffects([AppEffects]),
  ],
};
