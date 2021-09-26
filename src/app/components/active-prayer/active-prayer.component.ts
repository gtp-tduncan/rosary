import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BeadGroupList } from 'src/app/models/bead-group-list';
import { HolyRosaryPrayerComponent } from '../holy-rosary-prayer/holy-rosary-prayer.component';

@Component({
  selector: 'app-active-prayer',
  templateUrl: './active-prayer.component.html',
  styleUrls: ['./active-prayer.component.scss']
})
export class ActivePrayerComponent implements OnInit {

  @Input()
  activeBeadGroupList: BeadGroupList;

  @ViewChild(HolyRosaryPrayerComponent)
  holyRosaryPrayer: HolyRosaryPrayerComponent;

  constructor() {
    // console.log(`ActivePrayerComponent - constructor`);
  }

  ngOnInit(): void {
    console.log("Active pray onInit");
    // this.ngOnChanges(undefined);
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(`Have activeBeadGroupList: ${this.activeBeadGroupList}`);
  //   console.log(`Have Holy Rosary prayer: ${this.holyRosaryPrayer}`)
  // }

  onNext() {
    this.holyRosaryPrayer.onNext();
  }

  onPrevious() {
    this.holyRosaryPrayer.onPrevious();
  }

}
