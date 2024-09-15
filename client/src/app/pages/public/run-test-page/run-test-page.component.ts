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
  name: 'Cypress Kitchen Sink Page',
  description: 'This is a demo test',
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

  running$ = new ReplaySubject<boolean>();

  testSet$ = new BehaviorSubject<TestSet>({
    name: '',
    description: '',
    flows: [],
  });

  constructor() {
    this.testSet$.next(testSet);
  }

  async runTest(testSet: TestSet) {
    this.running$.next(true);
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
    this.running$.next(false);
  }
}
