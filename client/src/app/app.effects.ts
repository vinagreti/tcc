import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { AppActions } from './app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {
    this.listenToActionsAndRunEffects();
  }

  private listenToActionsAndRunEffects() {
    this.actions$.pipe(
      ofType(AppActions.setTitleProps),
      map((action) => {
        console.log('action on effect', action);
        return action;
      }),
    );
  }
}
