import { Component, Input } from '@angular/core';
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
}
