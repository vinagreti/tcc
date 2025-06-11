import { TestSet } from './../../../../../../models/test-flow.model';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { filter, map, ReplaySubject, switchMap } from 'rxjs';
import { TestsetFormComponent } from '../../../components/testset-form/testset-form/testset-form.component';
import { DbService } from '../../../services/db/db.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TestsetPreviewComponent } from '../../../components/testset-preview/testset-preview.component';
import { StoreModule } from '@ngrx/store';

@Component({
  selector: 'app-run-test-page',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    TestsetFormComponent,
    TestsetPreviewComponent,
    RouterModule,
    StoreModule,
  ],
  templateUrl: './run-test-page.component.html',
  styleUrl: './run-test-page.component.scss',
})
export class RunTestPageComponent {
  dbService = inject(DbService);

  route = inject(ActivatedRoute);

  sanitizedHtml$ = new ReplaySubject<SafeHtml>();

  responseBody$ = new ReplaySubject<{
    log: SafeHtml;
    testName: string;
    screenshotsPath: string;
  }>();

  screenshotsPath$ = this.responseBody$.pipe(
    map(({ testName }) => `${this.apiUrl}/static/${testName}.cy.ts`),
  );

  running$ = new ReplaySubject<boolean>();

  testSet$ = this.route.params.pipe(
    map(({ id }) => id),
    filter(Boolean),
    switchMap((id) => this.dbService.getTestById(id)),
  );

  private apiUrl = 'http://localhost:3000';

  private sanitizer = inject(DomSanitizer);

  onTestsetChange(testSet: TestSet) {
    this.dbService.saveById(testSet);
  }

  async runTest(testSet: TestSet) {
    this.running$.next(true);
    const body = JSON.stringify(testSet);

    const request = await fetch(`${this.apiUrl}/run`, {
      method: 'post',
      body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const responseBody = await request.json();

    this.responseBody$.next(responseBody);

    const noBlabkBgBody = responseBody.log
      .replaceAll('background:#000;', 'background:#fff;') // remove black bg
      .replaceAll('color:#888;', 'color:#000;'); // change color to black

    const sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(noBlabkBgBody);

    this.sanitizedHtml$.next(sanitizedHtml);

    this.running$.next(false);
  }
}
