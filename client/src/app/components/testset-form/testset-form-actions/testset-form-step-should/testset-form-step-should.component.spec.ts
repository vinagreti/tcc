import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsetFormStepShouldComponent } from './testset-form-step-should.component';

describe('TestsetFormStepShouldComponent', () => {
  let component: TestsetFormStepShouldComponent;
  let fixture: ComponentFixture<TestsetFormStepShouldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsetFormStepShouldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsetFormStepShouldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
