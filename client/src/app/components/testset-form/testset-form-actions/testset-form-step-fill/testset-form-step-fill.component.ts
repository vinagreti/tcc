import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TestStepFill } from '../../../../../../../models/test-flow.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testset-form-step-fill',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './testset-form-step-fill.component.html',
  styleUrl: './testset-form-step-fill.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestsetFormStepFillComponent {
  @Input({ required: true }) step!: TestStepFill;

  @Output() save = new EventEmitter<TestStepFill>();

  onSave() {
    const updated: TestStepFill = { ...this.step };
    this.save.emit(updated);
  }
}
