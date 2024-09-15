import { NgFor } from '@angular/common';
import { TestFlow } from './../../../../../../models/test-flow.model';
import { Component, Input } from '@angular/core';
import { TestsetFormFlowComponent } from '../testset-form-flow/testset-form-flow.component';

@Component({
  selector: 'app-testset-form-flows',
  standalone: true,
  imports: [NgFor, TestsetFormFlowComponent],
  templateUrl: './testset-form-flows.component.html',
  styleUrl: './testset-form-flows.component.scss',
})
export class TestsetFormFlowsComponent {
  @Input({ required: true }) flows: TestFlow[] = [];
}
