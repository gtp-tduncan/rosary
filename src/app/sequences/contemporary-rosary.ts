import { BeadGroup } from '../models/bead-group';
import { BeadGroupList } from '../models/bead-group-list';
import { initBeadGroup } from '../models/bead-group-template';
import { Mysteries } from '../models/mysteries';
import { SIGN_CROSS, APOSTLES_CREED, OUR_FATHER, OPENING_HAIL_MARYS, GLORY, MYSTERY_1, HAIL_MARYS, GLORY_FATIMA, MYSTERY_2, MYSTERY_3, MYSTERY_4, MYSTERY_5, HAIL_HOLY_QUEEN, CLOSING } from './rosary-helper';

const prayerName = "the Holy Rosary";

export class ContemporaryRosary extends BeadGroupList {

  constructor(mysteries?: Mysteries) {
    super(prayerName, loadContemporaryHolyRosary(), mysteries);
    console.log(`Contemporary - ${mysteries.mysterySequenceName}`);
  }

}

function loadContemporaryHolyRosary() {
  let beadGroupIndex = 0;
  return [
    initBeadGroup(SIGN_CROSS, beadGroupIndex++),
    initBeadGroup(APOSTLES_CREED, beadGroupIndex++),
    initBeadGroup(OUR_FATHER, beadGroupIndex++),
    initBeadGroup(OPENING_HAIL_MARYS, beadGroupIndex++),
    initBeadGroup(GLORY, beadGroupIndex++),
    initBeadGroup(MYSTERY_1, beadGroupIndex++),
    initBeadGroup(OUR_FATHER, beadGroupIndex++),
    initBeadGroup(HAIL_MARYS, beadGroupIndex++),
    initBeadGroup(GLORY_FATIMA, beadGroupIndex++),
    initBeadGroup(MYSTERY_2, beadGroupIndex++),
    initBeadGroup(OUR_FATHER, beadGroupIndex++),
    initBeadGroup(HAIL_MARYS, beadGroupIndex++),
    initBeadGroup(GLORY_FATIMA, beadGroupIndex++),
    initBeadGroup(MYSTERY_3, beadGroupIndex++),
    initBeadGroup(OUR_FATHER, beadGroupIndex++),
    initBeadGroup(HAIL_MARYS, beadGroupIndex++),
    initBeadGroup(GLORY_FATIMA, beadGroupIndex++),
    initBeadGroup(MYSTERY_4, beadGroupIndex++),
    initBeadGroup(OUR_FATHER, beadGroupIndex++),
    initBeadGroup(HAIL_MARYS, beadGroupIndex++),
    initBeadGroup(GLORY_FATIMA, beadGroupIndex++),
    initBeadGroup(MYSTERY_5, beadGroupIndex++),
    initBeadGroup(OUR_FATHER, beadGroupIndex++),
    initBeadGroup(HAIL_MARYS, beadGroupIndex++),
    initBeadGroup(GLORY_FATIMA, beadGroupIndex++),
    initBeadGroup(HAIL_HOLY_QUEEN, beadGroupIndex++),
    initBeadGroup(CLOSING, beadGroupIndex++),
    initBeadGroup(SIGN_CROSS, beadGroupIndex++)
  ] as BeadGroup[];
}
