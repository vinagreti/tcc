import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';

import { TestsPageEffects } from './tests-page.effects';

describe('Tests Page Effects', () => {
  const actions$ = new ReplaySubject();
  let effects: TestsPageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestsPageEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(TestsPageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
