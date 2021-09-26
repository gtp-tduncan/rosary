import { Component, Input, OnInit } from '@angular/core';
import { BeadGroup } from 'src/app/models/bead-group';
import { BeadGroupList } from 'src/app/models/bead-group-list';

@Component({
  selector: 'app-holy-rosary-prayer',
  templateUrl: './holy-rosary-prayer.component.html',
  styleUrls: ['./holy-rosary-prayer.component.scss']
})
export class HolyRosaryPrayerComponent implements OnInit {

  @Input()
  activeBeadGroupList: BeadGroupList;

  @Input()
  prayerName: string;

  @Input()
  orientation: string;

  activeBeadGroup: BeadGroup;
  highlightBeadIndex: number;

  private mysteryNumbers = [ undefined, 'First', 'Second', 'Third', 'Fourth', 'Fifth' ];

  constructor() { }

  ngOnInit(): void {
    this.activeBeadGroup = this.activeBeadGroupList.next();
    this.highlightBeadIndex = 0;

    if (this.orientation === undefined) {
      this.orientation = 'wide';
    }
  }

  get showMystery(): boolean {
    return this.activeBeadGroupList.mystery() !== undefined;
  }

  onNext() {
    this.activeBeadGroup = this.activeBeadGroupList.next();
    if (this.activeBeadGroup) {
      this.highlightBeadIndex++;
    }
  }

  onPrevious() {
    this.activeBeadGroup = this.activeBeadGroupList.previous();
    if (this.activeBeadGroup) {
      this.highlightBeadIndex--;
    }
  }

  get mysteryNum(): string {
    return this.mysteryNumbers[this.activeBeadGroupList.mysteryNumber()];
  }

  get mysteryName(): string {
    return this.activeBeadGroupList.mysterySequenceName();
  }

}
