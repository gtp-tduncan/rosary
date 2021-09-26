import { BeadGroup } from "./bead-group";
import { fruitByNumber, Mysteries, mysteryByNumber } from "./mysteries";

export class BeadGroupList {

  private currentBeadGroup: BeadGroup;

  private activeMysteries: Mysteries;
  private activeMysteriesIdx: number;

  private beadGroups: BeadGroup[];
  private beadGroupIdx: number;

  constructor(beadGroups: BeadGroup[], mysteries?: Mysteries) {
    this.currentBeadGroup = undefined;
    this.beadGroups = beadGroups;
    this.beadGroupIdx = -1;
    this.activeMysteries = mysteries;
    this.activeMysteriesIdx = 0;
  }

  next(): BeadGroup {
    if (this.isCurrentBeadGroupDone()) {
      this.beadGroupIdx++;
      this.currentBeadGroup = this.beadGroups[this.beadGroupIdx];
      this.currentBeadGroup.resetBeadIndex();

      if (this.currentBeadGroup.sequence.startsWith('mystery')) {
        this.activeMysteriesIdx++;
      }
    }
    else {
      this.currentBeadGroup.next();
    }
    return this.currentBeadGroup;
  }

  mysterySequenceName(): string {
    return this.activeMysteries.mysterySequenceName;
  }

  mysteryNumber(): number {
    return this.activeMysteriesIdx;
  }

  mystery(): string {
    return mysteryByNumber(this.activeMysteries, this.activeMysteriesIdx);
  }

  fruit(): string {
    return fruitByNumber(this.activeMysteries, this.activeMysteriesIdx);
  }

  toConsole() {
    console.log('------- Bead group - start -------');
    this.beadGroups.forEach(entry => {
      console.log(`${JSON.stringify(entry)}`);
    })
    console.log('-------- Bead group - end --------');
  }

  private isCurrentBeadGroupDone() {
    return this.currentBeadGroup === undefined || this.currentBeadGroup === null
      || this.beadGroupIdx < 0 || this.currentBeadGroup.isBeadGroupDone();
  }

}
