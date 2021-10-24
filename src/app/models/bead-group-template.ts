import { BeadGroup } from "./bead-group";

export interface BeadGroupTemplate {

  sequence: string;
  sequenceId: string;
  beadGroupIndex?: number;
  repeatCount?: number;
  prayerIds?: string[];
  phoneFeedback?: string;
  incrementMysteryIdx?: boolean;

}

export function initBeadGroup(beadMap: Map<string, BeadGroup>, template: BeadGroupTemplate, mysteryIdx: number, beadGroupIndex: number): BeadGroup {
  const beadGroup = new BeadGroup(template, mysteryIdx, beadGroupIndex);
  beadMap[beadGroup.sequenceId] = beadGroup;
  return beadGroup;
}
