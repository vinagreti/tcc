import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { TestSet } from '@/models/shared';

export const testsPageActions = createActionGroup({
  source: 'Tests Page',
  events: {
    'Add New Test': emptyProps(),
    'New Test Added': props<{ payload: TestSet }>(),
    'Drop Test': props<{ payload: TestSet }>(),
    'Test Dropped': props<{ payload: string }>(),
  },
});
