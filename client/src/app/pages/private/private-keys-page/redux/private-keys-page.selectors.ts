import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RunTestPageState } from './private-keys-page.reducers';

const selecPrivateKeysPageState = createFeatureSelector<RunTestPageState>(
  'privateKeysPageReducer',
);

const selectTestRunning = createSelector(
  selecPrivateKeysPageState,
  (state) => state.savingKey,
);

const selectKeys = createSelector(
  selecPrivateKeysPageState,
  (state) => state.keys,
);

export const privateKeysPageStateSelectors = {
  selecPrivateKeysPageState,
  selectTestRunning,
  selectKeys,
};
