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

  @Output()
  onResetEvent = new EventEmitter<boolean>();

  @ViewChild(HolyRosaryPrayerComponent)
  holyRosaryPrayer: HolyRosaryPrayerComponent;

  prayerName: string;

  sectionContainerStyle: string;

  constructor() { }

  ngOnInit(): void {
    this.prayerName = this.activeBeadGroupList.prayerName;
    this.prayerName = this.prayerName[0].toUpperCase() + this.prayerName.substring(1);
  }

  ngAfterViewInit(): void {
    console.log(`ngOnInit - activeBeadGroupList=${this.activeBeadGroupList?.prayerName}`);
    console.log(`ngOnInit - holyRosaryPrayer=${this.holyRosaryPrayer?.prayerName}`);
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

  // validateOnResizeEvent(parentRect: DOMRect, elementBoundaryUtils: ElementBoundaryUtils): void {
  //   const sectionContainerElement: HTMLElement = document.querySelector('#active-prayer-section-container');
  //   this.sectionContainerStyle = elementBoundaryUtils.style(sectionContainerElement.getBoundingClientRect(), parentRect);
  //   console.log(`sectionContainerStyle: ${this.sectionContainerStyle}`);
  // }

}
