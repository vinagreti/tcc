import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { appActions } from './app.actions';
import { RunTestPageEffects } from '@/pages/private/run-test-page/redux/run-test-page.effects';
import { TestsPageEffects } from '@/pages/private/tests-page/redux/tests-page.effects';
import { PrivateKeysPageEffects } from '@/pages/private/private-keys-page/redux/private-keys-page.effects';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {
    this.listenToActionsAndRunEffects();
  }

  private listenToActionsAndRunEffects() {
    this.actions$.pipe(
      ofType(appActions.setTitleProps),
      map((action) => {
        return action;
      }),
    );
  }
}

export const appEffects = [
  AppEffects,
  RunTestPageEffects,
  TestsPageEffects,
  PrivateKeysPageEffects,
];
