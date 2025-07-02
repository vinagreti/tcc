import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsetPreviewComponent } from './testset-preview.component';

describe('TestsetPreviewComponent', () => {
  let component: TestsetPreviewComponent;
  let fixture: ComponentFixture<TestsetPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsetPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsetPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
