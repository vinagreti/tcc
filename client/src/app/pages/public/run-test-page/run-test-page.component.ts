import {
  COMPARISON_TYPE,
  STEP_TYPE,
  TestSet,
} from './../../../../../../models/test-flow.model';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { TestsetFormComponent } from '../../../components/testset-form/testset-form/testset-form.component';

const testSet: TestSet = {
  name: 'google test',
  description: 'test google home page',
  flows: [
    {
      itShould: 'have google title',
      steps: [
        {
          type: STEP_TYPE.VISIT,
          value: 'https://example.cypress.io/',
        },
        {
          type: STEP_TYPE.SHOULD,
          target: 'h1',
          comparison: COMPARISON_TYPE['have.text'],
          value: 'Kitchen Sink',
        },
      ],
    },
    {
      itShould: 'have google title',
      steps: [
        {
          type: STEP_TYPE.VISIT,
          value: 'https://example.cypress.io/',
        },
        {
          type: STEP_TYPE.SHOULD,
          target: 'h1',
          comparison: COMPARISON_TYPE['have.text'],
          value: 'Kitchen Sink',
        },
      ],
    },
  ],
};

@Component({
  selector: 'app-run-test-page',
  standalone: true,
  imports: [AsyncPipe, NgIf, TestsetFormComponent],
  templateUrl: './run-test-page.component.html',
  styleUrl: './run-test-page.component.scss',
})
export class RunTestPageComponent {
  responseBody$ = new ReplaySubject();

  testSet$ = new BehaviorSubject<TestSet>({
    name: '',
    description: '',
    flows: [],
  });

  constructor() {
    this.testSet$.next(testSet);
  }

  async runTest(testSet: TestSet) {
    const body = JSON.stringify(testSet);

    const request = await fetch('http://localhost:3000/run', {
      method: 'post',
      body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const responseBody = await request.text();

    this.responseBody$.next(responseBody);
  }
}
