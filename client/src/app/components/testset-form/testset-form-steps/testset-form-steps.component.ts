import { Component, Input } from '@angular/core';
import { TestStep } from '../../../../../../models/test-flow.model';
import { NgFor } from '@angular/common';
import { TestsetFormStepComponent } from '../testset-form-step/testset-form-step.component';

@Component({
  selector: 'app-testset-form-steps',
  standalone: true,
  imports: [NgFor, TestsetFormStepComponent],
  templateUrl: './testset-form-steps.component.html',
  styleUrl: './testset-form-steps.component.scss',
})
export class TestsetFormStepsComponent {
  @Input({ required: true }) steps: TestStep[] = [];
}
