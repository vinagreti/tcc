import { createActionGroup, props } from '@ngrx/store';
import {
  TestResult,
  TestSet,
} from '../../../../../../../models/test-flow.model';
import { SafeHtml } from '@angular/platform-browser';
import { OPEN_TABS, TestErrorData } from './run-test-page.reducers';

export const runTestPageActions = createActionGroup({
  source: 'Run Test Page',
  events: {
    'Run Test': props<{ payload: TestSet }>(),
    'Run Test Result': props<{ payload: TestResult }>(),
    'Run Test Fail': props<{
      payload: TestErrorData;
    }>(),
    'Prepare Test Result HTML': props<{ payload: TestResult }>(),
    'Test Result HTML Prepared': props<{ payload: SafeHtml }>(),
    'Prepare Test Result Screenshots URL': props<{ payload: TestResult }>(),
    'Test Result Screenshots URL Prepared': props<{ payload: string[] }>(),
    'Save Test': props<{ payload: TestSet }>(),
    'Test Saved': props<{ payload: TestSet }>(),
    'Set Open Tabs': props<{ payload: OPEN_TABS }>(),
  },
});
