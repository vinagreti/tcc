import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsetFormFlowsComponent } from './testset-form-flows.component';

describe('TestsetFormFlowsComponent', () => {
  let component: TestsetFormFlowsComponent;
  let fixture: ComponentFixture<TestsetFormFlowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsetFormFlowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsetFormFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
