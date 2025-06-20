import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { runTestPageActions } from './run-test-page.actions';
import { from, map, of, switchMap } from 'rxjs';
import { DbService } from '../../../../services/db/db.service';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class RunTestPageEffects {
  private dbService = inject(DbService);

  private sanitizer = inject(DomSanitizer);

  private actions$ = inject(Actions);

  private apiUrl = 'http://localhost:3000';

  runTest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(runTestPageActions.runTest),
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
            console.log('hehe');
            return from(resultRaw.json());
          }),
        );
        return result;
      }),
      map((testSet) => runTestPageActions.runTestResult({ payload: testSet })),
    );
  });

  runTestResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(runTestPageActions.runTestResult),
      switchMap(({ payload }) =>
        of(
          runTestPageActions.prepareTestResultHTML({ payload: payload }),
          runTestPageActions.prepareTestResultScreenshotsURL({
            payload: payload,
          }),
        ),
      ),
    );
  });

  prepareTestResultHTML$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(runTestPageActions.prepareTestResultHTML),
      map(({ payload }) => {
        const sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(
          payload.log,
        );
        return sanitizedHtml;
      }),
      map((sanitizedHtml) =>
        runTestPageActions.testResultHTMLPrepared({ payload: sanitizedHtml }),
      ),
    );
  });

  prepareTestResultScreenshotsUrl$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(runTestPageActions.prepareTestResultScreenshotsURL),
      map(({ payload }) => {
        const screenshotsUrl = `${this.apiUrl}/static/${payload.testName}.cy.ts`;
        return screenshotsUrl;
      }),
      map((screenshotsUrl) =>
        runTestPageActions.testResultScreenshotsURLPrepared({
          payload: screenshotsUrl,
        }),
      ),
    );
  });
}
