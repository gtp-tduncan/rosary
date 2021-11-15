import { TestBed } from '@angular/core/testing';
import { MysteryGloriousComponent } from '../components/holy-rosary/mysteries/mystery-glorious';

import { BeadGroupLoaderService } from './bead-group-loader.service';

describe('BeadGroupLoaderService', () => {
  let service: BeadGroupLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeadGroupLoaderService);
  });

  it('should be created and display json sequence', () => {
    expect(service).toBeTruthy();
    const mystery = new MysteryGloriousComponent();
    const beads = service.loadHolyRosaryContemporary(mystery);
    expect(beads).toBeTruthy();
  });
});
