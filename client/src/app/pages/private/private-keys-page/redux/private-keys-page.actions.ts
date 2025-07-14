import { createActionGroup, props } from '@ngrx/store';
import { TestSet } from '@/models/shared';

export const privateKeysPageActions = createActionGroup({
  source: 'Private Keys Page',
  events: {
    'Run Test': props<{ payload: TestSet }>(),
  },
});
