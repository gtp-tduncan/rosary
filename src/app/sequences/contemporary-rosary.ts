import { BeadGroup } from '../models/bead-group';
import { BeadGroupList } from '../models/bead-group-list';
import { BeadLinkOffset, initBeadGroup } from '../models/bead-group-template';
import { Mysteries } from '../models/mysteries';
import { LocalizationService } from '../services/localization.service';
import { SIGN_CROSS, APOSTLES_CREED, OUR_FATHER, OPENING_HAIL_MARYS, GLORY, MYSTERY_1, HAIL_MARYS, GLORY_FATIMA, MYSTERY_2, MYSTERY_3, MYSTERY_4, MYSTERY_5, HAIL_HOLY_QUEEN, CLOSING_1, FATIMA, CLOSING_2 } from './rosary-helper';

/*
IMPORTANT: If you change the order of prayers (ie: loadContemporaryHolyRosary),
           you also need to check that it matches up with the bead arrays.

           Search for things like:
             export const PATS_BEADS_COORDS: BeadPosition[]
*/

export class ContemporaryRosary extends BeadGroupList {

  constructor(localizationUtil: LocalizationService, mysteries?: Mysteries) {
    super(localizationUtil.prayerHolyRosary, ':@@prayerHolyRosary', loadContemporaryHolyRosary(), mysteries);
    console.log(`Contemporary - ${mysteries.mysterySequenceName}`);
  }

}

export interface BeadGroupContainer {
  beadGroups: BeadGroup[];
  beadMap: Map<string, BeadGroup>;
}

function loadContemporaryHolyRosary(): BeadGroupContainer {
  let beadGroupIndex = 0;
  let mysteryIdx = 0;
  const beadMap = new Map<string, BeadGroup>();

  const beadGroups = [
    initBeadGroup(beadMap, SIGN_CROSS, undefined, beadGroupIndex++),

    initBeadGroup(beadMap, APOSTLES_CREED, undefined, beadGroupIndex++),
    initBeadGroup(beadMap, OUR_FATHER, undefined, beadGroupIndex++),
    initBeadGroup(beadMap, OPENING_HAIL_MARYS, undefined, beadGroupIndex++),
    initBeadGroup(beadMap, GLORY, undefined, beadGroupIndex++),

    initBeadGroup(beadMap, MYSTERY_1, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, OUR_FATHER, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, HAIL_MARYS, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, GLORY, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, FATIMA, mysteryIdx++, beadGroupIndex++, BeadLinkOffset.BEAD_IDX_MINUS_1),

    initBeadGroup(beadMap, MYSTERY_2, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, OUR_FATHER, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, HAIL_MARYS, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, GLORY, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, FATIMA, mysteryIdx++, beadGroupIndex++, BeadLinkOffset.BEAD_IDX_MINUS_1),

    initBeadGroup(beadMap, MYSTERY_3, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, OUR_FATHER, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, HAIL_MARYS, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, GLORY, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, FATIMA, mysteryIdx++, beadGroupIndex++, BeadLinkOffset.BEAD_IDX_MINUS_1),

    initBeadGroup(beadMap, MYSTERY_4, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, OUR_FATHER, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, HAIL_MARYS, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, GLORY, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, FATIMA, mysteryIdx++, beadGroupIndex++, BeadLinkOffset.BEAD_IDX_MINUS_1),

    initBeadGroup(beadMap, MYSTERY_5, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, OUR_FATHER, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, HAIL_MARYS, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, GLORY, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, FATIMA, mysteryIdx++, beadGroupIndex++, BeadLinkOffset.BEAD_IDX_MINUS_1),

    initBeadGroup(beadMap, HAIL_HOLY_QUEEN, undefined, beadGroupIndex++),
    initBeadGroup(beadMap, CLOSING_1, undefined, beadGroupIndex++, BeadLinkOffset.BEAD_IDX_MINUS_1),
    initBeadGroup(beadMap, CLOSING_2, undefined, beadGroupIndex++, BeadLinkOffset.BEAD_IDX_MINUS_2),
    initBeadGroup(beadMap, SIGN_CROSS, undefined, beadGroupIndex++)
  ];

  return {
    beadGroups,
    beadMap
  };
}
