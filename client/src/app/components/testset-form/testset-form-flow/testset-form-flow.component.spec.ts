import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsetFormFlowComponent } from './testset-form-flow.component';

describe('TestsetFormFlowComponent', () => {
  let component: TestsetFormFlowComponent;
  let fixture: ComponentFixture<TestsetFormFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsetFormFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsetFormFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
