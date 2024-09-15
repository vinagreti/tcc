import { Component, Input } from '@angular/core';
import { TestSet } from '../../../../../../models/test-flow.model';
import { FormsModule } from '@angular/forms';
import { TestsetFormFlowsComponent } from '../testset-form-flows/testset-form-flows.component';
import { TestsetFormFlowComponent } from '../testset-form-flow/testset-form-flow.component';

@Component({
  selector: 'app-testset-form',
  standalone: true,
  imports: [FormsModule, TestsetFormFlowsComponent, TestsetFormFlowComponent],
  templateUrl: './testset-form.component.html',
  styleUrl: './testset-form.component.scss',
})
export class TestsetFormComponent {
  @Input({ required: true }) testSet!: TestSet;
}
