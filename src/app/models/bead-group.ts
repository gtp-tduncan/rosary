import { BeadGroupTemplate } from "./bead-group-template";

export class BeadGroup implements BeadGroupTemplate {

  sequence: string;
  sequenceId: string;
  beadGroupIndex?: number;
  repeatCount?: number;
  prayerIds?: string[];
  feedback?: string;

  private beadIndex?: number;

  constructor(data?: BeadGroupTemplate, beadGroupIndex?: number) {
    if (data) {
      this.sequence = data.sequence;
      this.sequenceId = `${data.sequence}_${beadGroupIndex}`;
      this.beadGroupIndex = beadGroupIndex;
      this.repeatCount = (data.repeatCount) ? data.repeatCount : 0;
      this.prayerIds = data.prayerIds;
      this.feedback = (data?.feedback || 'short');

      this.beadIndex = 0;
    }
  }

  isBeadGroupDone(): boolean {
    return this.beadIndex >= (this.repeatCount - 1);
  }

  resetBeadIndex() {
    this.beadIndex = 0;
  }

  resetBeadIndexToEnd() {
    this.beadIndex = this.repeatCount - 1;
  }

  next() {
    this.beadIndex++;
  }

  previous() {
    this.beadIndex--;
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
