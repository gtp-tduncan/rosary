import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePrayerComponent } from './active-prayer.component';

describe('ActivePrayerComponent', () => {
  let component: ActivePrayerComponent;
  let fixture: ComponentFixture<ActivePrayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePrayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
