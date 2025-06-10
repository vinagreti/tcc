import { createReducer, on } from '@ngrx/store';
import { AppActions } from './../app.actions';

export type AppState = { title: string };

// Initial state for products and cart
export const initialAppState: AppState = { title: 'Lets Test' };

// Reducer for products (fetched from API)
export const appReducer = createReducer(
  initialAppState,
  on(AppActions.setTitleProps, (_state, { payload }) => {
    return { title: payload };
  }),
);
