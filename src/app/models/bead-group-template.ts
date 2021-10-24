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

export function initBeadGroup(template: BeadGroupTemplate, beadGroupIndex: number): BeadGroup {
  return new BeadGroup(template, beadGroupIndex);
}
