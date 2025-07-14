import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TestStepShould } from '@/models/shared';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { COMPARISON_TYPE } from '@/models/shared';
import { I18nService } from '@/services/i18n';
import { AppTranslationKeysMap } from '@/i18n/i18n-translation-keys';

@Component({
  selector: 'app-testset-form-step-should',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './testset-form-step-should.component.html',
  styleUrl: './testset-form-step-should.component.scss',
})
export class TestsetFormStepShouldComponent {
  comparisonTypes = Object.values(COMPARISON_TYPE);

  public i18n: I18nService<AppTranslationKeysMap> = inject(
    I18nService<AppTranslationKeysMap>,
  );

  @Input({ required: true }) step!: TestStepShould;

  @Output() save = new EventEmitter<TestStepShould>();

  onSave() {
    const updated: TestStepShould = { ...this.step };
    this.save.emit(updated);
  }
}
