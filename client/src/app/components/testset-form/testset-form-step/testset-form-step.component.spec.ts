import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsetFormStepComponent } from './testset-form-step.component';

describe('TestsetFormStepComponent', () => {
  let component: TestsetFormStepComponent;
  let fixture: ComponentFixture<TestsetFormStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsetFormStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsetFormStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
