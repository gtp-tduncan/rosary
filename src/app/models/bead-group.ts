import { BeadGroupTemplate } from "./bead-group-template";

export class BeadGroup {

  private beadIndex?: number;

  constructor(public data: BeadGroupTemplate,
    private previousBeadGroup: BeadGroup = undefined,
    private nextBeadGroup: BeadGroup) {
      this.beadIndex = 0;
    }

  next(): BeadGroup {
    this.beadIndex++;
    if (this.beadIndex < this.data.repeatCount) {
      this.nextBeadGroup.beadIndex = 0;
      return this.nextBeadGroup;
    }
    return this;
  }

  previous(): BeadGroup {
    this.beadIndex--;
    if (this.beadIndex === 0) {
      this.previousBeadGroup.beadIndex = this.previousBeadGroup.data.repeatCount - 1;
      return this.previousBeadGroup;
    }
    return this;
  }

  setNext(bead: BeadGroup) {
    this.nextBeadGroup = bead;
  }

  setPrevious(bead: BeadGroup) {
    this.previousBeadGroup = bead;
  }

}
