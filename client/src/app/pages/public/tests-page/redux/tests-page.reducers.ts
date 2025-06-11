import { createReducer, on } from '@ngrx/store';
import { testsPageActions } from './tests-page.actions';
import { TestSet } from '../../../../../../../models/test-flow.model';

export type TestsPageState = { fetchingTests: boolean; tests: TestSet[] };

export const initialTestsPageState: TestsPageState = {
  fetchingTests: false,
  tests: [],
};

export const testsPageReducer = createReducer(
  initialTestsPageState,
  on(testsPageActions.fetchTests, (state, {}) => {
    return { ...state, fetchingTests: true };
  }),
  on(testsPageActions.fetchTestsResponse, (state, { payload }) => {
    return { ...state, fetchingTests: false, tests: payload };
  }),
);
