import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestFlow, TestSet } from '@/models/shared';
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

  @Output() save = new EventEmitter<TestSet>();

  onSave(flows: TestFlow[]) {
    const updated = { ...this.testSet, flows };
    this.save.emit(updated);
  }

  onAuthorizationFlagChanged(value: boolean) {
    const authData = this.testSet.authData || {
      url: '',
      usernameInput: '',
      username: '',
      passwordInput: '',
      password: '',
      successElement: '',
      successValue: '',
    };
    const updated: TestSet = {
      ...this.testSet,
      authData,
    };
    this.save.emit(updated);
  }
}
