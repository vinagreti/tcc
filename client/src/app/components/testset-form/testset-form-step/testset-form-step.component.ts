import { Component, EventEmitter, Input, Output } from '@angular/core';
import { STEP_TYPE, TestStep } from '@/models/shared';

import { NgFor } from '@angular/common';
import { TestsetFormStepShouldComponent } from '../testset-form-actions/testset-form-step-should/testset-form-step-should.component';
import { TestsetFormStepVisitComponent } from '../testset-form-actions/testset-form-step-visit/testset-form-step-visit.component';
import { TestsetFormStepClickComponent } from '../testset-form-actions/testset-form-step-click/testset-form-step-click.component';
import { TestsetFormStepFillComponent } from '../testset-form-actions/testset-form-step-fill/testset-form-step-fill.component';
import { FormsModule } from '@angular/forms';
import { TestsetFormStepUrlComponent } from '../testset-form-actions/testset-form-step-url/testset-form-step-url.component';

@Component({
  selector: 'app-testset-form-step',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    TestsetFormStepShouldComponent,
    TestsetFormStepVisitComponent,
    TestsetFormStepClickComponent,
    TestsetFormStepFillComponent,
    TestsetFormStepUrlComponent,
  ],
  templateUrl: './testset-form-step.component.html',
  styleUrl: './testset-form-step.component.scss',
})
export class TestsetFormStepComponent {
  @Input({ required: true }) step!: TestStep;

  STEP_TYPE = STEP_TYPE;

  stepTypes = Object.values(this.STEP_TYPE);

  @Output() save = new EventEmitter<TestStep>();

  onSave(step: TestStep) {
    this.save.emit(step);
  }

  setStep(event: any) {
    const type: STEP_TYPE = event.target.value;
    const updated: TestStep = { type, value: this.step.value } as TestStep;
    this.save.emit(updated);
  }
}
