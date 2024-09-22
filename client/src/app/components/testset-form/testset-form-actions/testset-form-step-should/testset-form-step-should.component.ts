import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  COMPARISON_TYPE,
  TestStepShould,
} from '../../../../../../../models/test-flow.model';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-testset-form-step-should',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './testset-form-step-should.component.html',
  styleUrl: './testset-form-step-should.component.scss',
})
export class TestsetFormStepShouldComponent {
  comparisonTypes = Object.values(COMPARISON_TYPE);

  @Input({ required: true }) step!: TestStepShould;

  @Output() save = new EventEmitter<TestStepShould>();

  onSave() {
    const updated: TestStepShould = { ...this.step };
    this.save.emit(updated);
  }
}
