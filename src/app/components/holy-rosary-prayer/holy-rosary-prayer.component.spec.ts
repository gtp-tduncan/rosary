import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolyRosaryPrayerComponent } from './holy-rosary-prayer.component';

describe('ActivePrayerComponent', () => {
  let component: HolyRosaryPrayerComponent;
  let fixture: ComponentFixture<HolyRosaryPrayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolyRosaryPrayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolyRosaryPrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
