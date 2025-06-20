import { TestSet } from './../../../../../../models/test-flow.model';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { TestsetFormComponent } from '../../../components/testset-form/testset-form/testset-form.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TestsetPreviewComponent } from '../../../components/testset-preview/testset-preview.component';
import { Store, StoreModule } from '@ngrx/store';
import { runTestPageActions } from './redux/run-test-page.actions';
import {
  selectScreenshotsUrl,
  selectTest,
  selectTestResult,
  selectTestResultSafeHtml,
  selectTestRunning,
} from './redux/run-test-page.selectors';
import { map } from 'rxjs';

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
  private route = inject(ActivatedRoute);

  private store = inject(Store);

  sanitizedHtml$ = this.store.select(selectTestResultSafeHtml);

  testResult$ = this.store.select(selectTestResult);

  screenshotsURL$ = this.store.select(selectScreenshotsUrl);

  running$ = this.store.select(selectTestRunning);

  testSet$ = this.store
    .select(selectTest(this.route.snapshot.params['id']))
    .pipe(map((testStet) => structuredClone(testStet)));

  @HostListener('document:keydown.control.s', ['$event']) onKeydownHandler(
    event: KeyboardEvent,
  ) {
    event.preventDefault();
  }

  onTestsetChange(testSet: TestSet) {
    this.store.dispatch(runTestPageActions.saveTest({ payload: testSet }));
  }

  async runTest(testSet: TestSet) {
    this.store.dispatch(runTestPageActions.runTest({ payload: testSet }));
  }
}
