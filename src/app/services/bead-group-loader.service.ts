import { sequence } from '@angular/animations';
import { Injectable } from '@angular/core';
import { BeadGroup } from '../models/bead-group';
import { BeadGroupTemplate } from '../models/bead-group-template';

@Injectable({
  providedIn: 'root'
})
export class BeadGroupLoaderService {

  constructor() { }

  load(sequenceId: SequenceIdEnum): BeadGroup[] {
    let workingSeq: BeadGroupTemplate[] = undefined;
    let previous: BeadGroup = undefined;
    let next: BeadGroup = undefined;

    if (SequenceIdEnum.HOLY_ROSARY === sequenceId) {
      workingSeq = this.loadHolyRosary();
    }
    if (workingSeq) {
      const loadedBeads: BeadGroup[] = [];
      workingSeq.forEach(entry => {
        const convertedEntry = new BeadGroup(entry, previous, undefined);
        loadedBeads.push(convertedEntry);
      })
      return loadedBeads;
    }
    return undefined;
  }

  protected loadHolyRosary(): BeadGroupTemplate[] {
    return [
      APOSTLES_CREED,
      OUR_FATHER,
      OPENING_HAIL_MARYS,
      GLORY,
      MYSTERY_1,
      OUR_FATHER,
      HAIL_MARYS,
      GLORY_FATIMA,
      MYSTERY_2,
      OUR_FATHER,
      HAIL_MARYS,
      GLORY_FATIMA,
      MYSTERY_3,
      OUR_FATHER,
      HAIL_MARYS,
      GLORY_FATIMA,
      MYSTERY_4,
      OUR_FATHER,
      HAIL_MARYS,
      GLORY_FATIMA,
      MYSTERY_5,
      OUR_FATHER,
      HAIL_MARYS,
      GLORY_FATIMA,
      CLOSING
    ];
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

export const MYSTERY_1: BeadGroupTemplate = {
  sequenceId: 'mystery-1'
}

export const MYSTERY_2: BeadGroupTemplate = {
  sequenceId: 'mystery-2'
}

export const MYSTERY_3: BeadGroupTemplate = {
  sequenceId: 'mystery-3'
}

export const MYSTERY_4: BeadGroupTemplate = {
  sequenceId: 'mystery-4'
}

export const MYSTERY_5: BeadGroupTemplate = {
  sequenceId: 'mystery-5'
}

export const APOSTLES_CREED: BeadGroupTemplate = {
  sequenceId: 'creed',
  repeatCount: 0,
  prayerIds: [
    '@@creed'
  ]
};

export const OUR_FATHER: BeadGroupTemplate = {
  sequenceId: 'our-father',
  repeatCount: 0,
  prayerIds: [
    '@@our-father'
  ]
};

export const OPENING_HAIL_MARYS: BeadGroupTemplate = {
  sequenceId: 'hail-mary',
  repeatCount: 3,
  prayerIds: [
    '@@hail-mary'
  ]
}

export const HAIL_MARYS: BeadGroupTemplate = {
  sequenceId: 'hail-mary',
  repeatCount: 10,
  prayerIds: [
    '@@hail-mary'
  ]
}

export const GLORY: BeadGroupTemplate = {
  sequenceId: 'glory',
  repeatCount: 0,
  prayerIds: [
    '@@glory'
  ]
}

export const GLORY_FATIMA: BeadGroupTemplate = {
  sequenceId: 'glory-fatima',
  repeatCount: 0,
  prayerIds: [
    '@@glory',
    '@@fatima'
  ]
}

export const CLOSING: BeadGroupTemplate = {
  sequenceId: 'closing',
  repeatCount: 0,
  prayerIds: [
    '@@closing-1',
    '@@closing-2'
  ]
}
