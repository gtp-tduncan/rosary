import { BeadGroupTemplate } from "./bead-group-template";

export class BeadGroup implements BeadGroupTemplate {

  sequence: string;
  sequenceId: string;
  beadGroupIndex?: number;
  repeatCount?: number;
  prayerIds?: string[];

  private beadIndex?: number;

  constructor(data?: BeadGroupTemplate) {
    if (data) {
      this.sequence = data.sequence;
      this.sequenceId = `${data.sequence}_${data.beadGroupIndex}`;
      this.beadGroupIndex = data.beadGroupIndex;
      this.repeatCount = (data.repeatCount) ? data.repeatCount : 0;
      this.prayerIds = data.prayerIds;

      this.beadIndex = 0;
    }
  }

  isBeadGroupDone(): boolean {
    return this.beadIndex >= (this.repeatCount - 1);
  }

  resetBeadIndex() {
    this.beadIndex = 0;
  }

  next() {
    this.beadIndex++;
  }

  get groupIndex(): number {
    return this.beadGroupIndex;
  }

  get index(): number {
    return this.beadIndex;
  }

  get maxIndex(): number {
    return (this.repeatCount) ? this.repeatCount : 0;
  }

}
