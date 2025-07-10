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

const selectTestError = createSelector(
  selectRunTestPageState,
  (state) => state.testError,
);

const selectScreenshotsUrls = createSelector(
  selectRunTestPageState,
  (state) => state.screenshotsUrls,
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
  selectScreenshotsUrls,
  selectOpenTabs,
  selectTestError,
};
