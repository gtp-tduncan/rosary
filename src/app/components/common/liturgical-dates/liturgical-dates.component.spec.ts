import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LIT_DATES_2020 } from 'src/utils/key-dates';

import { LiturgicalDatesComponent } from './liturgical-dates.component';

describe('LiturgicalDatesComponent', () => {
  let component: LiturgicalDatesComponent;
  let fixture: ComponentFixture<LiturgicalDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiturgicalDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiturgicalDatesComponent);
    component = fixture.componentInstance;
    component.liturgicalDates = LIT_DATES_2020;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
