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
  orientation: string;

  activeBeadGroup: BeadGroup;

  private mysteryNumbers = [ undefined, 'First', 'Second', 'Third', 'Fourth', 'Fifth' ];

  constructor() { }

  ngOnInit(): void {
    this.activeBeadGroup = this.activeBeadGroupList.next();

    if (this.orientation === undefined) {
      this.orientation = 'wide';
    }
  }

  get showMystery(): boolean {
    return this.activeBeadGroupList.mystery() !== undefined;
  }

  onNext() {
    this.activeBeadGroup = this.activeBeadGroupList.next();
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
