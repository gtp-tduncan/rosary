import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { BeadGroup } from 'src/app/models/bead-group';
import { BeadGroupList } from 'src/app/models/bead-group-list';
import { Prayer, PrayerApostlesCreed, PrayerClosing1, PrayerClosing2, PrayerFatima, PrayerGlory, PrayerGloryFatima, PrayerHailHolyQueen, PrayerHailMary, PrayerOurFather, PrayerSignOfTheCross } from 'src/app/prayers/common-prayers';
import { CurrentPrayerComponent } from './current-prayer/current-prayer.component';

const seqMap = new Map<string, Prayer>();
seqMap['closing'] = new PrayerClosing1();
seqMap['creed'] = new PrayerApostlesCreed();
seqMap['glory'] = new PrayerGlory();
seqMap['fatima'] = new PrayerFatima();
seqMap['glory-fatima'] = new PrayerGloryFatima();
seqMap['hail-holy-queen'] = new PrayerHailHolyQueen();
seqMap['hail-mary'] = new PrayerHailMary();
seqMap['our-father'] = new PrayerOurFather();
seqMap['sign-cross'] = new PrayerSignOfTheCross();

@Component({
  selector: 'app-holy-rosary-prayer',
  templateUrl: './holy-rosary-prayer.component.html',
  styleUrls: ['./holy-rosary-prayer.component.scss']
})
export class HolyRosaryPrayerComponent implements OnInit, AfterViewInit {

  @Input()
  activeBeadGroupList: BeadGroupList;

  @Input()
  prayerName: string;

  @Input()
  debugTheEnd: boolean;

  @Input()
  orientation: string;

  @ViewChild('primaryPrayer')
  currentPrayerComponent: CurrentPrayerComponent;

  activeBeadGroup: BeadGroup;
  currentPrayer: Prayer;
  extraPrayer: Prayer;
  highlightBeadIndex: number;

  private prayerClosing2 = new PrayerClosing2();

  constructor() { }

  ngOnInit(): void {
    this.activeBeadGroup = this.activeBeadGroupList.next();
    this.highlightBeadIndex = 0;

    if (this.orientation === undefined) {
      this.orientation = 'wide';
    }

    this.currentPrayer = this.findCurrentPrayer();
    console.log(`prayerName 1: ${this.prayerName}`);
  }

  ngAfterViewInit(): void {
    console.log(`prayerName 2: ${this.prayerName}`);
  }

  get showMystery(): boolean {
    const mysteryNumber = this.activeBeadGroupList.mysteryNumber();
    return (mysteryNumber >= 1 && mysteryNumber <= 5 && this.activeBeadGroupList.mystery() !== undefined);
  }

  onNext() {
    console.log('next - holy rosary');
    this.activeBeadGroup = this.activeBeadGroupList.next();
    if (this.activeBeadGroup) {
      this.highlightBeadIndex++;
    }
    this.currentPrayer = this.findCurrentPrayer();
  }

  onPrevious() {
    this.activeBeadGroup = this.activeBeadGroupList.previous();
    if (this.activeBeadGroup) {
      this.highlightBeadIndex--;
    }
    this.currentPrayer = this.findCurrentPrayer();
  }

  private findCurrentPrayer(): Prayer {
    this.extraPrayer = (this.activeBeadGroup?.sequence === 'closing')
      ? this.extraPrayer = this.prayerClosing2 : undefined;

    return seqMap[this.activeBeadGroup?.sequence];
  }
}
