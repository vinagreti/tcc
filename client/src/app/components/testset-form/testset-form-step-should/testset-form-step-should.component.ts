import { Component, Input } from '@angular/core';
import { TestStepShould } from '../../../../../../models/test-flow.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testset-form-step-should',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './testset-form-step-should.component.html',
  styleUrl: './testset-form-step-should.component.scss',
})
export class TestsetFormStepShouldComponent {
  @Input({ required: true }) step!: TestStepShould;
}
