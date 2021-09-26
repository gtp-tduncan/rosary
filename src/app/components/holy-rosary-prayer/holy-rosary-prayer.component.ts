import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BeadGroup } from 'src/app/models/bead-group';
import { BeadGroupList } from 'src/app/models/bead-group-list';
import { PatsBeadsComponent } from '../pats-beads/pats-beads.component';

@Component({
  selector: 'app-holy-rosary-prayer',
  templateUrl: './holy-rosary-prayer.component.html',
  styleUrls: ['./holy-rosary-prayer.component.scss']
})
export class HolyRosaryPrayerComponent implements OnInit {

  @Input()
  activeBeadGroupList: BeadGroupList;

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
    this.highlightBeadIndex++;
  }

  onPrevious() {
    // No implemented (yet?)
  }

  get mysteryNum(): string {
    return this.mysteryNumbers[this.activeBeadGroupList.mysteryNumber()];
  }

  get mysteryName(): string {
    return this.activeBeadGroupList.mysterySequenceName();
  }

}
