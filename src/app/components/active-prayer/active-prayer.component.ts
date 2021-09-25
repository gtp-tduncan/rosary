import { Component, Input, OnInit } from '@angular/core';
import { BeadGroup } from 'src/app/models/bead-group';
import { BeadGroupList } from 'src/app/models/bead-group-list';

@Component({
  selector: 'app-active-prayer',
  templateUrl: './active-prayer.component.html',
  styleUrls: ['./active-prayer.component.scss']
})
export class ActivePrayerComponent implements OnInit {

  @Input()
  activeBeadGroupList: BeadGroupList;

  activeBeadGroup: BeadGroup;

  constructor() { }

  ngOnInit(): void {
    this.activeBeadGroup = this.activeBeadGroupList.next();
    console.log(`activeBeadGroup: ${this.activeBeadGroup}`);
  }

  get showMystery(): boolean {
    return this.activeBeadGroupList.mystery() !== undefined;
  }

  onNext() {
    const wasBead = this.activeBeadGroup;
    this.activeBeadGroup = this.activeBeadGroupList.next();
    console.log(`old: ${wasBead?.sequenceId}, ${wasBead?.index} / ${wasBead?.maxIndex} -- new: ${this.activeBeadGroup?.sequenceId}, ${this.activeBeadGroup?.index} / ${this.activeBeadGroup?.maxIndex}`)
  }

  onPrevious() {
    // No implemented (yet?)
  }
}
