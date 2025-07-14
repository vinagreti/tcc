import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestStep } from '@/models/shared';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testset-form-step-visit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './testset-form-step-visit.component.html',
  styleUrl: './testset-form-step-visit.component.scss',
})
export class TestsetFormStepVisitComponent {
  @Input({ required: true }) step!: TestStep;

  @Output() save = new EventEmitter<TestStep>();

  onSave() {
    const updated: TestStep = { ...this.step };
    this.save.emit(updated);
  }
}
