import { createActionGroup, emptyProps } from '@ngrx/store';

export const runTestPageActions = createActionGroup({
  source: 'Run Test Page Action Group',
  events: {
    'Run Test': emptyProps(),
    'Run Test Response': emptyProps(),
  },
});
