import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotsPageComponent } from './screenshots-page.component';

describe('ScreenshotsPageComponent', () => {
  let component: ScreenshotsPageComponent;
  let fixture: ComponentFixture<ScreenshotsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenshotsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenshotsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
