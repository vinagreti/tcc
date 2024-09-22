import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsetFormStepClickComponent } from './testset-form-step-click.component';

describe('TestsetFormStepClickComponent', () => {
  let component: TestsetFormStepClickComponent;
  let fixture: ComponentFixture<TestsetFormStepClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsetFormStepClickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsetFormStepClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
