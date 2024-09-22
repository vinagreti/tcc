import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsetFormStepFillComponent } from './testset-form-step-fill.component';

describe('TestsetFormStepFillComponent', () => {
  let component: TestsetFormStepFillComponent;
  let fixture: ComponentFixture<TestsetFormStepFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsetFormStepFillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsetFormStepFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
