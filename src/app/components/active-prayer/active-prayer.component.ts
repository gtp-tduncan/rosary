import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  @Output()
  onResetEvent = new EventEmitter<boolean>();

  @ViewChild(HolyRosaryPrayerComponent)
  holyRosaryPrayer: HolyRosaryPrayerComponent;

  prayerName: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.prayerName = this.activeBeadGroupList.prayerName;
    this.prayerName = this.prayerName[0].toUpperCase() + this.prayerName.substring(1);
  }

  get isPrayerSequenceDone(): boolean {
    return this.activeBeadGroupList.isPrayerSequenceDone;
  }

  onNext() {
    this.holyRosaryPrayer.onNext();
  }

  onPrevious() {
    this.holyRosaryPrayer.onPrevious();
  }

  onStartNew() {
    this.onResetEvent.emit(true);
  }

}
