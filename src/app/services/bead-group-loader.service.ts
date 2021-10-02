import { Injectable } from '@angular/core';
import { BeadGroupList } from '../models/bead-group-list';
import { Mysteries } from '../models/mysteries';
import { ContemporaryRosary } from '../sequences/contemporary-rosary';
import { RosaryMysteriesEnum, lookupMystery } from '../sequences/rosary-helper';

@Injectable({
  providedIn: 'root'
})
export class BeadGroupLoaderService {

  constructor() { }

  loadHolyRosaryContemporaryMysteryEnum(mysteryEnum: RosaryMysteriesEnum): BeadGroupList {
    const mystery = lookupMystery(mysteryEnum);
    return new ContemporaryRosary(mystery);
  }

  loadHolyRosaryContemporary(mystery: Mysteries): BeadGroupList {
    return new ContemporaryRosary(mystery);
  }

}
