import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerConfigComponent } from './prayer-config.component';

describe('PrayerConfigComponent', () => {
  let component: PrayerConfigComponent;
  let fixture: ComponentFixture<PrayerConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayerConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
