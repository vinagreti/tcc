import { Component, EventEmitter, Input, Output } from '@angular/core';
import { STEP_TYPE, TestStep } from '@/models/shared';
import { NgFor, NgForOf } from '@angular/common';
import { TestsetFormStepComponent } from '../testset-form-step/testset-form-step.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testset-form-steps',
  standalone: true,
  imports: [NgFor, NgForOf, TestsetFormStepComponent, FormsModule],
  templateUrl: './testset-form-steps.component.html',
  styleUrl: './testset-form-steps.component.scss',
})
export class TestsetFormStepsComponent {
  STEP_TYPE = STEP_TYPE;

  stepTypes = Object.values(this.STEP_TYPE);

  newStepType: STEP_TYPE | string = '';

  @Input({ required: true }) steps: TestStep[] = [];

  @Output() save = new EventEmitter<TestStep[]>();

  onSave(step: TestStep, stepIndex: number) {
    const updated: TestStep[] = [...this.steps];
    updated[stepIndex] = step;
    this.save.emit(updated);
  }

  addStep(event: any) {
    const type: STEP_TYPE = event.target.value;
    const step: TestStep = { type, value: '' } as TestStep;
    const updated: TestStep[] = [...this.steps, step];
    this.save.emit(updated);
  }

  removeStep(stepIndex: number) {
    const updated = this.steps.filter((_, i) => i !== stepIndex);
    this.save.emit(updated);
  }

  userTrackBy(index: number, step: TestStep) {
    return index;
  }
}
