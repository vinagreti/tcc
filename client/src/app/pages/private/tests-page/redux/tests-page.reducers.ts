import { createReducer, on } from '@ngrx/store';
import { testsPageActions } from './tests-page.actions';
import { TestSet } from '../../../../../../../models/test-flow.model';
import { runTestPageActions } from '../../run-test-page/redux/run-test-page.actions';

export type TestsPageState = { tests: TestSet[] };

export const initialTestsPageState: TestsPageState = {
  tests: [],
};

export const testsPageReducer = createReducer(
  initialTestsPageState,
  on(testsPageActions.newTestAdded, (state, { payload }) => {
    return {
      ...state,
      tests: [payload, ...state.tests],
    };
  }),
  on(testsPageActions.dropTest, (state, { payload }) => {
    return {
      ...state,
      tests: state.tests.filter(({ id }) => id !== payload.id),
    };
  }),
  on(runTestPageActions.saveTest, (state, { payload }) => {
    const testSets = state.tests.filter((testSet) => testSet.id !== payload.id);
    return { ...state, tests: [...testSets, payload] };
  }),
);
