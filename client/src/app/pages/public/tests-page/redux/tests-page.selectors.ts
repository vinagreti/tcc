import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TestsPageState } from './tests-page.reducers';

export const selectTestsPageState =
  createFeatureSelector<TestsPageState>('testsPageReducer');

export const selectTests = createSelector(selectTestsPageState, (state) => {
  return state.tests;
});
