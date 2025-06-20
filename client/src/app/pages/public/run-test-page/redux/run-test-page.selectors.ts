import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RunTestPageState } from './run-test-page.reducers';
import { selectTests } from '../../tests-page/redux/tests-page.selectors';

export const selectRunTestPageState =
  createFeatureSelector<RunTestPageState>('runTestPageReducer');

export const selectTestRunning = createSelector(
  selectRunTestPageState,
  (state) => state.testRunning,
);

export const selectTest = (id: string) => {
  return createSelector(selectTests, (tests) =>
    tests.find((testSet) => testSet.id === id),
  );
};

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
