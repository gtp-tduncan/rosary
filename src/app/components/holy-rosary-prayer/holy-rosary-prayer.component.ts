import { Component, Input, OnInit } from '@angular/core';
import { BeadGroup } from 'src/app/models/bead-group';
import { BeadGroupList } from 'src/app/models/bead-group-list';
import { Prayer, PrayerApostlesCreed, PrayerFatima, PrayerGlory, PrayerGloryFatima, PrayerHailMary, PrayerOurFather, PrayerSignOfTheCross } from 'src/app/prayers/common-prayers';

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
  currentPrayer: Prayer;
  highlightBeadIndex: number;

  private prayerCreed = new PrayerApostlesCreed();
  private prayerGlory = new PrayerGlory();
  private prayerFatima = new PrayerFatima();
  private prayerGloryFatima = new PrayerGloryFatima();
  private prayerHailMary = new PrayerHailMary();
  private prayerOurFather = new PrayerOurFather();
  private prayerSignOfTheCross = new PrayerSignOfTheCross();

  constructor() { }

  ngOnInit(): void {
    this.activeBeadGroup = this.activeBeadGroupList.next();
    this.highlightBeadIndex = 0;

    if (this.orientation === undefined) {
      this.orientation = 'wide';
    }

    this.currentPrayer = this.findCurrentPrayer();
  }

  get showMystery(): boolean {
    const mysteryNumber = this.activeBeadGroupList.mysteryNumber();
    return (mysteryNumber >= 1 && mysteryNumber <= 5 && this.activeBeadGroupList.mystery() !== undefined);
  }

  onNext() {
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
    if (this.activeBeadGroup?.sequence === 'creed') {
      return this.prayerCreed;
    }
    else if (this.activeBeadGroup?.sequence === 'glory') {
      return this.prayerGlory;
    }
    else if (this.activeBeadGroup?.sequence === 'fatima') {
      return this.prayerFatima;
    }
    else if (this.activeBeadGroup?.sequence === 'glory-fatima') {
      return this.prayerGloryFatima;
    }
    else if (this.activeBeadGroup?.sequence === 'hail-mary') {
      return this.prayerHailMary;
    }
    else if (this.activeBeadGroup?.sequence === 'our-father') {
      return this.prayerOurFather;
    }
    else if (this.activeBeadGroup?.sequence === 'sign-cross') {
      return this.prayerSignOfTheCross;
    }

    return undefined;
  }
}
