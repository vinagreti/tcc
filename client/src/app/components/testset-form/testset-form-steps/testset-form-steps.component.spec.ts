import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsetFormStepsComponent } from './testset-form-steps.component';

describe('TestsetFormStepsComponent', () => {
  let component: TestsetFormStepsComponent;
  let fixture: ComponentFixture<TestsetFormStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsetFormStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsetFormStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
