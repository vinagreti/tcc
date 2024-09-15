import { Component, Input } from '@angular/core';
import { STEP_TYPE, TestStep } from '../../../../../../models/test-flow.model';
import { TestsetFormStepShouldComponent } from '../testset-form-step-should/testset-form-step-should.component';
import { TestsetFormStepVisitComponent } from '../testset-form-step-visit/testset-form-step-visit.component';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-testset-form-step',
  standalone: true,
  imports: [
    NgSwitch,
    TestsetFormStepShouldComponent,
    TestsetFormStepVisitComponent,
  ],
  templateUrl: './testset-form-step.component.html',
  styleUrl: './testset-form-step.component.scss',
})
export class TestsetFormStepComponent {
  @Input({ required: true }) step!: TestStep;

  STEP_TYPE = STEP_TYPE;
}
