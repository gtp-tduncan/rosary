import { TestBed } from '@angular/core/testing';
import { LIT_DATES_2020, LIT_DATES_2021, LIT_YEAR_2020_2021, Months } from 'src/utils/key-dates';
import { LiturgicalDates, LiturgicalPeriod } from '../models/liturgical-dates';
import { AppDateService } from './app-date.service';
import { DateAndLocalizationService } from './date-and-localization.service';

import { LiturgicalYearService } from './liturgical-year.service';

describe('LiturgicalYearService', () => {
  let service: LiturgicalYearService;
  let appDate: AppDateService;

  beforeEach(() => {
    appDate = new AppDateService();

    TestBed.configureTestingModule({
      providers: [
        { provide: AppDateService, useValue: appDate },
        DateAndLocalizationService
      ]
    });
    service = TestBed.inject(LiturgicalYearService);
  });

  it('should match expected results for 2020', () => {
    const fakeNow = new Date(2020, Months.JAN, 1);
    appDate = new AppDateService(fakeNow);

    const localization = new DateAndLocalizationService(appDate);
    service = new LiturgicalYearService(localization);
    expect(service).toBeTruthy();
    expect(service.liturgicalDates).toBeTruthy();
    expectLiturgicalDatesToMatch(service.liturgicalDates, LIT_DATES_2020);
  });

  it('should match expected results for 2021', () => {
    const fakeNow = new Date(2021, Months.JAN, 1);
    appDate = new AppDateService(fakeNow);

    const localization = new DateAndLocalizationService(appDate);
    service = new LiturgicalYearService(localization);
    expect(service).toBeTruthy();
    expect(service.liturgicalDates).toBeTruthy();
    expectLiturgicalDatesToMatch(service.liturgicalDates, LIT_DATES_2021);
  });

  it('should match expected results for liturgical year 2020/2021', () => {
    const fakeNow = new Date(2020, Months.NOV, 27);
    appDate = new AppDateService(fakeNow);

    const localization = new DateAndLocalizationService(appDate);
    service = new LiturgicalYearService(localization);
    expect(service).toBeTruthy();
    expect(service.liturgicalDates).toBeTruthy();
    expectLiturgicalDatesToMatch(service.liturgicalDates, LIT_YEAR_2020_2021);
  });

});

function expectLiturgicalDatesToMatch(date1: LiturgicalDates, date2: LiturgicalDates) {
  expectLiturgicalPeriodsToMatch(date1.advent, date2.advent);
  expectLiturgicalPeriodsToMatch(date1.christmas, date2.christmas);
  expectLiturgicalPeriodsToMatch(date1.easter, date2.easter);
  expectLiturgicalPeriodsToMatch(date1.lent, date2.lent);
  expectLiturgicalPeriodsToMatch(date1.triduum, date2.triduum);
}

function expectLiturgicalPeriodsToMatch(period1: LiturgicalPeriod, period2: LiturgicalPeriod) {
  expect(period1.startDate).toEqual(period2.startDate);
  expect(period1.endDate).toEqual(period2.endDate);
}
