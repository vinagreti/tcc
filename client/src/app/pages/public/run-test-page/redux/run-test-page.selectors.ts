import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RunTestPageState } from './run-test-page.reducers';
import { selectTests } from '../../tests-page/redux/tests-page.selectors';

const selectRunTestPageState =
  createFeatureSelector<RunTestPageState>('runTestPageReducer');

const selectTestRunning = createSelector(
  selectRunTestPageState,
  (state) => state.testRunning,
);

const selectTest = (id: string) => {
  return createSelector(selectTests, (tests) =>
    tests.find((testSet) => testSet.id === id),
  );
};

const selectTestResult = createSelector(
  selectRunTestPageState,
  (state) => state.testResult,
);

const selectTestResultSafeHtml = createSelector(
  selectRunTestPageState,
  (state) => state.testResultSafeHtml,
);

const selectScreenshotsUrl = createSelector(
  selectRunTestPageState,
  (state) => state.screenshotsUrl,
);

const selectOpenTabs = createSelector(
  selectRunTestPageState,
  (state) => state.openTabs,
);

export const runTestPageStateSelectors = {
  selectRunTestPageState,
  selectTestRunning,
  selectTest,
  selectTestResult,
  selectTestResultSafeHtml,
  selectScreenshotsUrl,
  selectOpenTabs,
};
