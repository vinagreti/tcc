import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsetFormStepVisitComponent } from './testset-form-step-visit.component';

describe('TestsetFormStepVisitComponent', () => {
  let component: TestsetFormStepVisitComponent;
  let fixture: ComponentFixture<TestsetFormStepVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsetFormStepVisitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsetFormStepVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
