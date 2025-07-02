import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { privateKeysPageActions } from './private-keys-page.actions';
import { from, map, switchMap } from 'rxjs';

@Injectable()
export class PrivateKeysPageEffects {
  private actions$ = inject(Actions);

  private apiUrl = 'http://localhost:3000';

  runTest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(privateKeysPageActions.runTest),
      switchMap(({ payload }) => {
        const body = JSON.stringify(payload);
        const result = from(
          fetch(`${this.apiUrl}/run`, {
            method: 'post',
            body,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }),
        ).pipe(
          switchMap((resultRaw) => {
            return from(resultRaw.json());
          }),
        );
        return result;
      }),
      map((testSet) => privateKeysPageActions.runTest({ payload: testSet })),
    );
  });
}
