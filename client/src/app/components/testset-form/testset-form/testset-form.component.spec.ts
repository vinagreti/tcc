import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsetFormComponent } from './testset-form.component';

describe('TestsetFormComponent', () => {
  let component: TestsetFormComponent;
  let fixture: ComponentFixture<TestsetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsetFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
