import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { testsPageActions } from './redux/tests-page.actions';
import { selectTests } from './redux/tests-page.selectors';

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

  tests$ = this.store.select(selectTests);

  constructor() {
    this.loadTestsList();
  }

  addNewTest() {
    this.store.dispatch(testsPageActions.addNewTest());
  }

  dropTest(id: string) {
    this.store.dispatch(testsPageActions.dropTest({ payload: id }));
  }

  private loadTestsList() {
    this.store.dispatch(testsPageActions.fetchTests());
  }
}
