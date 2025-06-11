import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RunTestPageState } from './run-test-page.reducers';

export const selectRunTestPageState =
  createFeatureSelector<RunTestPageState>('runTestPageReducer');

export const selectTestRunning = createSelector(
  selectRunTestPageState,
  (state) => state.testRunning,
);
