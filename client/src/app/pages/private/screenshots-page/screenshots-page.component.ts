import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { runTestPageStateSelectors } from '../run-test-page/redux/run-test-page.selectors';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-screenshots-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './screenshots-page.component.html',
  styleUrl: './screenshots-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenshotsPageComponent {
  private route = inject(ActivatedRoute);

  private store = inject(Store);

  screenshotsURLs$ = this.store.select(
    runTestPageStateSelectors.selectScreenshotsUrls,
  );
}
