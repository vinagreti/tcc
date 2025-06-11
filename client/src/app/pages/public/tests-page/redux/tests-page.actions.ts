import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { TestSet } from '../../../../../../../models/test-flow.model';

export const testsPageActions = createActionGroup({
  source: 'Tests Page Action Group',
  events: {
    'Fetch Tests': emptyProps(),
    'Fetch Tests Response': props<{ payload: TestSet[] }>(),
    'Add New Test': emptyProps(),
    'New Test Added': props<{ payload: TestSet }>(),
    'Drop Test': props<{ payload: string }>(),
    'Test Dropped': props<{ payload: string }>(),
  },
});
