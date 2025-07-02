import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { testsPageActions } from './tests-page.actions';
import { map } from 'rxjs';
import {
  COMPARISON_TYPE,
  STEP_TYPE,
  TestSet,
} from '../../../../../../../models/test-flow.model';

const demoTestSet: TestSet = {
  id: 'demo',
  title: 'New test',
  description: 'This is a demo test',
  flows: [
    {
      itShould: 'have Kitchen Sink title',
      steps: [
        {
          type: STEP_TYPE.VISIT,
          value: 'https://example.cypress.io/',
        },
        {
          type: STEP_TYPE.SHOULD,
          target: 'h1',
          comparison: COMPARISON_TYPE['have.text'],
          value: 'Kitchen Sink',
        },
      ],
    },
  ],
};

@Injectable()
export class TestsPageEffects {
  private actions$ = inject(Actions);

  addNewTest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(testsPageActions.addNewTest),
      map(() => {
        const test = structuredClone(demoTestSet);
        test.id = `${Date.now()}`;
        return testsPageActions.newTestAdded({ payload: test });
      }),
    );
  });
}
