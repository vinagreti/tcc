import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsetFormStepUrlComponent } from './testset-form-step-url.component';

describe('TestsetFormStepUrlComponent', () => {
  let component: TestsetFormStepUrlComponent;
  let fixture: ComponentFixture<TestsetFormStepUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsetFormStepUrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsetFormStepUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
