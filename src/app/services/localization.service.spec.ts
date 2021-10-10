import { TestBed } from '@angular/core/testing';
import { AppDateService } from './app-date.service';

import { LocalizationService } from './localization.service';

describe('DateAndLocalizationService', () => {
  let service: LocalizationService;
  let appDate: AppDateService;

  beforeEach(() => {
    appDate = new AppDateService();

    TestBed.configureTestingModule({
      providers: [
        { provide: AppDateService, useValue: appDate }
      ]
    });
    service = TestBed.inject(LocalizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
