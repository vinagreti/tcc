import { AppTranslationKeysMap } from '@/i18n/i18n-translation-keys';
import { I18nService } from '@/services/i18n';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-org-page',
  standalone: true,
  imports: [],
  templateUrl: './org-page.component.html',
  styleUrl: './org-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrgPageComponent {
  public i18n: I18nService<AppTranslationKeysMap> = inject(
    I18nService<AppTranslationKeysMap>,
  );
}
