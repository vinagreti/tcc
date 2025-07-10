import { createReducer, on } from '@ngrx/store';
import { runTestPageActions } from './run-test-page.actions';
import {
  TestResult,
  TestSet,
} from '../../../../../../../models/test-flow.model';

export enum TABS {
  EDIT = 'EDIT',
  PREVIEW = 'PREVIEW',
  RESULT = 'RESULT',
}

export type OPEN_TABS = {
  EDIT: boolean;
  PREVIEW: boolean;
  RESULT: boolean;
};

export type TestErrorData = { response: Response; body: { error: string } };

export type RunTestPageState = {
  testRunning: boolean;
  testResult?: TestResult;
  testError?: TestErrorData;
  screenshotsUrls?: string[];
  test?: TestSet;
  openTabs: OPEN_TABS;
};

export const initialRunTestPageState: RunTestPageState = {
  testRunning: false,
  openTabs: {
    EDIT: true,
    PREVIEW: false,
    RESULT: false,
  },
};

export const runTestPageReducer = createReducer(
  initialRunTestPageState,
  on(runTestPageActions.runTest, (state, { payload }) => {
    const newState: RunTestPageState = {
      ...state,
      testRunning: true,
      testError: undefined,
      testResult: undefined,
      test: payload,
    };
    return newState;
  }),
  on(
    runTestPageActions.runTestResult,
    runTestPageActions.runTestFail,
    (state) => {
      const newState: RunTestPageState = {
        ...state,
        testRunning: false,
      };
      return newState;
    },
  ),
  on(runTestPageActions.runTestFail, (state, { payload }) => {
    const newState: RunTestPageState = {
      ...state,
      testResult: undefined,
      testError: payload,
    };
    return newState;
  }),
  on(runTestPageActions.runTestResult, (state, { payload }) => {
    const newState: RunTestPageState = {
      ...state,
      testResult: payload,
      testError: undefined,
    };
    return newState;
  }),
  on(
    runTestPageActions.testResultScreenshotsURLPrepared,
    (state, { payload }) => {
      const newState: RunTestPageState = { ...state, screenshotsUrls: payload };
      return newState;
    },
  ),
  on(runTestPageActions.setOpenTabs, (state, { payload }) => {
    const hasselectedTabs = Object.values(payload).reduce(
      (acc, curr) => acc || curr,
      false,
    );
    const newState: RunTestPageState = {
      ...state,
      openTabs: {
        ...payload,
        EDIT: hasselectedTabs ? payload.EDIT : true,
      },
    };
    return newState;
  }),
);
