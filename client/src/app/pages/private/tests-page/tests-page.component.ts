import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { testsPageActions } from './redux/tests-page.actions';
import { selectTests } from './redux/tests-page.selectors';
import { TestSet } from '@/models/shared';
import { I18nService } from '@/services/i18n';
import { AppTranslationKeysMap } from '@/i18n/i18n-translation-keys';

@Component({
  selector: 'app-tests-page',
  standalone: true,
  imports: [NgFor, AsyncPipe, RouterLink, StoreModule],
  templateUrl: './tests-page.component.html',
  styleUrl: './tests-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestsPageComponent {
  private store = inject(Store);

  public i18n: I18nService<AppTranslationKeysMap> = inject(
    I18nService<AppTranslationKeysMap>,
  );

  tests$ = this.store.select(selectTests);

  addNewTest() {
    this.store.dispatch(testsPageActions.addNewTest());
  }

  dropTest(test: TestSet) {
    this.store.dispatch(testsPageActions.dropTest({ payload: test }));
  }
}
