import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { privateKeysPageStateSelectors } from './redux/private-keys-page.selectors';
import { AsyncPipe } from '@angular/common';
import { I18nService } from '@/services/i18n';
import { AppTranslationKeysMap } from '@/i18n/i18n-translation-keys';

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

  public i18n: I18nService<AppTranslationKeysMap> = inject(
    I18nService<AppTranslationKeysMap>,
  );

  keys$ = this.store.select(privateKeysPageStateSelectors.selectKeys);
}
