import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import { appActions } from './app.actions';
import { runTestPageReducer } from '../pages/public/run-test-page/redux/run-test-page.reducers';
import { testsPageReducer } from '../pages/public/tests-page/redux/tests-page.reducers';

export type AppState = { title: string };

// Initial state for products and cart
export const initialAppState: AppState = { title: 'Lets Test' };

// Reducer for products (fetched from API)
export const appReducer = createReducer(
  initialAppState,
  on(appActions.setTitleProps, (_state, { payload }) => {
    return { title: payload };
  }),
);

export interface State {}

export const appReducers: ActionReducerMap<State> = {
  appReducer,
  runTestPageReducer,
  testsPageReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
