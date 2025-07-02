import { createActionGroup, props } from '@ngrx/store';
import { TestSet } from '../../../../../../../models/test-flow.model';

export const privateKeysPageActions = createActionGroup({
  source: 'Private Keys Page',
  events: {
    'Run Test': props<{ payload: TestSet }>(),
  },
});
