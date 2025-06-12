import { createActionGroup, props } from '@ngrx/store';
import {
  TestResult,
  TestSet,
} from '../../../../../../../models/test-flow.model';
import { SafeHtml } from '@angular/platform-browser';

export const runTestPageActions = createActionGroup({
  source: 'Run Test Page',
  events: {
    'Run Test': props<{ payload: TestSet }>(),
    'Run Test Result': props<{ payload: TestResult }>(),
    'Fetch Test': props<{ payload: string }>(),
    'Fetch Test Result': props<{ payload: TestSet }>(),
    'Prepare Test Result HTML': props<{ payload: TestResult }>(),
    'Test Result HTML Prepared': props<{ payload: SafeHtml }>(),
    'Prepare Test Result Screenshots URL': props<{ payload: TestResult }>(),
    'Test Result Screenshots URL Prepared': props<{ payload: SafeHtml }>(),
    'Save Test': props<{ payload: TestSet }>(),
    'Test Saved': props<{ payload: TestSet }>(),
  },
});
