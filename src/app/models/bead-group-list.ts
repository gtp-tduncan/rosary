import { BeadGroup } from "./bead-group";
import { fruitByNumber, Mysteries, mysteryByNumber } from "./mysteries";

export class BeadGroupList {

  prayerName: string;

  private currentBeadGroup: BeadGroup;

  // TODO: Mystery-related code should be moved to HolyRosaryPrayerComponent
  private activeMysteries: Mysteries;
  private activeMysteriesIdx: number;

  private beadGroups: BeadGroup[];
  private beadGroupIdx: number;

  constructor(prayerName: string, beadGroups: BeadGroup[], mysteries?: Mysteries) {
    this.prayerName = prayerName;
    this.currentBeadGroup = undefined;
    this.beadGroups = beadGroups;
    this.beadGroupIdx = -1;
    this.activeMysteries = mysteries;
    this.activeMysteriesIdx = 0;
  }

  get isPrayerSequenceDone(): boolean {
    return this.beadGroupIdx >= this.beadGroups.length;
  }

  current(): BeadGroup {
    return this.currentBeadGroup;
  }

  next(): BeadGroup {
    if (this.isCurrentBeadGroupDone()) {
      this.beadGroupIdx++;
      if (this.beadGroupIdx >= this.beadGroups.length) {
        return undefined;
      }

      this.currentBeadGroup = this.beadGroups[this.beadGroupIdx];
      this.currentBeadGroup.resetBeadIndex();

      if (this.currentBeadGroup.sequence.startsWith('mystery') || this.currentBeadGroup.incrementMysteryIdx) {
        this.activeMysteriesIdx++;
      }
    }
    else {
      this.currentBeadGroup.next();
    }
    return this.currentBeadGroup;
  }

  previous(): BeadGroup {
    if (this.currentBeadGroup.index > 0) {
      this.currentBeadGroup.previous();
    }
    else if (this.beadGroupIdx > 0) {
      const lastWasMystery = this.currentBeadGroup.sequence.startsWith('mystery') || this.currentBeadGroup.incrementMysteryIdx;

      this.beadGroupIdx--;
      this.currentBeadGroup = this.beadGroups[this.beadGroupIdx];
      this.currentBeadGroup.resetBeadIndexToEnd();

      if (lastWasMystery) {
        this.activeMysteriesIdx--;
      }
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
