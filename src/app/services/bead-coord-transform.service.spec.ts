import { TestBed } from '@angular/core/testing';
import { AppConfigService } from './app-config.service';
import { AppDateService } from './app-date.service';

import { BeadCoordTransformService } from './bead-coord-transform.service';
import { LocalizationService } from './localization.service';

describe('BeadTransformService', () => {
  let service: BeadCoordTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AppDateService, useValue: new AppDateService(undefined) },
        LocalizationService,
        AppConfigService
      ]
    });
    service = TestBed.inject(BeadCoordTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
