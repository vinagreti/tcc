import { OPEN_TABS, TABS } from './redux/run-test-page.reducers';
import { TestSet } from './../../../../../../models/test-flow.model';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { TestsetFormComponent } from '../../../components/testset-form/testset-form/testset-form.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TestsetPreviewComponent } from '../../../components/testset-preview/testset-preview.component';
import { Store, StoreModule } from '@ngrx/store';
import { runTestPageActions } from './redux/run-test-page.actions';
import { runTestPageStateSelectors } from './redux/run-test-page.selectors';
import { firstValueFrom, map } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { I18nService } from '@/services/i18n';
import { AppTranslationKeysMap } from '@/i18n/i18n-translation-keys';

@Component({
  selector: 'app-run-test-page',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgClass,
    TestsetFormComponent,
    TestsetPreviewComponent,
    RouterModule,
    StoreModule,
  ],
  templateUrl: './run-test-page.component.html',
  styleUrl: './run-test-page.component.scss',
})
export class RunTestPageComponent {
  tabs = TABS;

  private route = inject(ActivatedRoute);

  private sanitizer = inject(DomSanitizer);

  private store = inject(Store);

  public i18n: I18nService<AppTranslationKeysMap> = inject(
    I18nService<AppTranslationKeysMap>,
  );

  safeHtml = this.sanitizer.bypassSecurityTrustHtml;

  testResult$ = this.store.select(runTestPageStateSelectors.selectTestResult);

  testError$ = this.store.select(runTestPageStateSelectors.selectTestError);

  screenshotsURL$ = this.store.select(
    runTestPageStateSelectors.selectScreenshotsUrl,
  );

  running$ = this.store.select(runTestPageStateSelectors.selectTestRunning);

  testSet$ = this.store
    .select(
      runTestPageStateSelectors.selectTest(this.route.snapshot.params['id']),
    )
    .pipe(map((testStet) => structuredClone(testStet)));

  openTabs$ = this.store.select(runTestPageStateSelectors.selectOpenTabs);

  @HostListener('document:keydown.control.s', ['$event']) onKeydownHandler(
    event: KeyboardEvent,
  ) {
    event.preventDefault();
  }

  onTestsetChange(testSet: TestSet) {
    this.store.dispatch(runTestPageActions.saveTest({ payload: testSet }));
  }

  async runTest(testSet: TestSet) {
    const openTabs = await firstValueFrom(this.openTabs$);
    this.store.dispatch(runTestPageActions.runTest({ payload: testSet }));
    this.store.dispatch(
      runTestPageActions.setOpenTabs({
        payload: { ...openTabs, RESULT: true },
      }),
    );
  }

  async setTab(tab: TABS, add?: boolean) {
    const openTabs = await firstValueFrom(this.openTabs$);
    let payload: OPEN_TABS;

    if (add) {
      payload = { ...openTabs, [tab]: !openTabs[tab] };
    } else {
      payload = Object.keys(openTabs).reduce(
        (acc, curr) => ({ ...acc, [curr]: curr === tab }),
        {} as OPEN_TABS,
      );
    }

    this.store.dispatch(runTestPageActions.setOpenTabs({ payload }));
  }
}
