import { NgFor } from '@angular/common';
import { TestFlow } from '@/models/shared';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() save = new EventEmitter<TestFlow[]>();

  onSave(flow: TestFlow, flowIndex: number) {
    const updated: TestFlow[] = [...this.flows];
    updated[flowIndex] = flow;
    this.save.emit(updated);
  }

  addFlow() {
    const updated: TestFlow[] = [...this.flows, { itShould: '', steps: [] }];
    this.save.emit(updated);
  }

  userTrackBy(index: number, flow: TestFlow) {
    return index;
  }

  removeFlow(flowIndex: number) {
    const updated = this.flows.filter((_, i) => i !== flowIndex);
    this.save.emit(updated);
  }
}
