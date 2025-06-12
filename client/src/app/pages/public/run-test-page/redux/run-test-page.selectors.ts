import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RunTestPageState } from './run-test-page.reducers';

export const selectRunTestPageState =
  createFeatureSelector<RunTestPageState>('runTestPageReducer');

export const selectTestRunning = createSelector(
  selectRunTestPageState,
  (state) => state.testRunning,
);

export const selectTest = createSelector(
  selectRunTestPageState,
  (state) => state.test,
);

export const selectTestResult = createSelector(
  selectRunTestPageState,
  (state) => state.testResult,
);

export const selectTestResultSafeHtml = createSelector(
  selectRunTestPageState,
  (state) => state.testResultSafeHtml,
);

export const selectScreenshotsUrl = createSelector(
  selectRunTestPageState,
  (state) => state.screenshotsUrl,
);
