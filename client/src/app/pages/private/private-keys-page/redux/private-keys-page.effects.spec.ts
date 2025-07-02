import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';

import { RunTestPageEffects } from './private-keys-page.effects';

describe('RunTestPageEffects', () => {
  const actions$ = new ReplaySubject();
  let effects: RunTestPageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RunTestPageEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(RunTestPageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
