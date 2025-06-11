import { createReducer, on } from '@ngrx/store';
import { runTestPageActions } from './run-test-page.actions';

export type RunTestPageState = { testRunning: boolean };

export const initialRunTestPageState: RunTestPageState = {
  testRunning: false,
};

export const runTestPageReducer = createReducer(
  initialRunTestPageState,
  on(runTestPageActions.runTest, (state, {}) => {
    return { ...state, testRunning: true };
  }),
);
