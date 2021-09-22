import { TestBed } from '@angular/core/testing';

import { BeadGroupLoaderService, SequenceIdEnum } from './bead-group-loader.service';

describe('BeadGroupLoaderService', () => {
  let service: BeadGroupLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeadGroupLoaderService);
  });

  it('should be created and display json sequence', () => {
    expect(service).toBeTruthy();
    const beads = service.load(SequenceIdEnum.HOLY_ROSARY);
    console.log(`${JSON.stringify(beads)}`);
  });
});
