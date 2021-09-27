import { TestBed } from '@angular/core/testing';
import { MysteryGloriousComponent } from '../components/holy-rosary-prayer/mysteries/mystery-glorious/mystery-glorious.component';

import { BeadGroupLoaderService, SequenceIdEnum } from './bead-group-loader.service';

describe('BeadGroupLoaderService', () => {
  let service: BeadGroupLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeadGroupLoaderService);
  });

  it('should be created and display json sequence', () => {
    expect(service).toBeTruthy();
    const mystery = new MysteryGloriousComponent();
    const beads = service.loadMystery(SequenceIdEnum.HOLY_ROSARY, mystery);
    expect(beads).toBeTruthy();
  });
});
