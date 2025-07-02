import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducers';

export const selectAppState = createFeatureSelector<AppState>('appReducer');

export const selectAppTitle = createSelector(
  selectAppState,
  (state) => state.title,
);
