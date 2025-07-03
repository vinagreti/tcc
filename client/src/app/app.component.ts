import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { storageAction } from './redux/app.actions';
import { I18nService } from './services/i18n';
import { AppTranslationKeysMap } from './i18n/i18n-translation-keys';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, StoreModule, EffectsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private store = inject(Store);

  private readonly renderer = inject(Renderer2);

  public i18n: I18nService<AppTranslationKeysMap> = inject(
    I18nService<AppTranslationKeysMap>,
  );

  ngOnInit() {
    this.renderer.listen('window', 'storage', (event) => {
      this.store.dispatch(storageAction({ payload: event.key as string }));
    });
  }
}
