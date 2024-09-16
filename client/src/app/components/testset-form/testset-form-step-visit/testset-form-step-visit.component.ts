import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestStepVisit } from '../../../../../../models/test-flow.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testset-form-step-visit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './testset-form-step-visit.component.html',
  styleUrl: './testset-form-step-visit.component.scss',
})
export class TestsetFormStepVisitComponent {
  @Input({ required: true }) step!: TestStepVisit;

  @Output() save = new EventEmitter<TestStepVisit>();

  onSave() {
    const updated: TestStepVisit = { ...this.step };
    this.save.emit(updated);
  }
}
