import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  ActionType,
  MetaReducer,
} from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import { appActions } from './app.actions';
import { runTestPageReducer } from '../pages/public/run-test-page/redux/run-test-page.reducers';
import { testsPageReducer } from '../pages/public/tests-page/redux/tests-page.reducers';
import { PayloadAction } from './app.actions';
import {
  Keys,
  localStorageSync,
  rehydrateApplicationState,
} from 'ngrx-store-localstorage';

const storageActionType = '@ngrx/store/storage';

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

export interface State<T = any> {}

export const localStorageSyncReducer = (
  reducer: ActionReducer<any>,
): ActionReducer<any> => {
  return (state: State<any>, action: ActionType<any>): any => {
    const keys = ['appReducer', 'testsPageReducer', 'runTestPageReducer'];
    const payloadAction: PayloadAction = action as PayloadAction;
    const isPayloadAction = 'payload' in action;
    if (
      action.type === storageActionType &&
      isPayloadAction &&
      keys.includes(payloadAction.payload as string)
    ) {
      const rehydratedState = rehydrateApplicationState(
        [payloadAction.payload] as Keys,
        localStorage,
        (k) => k,
        true,
      );
      return { ...state, ...rehydratedState };
    }
    return localStorageSync({
      keys,
      rehydrate: true,
      restoreDates: false,
    })(reducer)(state, action);
  };
};

export const appReducers: ActionReducerMap<State> = {
  appReducer,
  runTestPageReducer,
  testsPageReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode()
  ? [localStorageSyncReducer]
  : [localStorageSyncReducer];
