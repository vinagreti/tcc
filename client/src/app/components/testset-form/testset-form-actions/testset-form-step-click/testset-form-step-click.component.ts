import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TestStep } from '../../../../../../../models/test-flow.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testset-form-step-click',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './testset-form-step-click.component.html',
  styleUrl: './testset-form-step-click.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestsetFormStepClickComponent {
  @Input({ required: true }) step!: TestStep;

  @Output() save = new EventEmitter<TestStep>();

  onSave() {
    const updated: TestStep = { ...this.step };
    this.save.emit(updated);
  }
}
