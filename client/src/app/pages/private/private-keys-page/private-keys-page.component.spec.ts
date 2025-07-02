import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateKeysPageComponent } from './private-keys-page.component';

describe('PrivateKeysPageComponent', () => {
  let component: PrivateKeysPageComponent;
  let fixture: ComponentFixture<PrivateKeysPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateKeysPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateKeysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
