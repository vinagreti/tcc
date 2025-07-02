import { createReducer, on } from '@ngrx/store';
import { privateKeysPageActions } from './private-keys-page.actions';

export type RunTestPageState = {
  savingKey: boolean;
  keys: { key: string; value: string }[];
};

export const initialRunTestPageState: RunTestPageState = {
  savingKey: false,
  keys: [],
};

export const privateKeysPageReducer = createReducer(
  initialRunTestPageState,
  on(privateKeysPageActions.runTest, (state, { payload }) => {
    const newState: RunTestPageState = {
      ...state,
      savingKey: true,
    };
    return newState;
  }),
);
