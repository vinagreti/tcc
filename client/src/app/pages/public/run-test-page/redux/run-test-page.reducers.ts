import { createReducer, on } from '@ngrx/store';
import { runTestPageActions } from './run-test-page.actions';
import {
  TestResult,
  TestSet,
} from '../../../../../../../models/test-flow.model';
import { SafeHtml } from '@angular/platform-browser';

export type RunTestPageState = {
  testRunning: boolean;
  loadingTest: boolean;
  test?: TestSet;
  testResult?: TestResult;
  testResultSafeHtml?: SafeHtml;
  screenshotsUrl?: SafeHtml;
};

export const initialRunTestPageState: RunTestPageState = {
  testRunning: false,
  loadingTest: false,
};

export const runTestPageReducer = createReducer(
  initialRunTestPageState,
  on(runTestPageActions.fetchTest, (state, { payload }) => {
    return { ...state, loadingTest: true };
  }),
  on(runTestPageActions.fetchTestResult, (state, { payload }) => {
    return { ...state, loadingTest: false, test: payload };
  }),
  on(runTestPageActions.runTest, (state, { payload }) => {
    return { ...state, testRunning: true, test: payload };
  }),
  on(runTestPageActions.runTestResult, (state, { payload }) => {
    return { ...state, testRunning: false, testResult: payload };
  }),
  on(runTestPageActions.testResultHTMLPrepared, (state, { payload }) => {
    return { ...state, testRunning: false, testResultSafeHtml: payload };
  }),
  on(
    runTestPageActions.testResultScreenshotsURLPrepared,
    (state, { payload }) => {
      return { ...state, testRunning: false, screenshotsUrl: payload };
    },
  ),
);
