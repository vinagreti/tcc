import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TestsPageState } from './tests-page.reducers';

export const selectTestsPageState =
  createFeatureSelector<TestsPageState>('testsPageReducer');

export const selectFetching = createSelector(
  selectTestsPageState,
  (state) => state.fetchingTests,
);

export const selectTests = createSelector(
  selectTestsPageState,
  (state) => state.tests,
);
