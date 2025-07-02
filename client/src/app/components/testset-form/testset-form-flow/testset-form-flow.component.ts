import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestFlow, TestStep } from '../../../../../../models/test-flow.model';
import { FormsModule } from '@angular/forms';
import { TestsetFormStepsComponent } from '../testset-form-steps/testset-form-steps.component';

@Component({
  selector: 'app-testset-form-flow',
  standalone: true,
  imports: [FormsModule, TestsetFormStepsComponent],
  templateUrl: './testset-form-flow.component.html',
  styleUrl: './testset-form-flow.component.scss',
})
export class TestsetFormFlowComponent {
  @Input({ required: true }) flow!: TestFlow;

  @Output() save = new EventEmitter<TestFlow>();

  onSave(steps: TestStep[]) {
    const updated: TestFlow = { ...this.flow, steps };
    this.save.emit(updated);
  }
}
