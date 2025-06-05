import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestStep } from '../../../../../../../models/test-flow.model';

@Component({
  selector: 'app-testset-form-step-url',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './testset-form-step-url.component.html',
  styleUrl: './testset-form-step-url.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestsetFormStepUrlComponent {
  @Input({ required: true }) step!: TestStep;

  @Output() save = new EventEmitter<TestStep>();

  onSave() {
    const updated: TestStep = { ...this.step };
    this.save.emit(updated);
  }
}
