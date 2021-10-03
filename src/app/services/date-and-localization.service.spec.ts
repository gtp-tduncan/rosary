import { TestBed } from '@angular/core/testing';
import { AppDateService } from './app-date.service';

import { DateAndLocalizationService } from './date-and-localization.service';

describe('DateAndLocalizationService', () => {
  let service: DateAndLocalizationService;
  let appDate: AppDateService;

  beforeEach(() => {
    appDate = new AppDateService();

    TestBed.configureTestingModule({
      providers: [
        { provide: AppDateService, useValue: appDate }
      ]
    });
    service = TestBed.inject(DateAndLocalizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
