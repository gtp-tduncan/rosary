import { sequence } from '@angular/animations';
import { Injectable } from '@angular/core';
import { MysteryGloriousComponent } from '../components/mysteries/mystery-glorious/mystery-glorious.component';
import { MysteryJoyfulComponent } from '../components/mysteries/mystery-joyful/mystery-joyful.component';
import { MysteryLuminousComponent } from '../components/mysteries/mystery-luminous/mystery-luminous.component';
import { MysterySorrowfulComponent } from '../components/mysteries/mystery-sorrowful/mystery-sorrowful.component';
import { BeadGroup } from '../models/bead-group';
import { BeadGroupList } from '../models/bead-group-list';
import { BeadGroupTemplate, initBeadGroup } from '../models/bead-group-template';
import { Mysteries } from '../models/mysteries';

@Injectable({
  providedIn: 'root'
})
export class BeadGroupLoaderService {

  constructor() { }

  loadMysteryEnum(sequenceId: SequenceIdEnum, mysteryEnum: RosaryMysteriesEnum): BeadGroupList {
    const mystery = lookupMystery(mysteryEnum);
    return this.loadMystery(sequenceId, mystery);
  }

  loadMystery(sequenceId: SequenceIdEnum, mystery: Mysteries): BeadGroupList {
    let workingSeq: BeadGroup[] = undefined;

    if (SequenceIdEnum.HOLY_ROSARY === sequenceId) {
      workingSeq = this.loadHolyRosary();
    }

    const loadedSequence: BeadGroupList = (workingSeq) ? new BeadGroupList(workingSeq, mystery) : undefined;
    console.log(`loadedSequence: ${loadedSequence?.mysterySequenceName()}`);
    return loadedSequence;
  }

  protected loadHolyRosary(): BeadGroup[] {
    let beadGroupIndex = 0;
    return [
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
      initBeadGroup(CLOSING, beadGroupIndex++)
    ] as BeadGroup[];
  }
}

export enum SequenceIdEnum {
  HOLY_ROSARY
};

export enum RosaryMysteriesEnum {
  GLORIOUS,
  JOYFUL,
  LUMINOUS,
  SORROWFUL
}

export function lookupMystery(mysteryEnum: RosaryMysteriesEnum) {
  if (RosaryMysteriesEnum.GLORIOUS === mysteryEnum) {
    return new MysteryGloriousComponent();
  }
  else if (RosaryMysteriesEnum.JOYFUL === mysteryEnum) {
    return new MysteryJoyfulComponent();
  }
  else if (RosaryMysteriesEnum.LUMINOUS === mysteryEnum) {
    return new MysteryLuminousComponent();
  }
  else if (RosaryMysteriesEnum.SORROWFUL === mysteryEnum) {
    return new MysterySorrowfulComponent();
  }
  return undefined;
}

export const MYSTERY_1: BeadGroupTemplate = {
  sequence: 'mystery-1',
  sequenceId: 'mystery-1'
}

export const MYSTERY_2: BeadGroupTemplate = {
  sequence: 'mystery-2',
  sequenceId: 'mystery-2'
}

export const MYSTERY_3: BeadGroupTemplate = {
  sequence: 'mystery-3',
  sequenceId: 'mystery-3'
}

export const MYSTERY_4: BeadGroupTemplate = {
  sequence: 'mystery-4',
  sequenceId: 'mystery-4'
}

export const MYSTERY_5: BeadGroupTemplate = {
  sequence: 'mystery-5',
  sequenceId: 'mystery-5'
}

export const APOSTLES_CREED: BeadGroupTemplate = {
  sequence: 'creed',
  sequenceId: 'creed',
  repeatCount: 0,
  prayerIds: [
    '@@creed'
  ]
};

export const OUR_FATHER: BeadGroupTemplate = {
  sequence: 'our-father',
  sequenceId: 'our-father',
  repeatCount: 0,
  prayerIds: [
    '@@our-father'
  ]
};

export const OPENING_HAIL_MARYS: BeadGroupTemplate = {
  sequence: 'hail-mary',
  sequenceId: 'hail-mary',
  repeatCount: 3,
  prayerIds: [
    '@@hail-mary'
  ]
}

export const HAIL_MARYS: BeadGroupTemplate = {
  sequence: 'hail-mary',
  sequenceId: 'hail-mary',
  repeatCount: 10,
  prayerIds: [
    '@@hail-mary'
  ]
}

export const GLORY: BeadGroupTemplate = {
  sequence: 'glory',
  sequenceId: 'glory',
  repeatCount: 0,
  prayerIds: [
    '@@glory'
  ],
  feedback: 'long'
}

export const GLORY_FATIMA: BeadGroupTemplate = {
  sequence: 'glory-fatima',
  sequenceId: 'glory-fatima',
  repeatCount: 0,
  prayerIds: [
    '@@glory',
    '@@fatima'
  ],
  feedback: 'long'
}

export const HAIL_HOLY_QUEEN: BeadGroupTemplate = {
  sequence: 'hail-holy-queen',
  sequenceId: 'hail-holy-queen',
  feedback: 'extra-long'
}

export const CLOSING: BeadGroupTemplate = {
  sequence: 'closing',
  sequenceId: 'closing',
  repeatCount: 0,
  prayerIds: [
    '@@closing-1',
    '@@closing-2'
  ]
}
