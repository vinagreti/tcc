import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunTestPageComponent } from './run-test-page.component';

describe('RunTestPageComponent', () => {
  let component: RunTestPageComponent;
  let fixture: ComponentFixture<RunTestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunTestPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
