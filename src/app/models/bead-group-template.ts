import { BeadGroup } from "./bead-group";

export interface BeadGroupTemplate {

  sequence: string;
  sequenceId: string;
  beadGroupIndex?: number;
  repeatCount?: number;
  prayerIds?: string[];
  phoneFeedback?: string;
  incrementMysteryIdx?: boolean;
  linkBeadGroupIndex?: number;

}

export enum BeadLinkOffset {
  BEAD_IDX_MINUS_1,
  BEAD_IDX_MINUS_2
}

export function initBeadGroup(beadMap: Map<string, BeadGroup>,
                              template: BeadGroupTemplate, 
                              mysteryIdx: number, 
                              beadGroupIndex: number,
                              linkBeadGroupIndexOffset?: BeadLinkOffset): BeadGroup {
  const beadGroup = new BeadGroup(template, mysteryIdx, beadGroupIndex);
  if (linkBeadGroupIndexOffset) {
    const offset = (BeadLinkOffset.BEAD_IDX_MINUS_2 === linkBeadGroupIndexOffset) ? 2 : 1
    beadGroup.linkBeadGroupIndex = beadGroupIndex - offset;
  }
  beadMap[beadGroup.sequenceId] = beadGroup;
  return beadGroup;
}
