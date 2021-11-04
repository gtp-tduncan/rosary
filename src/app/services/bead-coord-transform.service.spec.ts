import { TestBed } from '@angular/core/testing';

import { BeadCoordTransformService } from './bead-coord-transform.service';

describe('BeadTransformService', () => {
  let service: BeadCoordTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeadCoordTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
