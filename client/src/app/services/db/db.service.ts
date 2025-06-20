import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import {
  COMPARISON_TYPE,
  STEP_TYPE,
  TestSet,
  TestsMap,
} from '../../../../../models/test-flow.model';

const demoTestSet: TestSet = {
  id: 'demo',
  title: 'New test',
  description: 'This is a demo test',
  flows: [
    {
      itShould: 'have Kitchen Sink title',
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

const DB_ID = 'letstest-tests';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  testsMap$ = new BehaviorSubject<TestsMap>(this.loadLocal());

  constructor() {}

  getTestById(id: string) {
    return this.testsMap$.pipe(map((testMap) => testMap[id]));
  }

  saveById(testSet: TestSet) {
    const current = this.testsMap$.value;
    const update: TestsMap = { ...current, [testSet.id]: testSet };
    this.save(update);
    return testSet;
  }

  addTest() {
    const current = this.testsMap$.value;
    const test = structuredClone(demoTestSet);
    test.id = `${Date.now()}`;
    const updated: TestsMap = { ...current, [test.id]: test };
    this.save(updated);
    return test;
  }

  dropById(id: string) {
    const update = structuredClone(this.testsMap$.value);
    delete update[id];
    this.save(update);
  }

  private save(tests: TestsMap) {
    this.testsMap$.next(tests);
    const stringified = JSON.stringify(tests);
    localStorage.setItem(DB_ID, stringified);
  }

  private loadLocal() {
    const tests = localStorage[DB_ID];
    return tests ? JSON.parse(tests) : {};
  }
}
