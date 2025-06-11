import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { runTestPageActions } from './run-test-page.actions';
import { map } from 'rxjs';

@Injectable()
export class RunTestPageEffects {
  constructor(private actions$: Actions) {
    this.actions$.pipe(
      ofType(runTestPageActions.runTest),
      map((action) => {
        return action;
      }),
    );
  }
}
