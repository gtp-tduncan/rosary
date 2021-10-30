import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BeadGroupList } from 'src/app/models/bead-group-list';
import { HolyRosaryPrayerComponent } from '../holy-rosary-prayer/holy-rosary-prayer.component';

@Component({
  selector: 'app-active-prayer',
  templateUrl: './active-prayer.component.html',
  styleUrls: ['./active-prayer.component.scss']
})
export class ActivePrayerComponent implements OnInit, AfterViewInit {

  @Input()
  activeBeadGroupList: BeadGroupList;

  @Input()
  debugTheEnd: boolean;

  @Output()
  onResetEvent = new EventEmitter<boolean>();

  @ViewChild(HolyRosaryPrayerComponent)
  holyRosaryPrayer: HolyRosaryPrayerComponent;

  prayerName: string;

  constructor() { }

  ngOnInit(): void {
    this.prayerName = this.activeBeadGroupList.prayerName;
    this.prayerName = this.prayerName[0].toUpperCase() + this.prayerName.substring(1);
    console.log(`prayerName: ${this.prayerName}`);
  }

  ngAfterViewInit(): void {
    this.holyRosaryPrayer.debugTheEnd = this.debugTheEnd;
  }

  get isPrayerSequenceDone(): boolean {
    return this.activeBeadGroupList.isPrayerSequenceDone;
  }

  onNext() {
    console.log('next - active prayers');
    this.holyRosaryPrayer.onNext();
  }

  onPrevious() {
    this.holyRosaryPrayer.onPrevious();
  }

  onStartNew() {
    this.onResetEvent.emit(true);
  }

}
