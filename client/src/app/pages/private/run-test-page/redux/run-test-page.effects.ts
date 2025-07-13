import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { runTestPageActions } from './run-test-page.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { TestResult } from '../../../../../../../models/test-flow.model';
import { TestErrorData } from './run-test-page.reducers';

@Injectable()
export class RunTestPageEffects {
  private actions$ = inject(Actions);

  private apiUrl = 'http://168.138.146.184';

  runTest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(runTestPageActions.runTest),
      map(({ payload }) => JSON.stringify(payload)),
      switchMap((body) =>
        fromFetch(`${this.apiUrl}/run`, {
          method: 'post',
          body,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }).pipe(
          switchMap(async (response) => {
            const responseCopy = {
              ok: response.ok,
              redirected: response.redirected,
              status: response.status,
              statusText: response.statusText,
            };
            if (response.ok) {
              return response.json().then((body) => body as TestResult);
            } else {
              return response.json().then((body) =>
                Promise.reject({
                  response: responseCopy,
                  body,
                }),
              );
            }
          }),
          map((result: TestResult) =>
            runTestPageActions.runTestResult({ payload: result }),
          ),
          catchError((error: TestErrorData) =>
            of(runTestPageActions.runTestFail({ payload: error })),
          ),
        ),
      ),
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
        return payload.log;
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
        const screenshotsUrls = payload.files.map(
          (file) => `${this.apiUrl}/static/${payload.testName}.cy.ts/${file}`,
        );
        return screenshotsUrls;
      }),
      map((screenshotsUrls) =>
        runTestPageActions.testResultScreenshotsURLPrepared({
          payload: screenshotsUrls,
        }),
      ),
    );
  });
}
