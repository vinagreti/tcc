import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { privateKeysPageStateSelectors } from './redux/private-keys-page.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-private-keys-page',
  standalone: true,
  imports: [AsyncPipe, StoreModule],
  templateUrl: './private-keys-page.component.html',
  styleUrl: './private-keys-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateKeysPageComponent {
  private store = inject(Store);

  keys$ = this.store.select(privateKeysPageStateSelectors.selectKeys);
}
