import { BeadGroup } from "./bead-group";

export interface BeadGroupTemplate {

  sequence: string;
  sequenceId: string;
  beadGroupIndex?: number;
  repeatCount?: number;
  prayerIds?: string[];

}

export function initBeadGroup(template: BeadGroupTemplate, beadGroupIndex: number): BeadGroup {
  const beadGroup = new BeadGroup(template);
  beadGroup.beadGroupIndex = beadGroupIndex;
  beadGroup.sequence = template.sequence;
  beadGroup.sequenceId = `${template.sequence}_${beadGroupIndex}`;
  return beadGroup;
}
