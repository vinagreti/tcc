import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { testsPageActions } from './tests-page.actions';
import { map, switchMap } from 'rxjs';
import { DbService } from '../../../../services/db/db.service';

@Injectable()
export class TestsPageEffects {
  private dbService = inject(DbService);

  private actions$ = inject(Actions);

  fetchTests$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(testsPageActions.fetchTests),
      switchMap(() => {
        return this.dbService.testsMap$.pipe(
          map((testsMap) => Object.values(testsMap)),
          map((tests) => {
            return testsPageActions.fetchTestsResponse({ payload: tests });
          }),
        );
      }),
    );
  });

  addNewTest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(testsPageActions.addNewTest),
      map(() => {
        const testSet = this.dbService.addTest();
        return testsPageActions.newTestAdded({ payload: testSet });
      }),
    );
  });

  dropTest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(testsPageActions.dropTest),
      map(({ payload }) => {
        const testSet = this.dbService.dropById(payload);
        return testsPageActions.testDropped({ payload });
      }),
    );
  });
}
