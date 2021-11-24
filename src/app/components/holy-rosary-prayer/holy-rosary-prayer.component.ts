import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BeadGroup } from 'src/app/models/bead-group';
import { BeadGroupList } from 'src/app/models/bead-group-list';
import { Prayer, PrayerApostlesCreed, PrayerClosing1, PrayerClosing2, PrayerFatima, PrayerGlory, PrayerGloryFatima, PrayerHailHolyQueen, PrayerHailMary, PrayerOurFather, PrayerSignOfTheCross } from 'src/app/prayers/common-prayers';
import { PatsBeadsComponent } from '../pats-beads/pats-beads.component';
import { CurrentPrayerComponent } from './current-prayer/current-prayer.component';

const seqMap = new Map<string, Prayer>();
seqMap['closing1'] = new PrayerClosing1();
seqMap['closing2'] = new PrayerClosing2();
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

  @ViewChild('rosaryBeads')
  rosaryBeads: PatsBeadsComponent;

  @ViewChild('primaryPrayer')
  currentPrayerComponent: CurrentPrayerComponent;

  activeBeadGroup: BeadGroup;
  currentPrayer: Prayer;
  highlightBeadIndex: number;

  @ViewChild('tap1')
  private tapRef1: ElementRef<HTMLAudioElement>;
  private tap1: HTMLAudioElement;

  @ViewChild('tap2')
  private tapRef2: ElementRef<HTMLAudioElement>;
  private tap2: HTMLAudioElement;

  constructor() { }

  ngOnInit(): void {
    this.activeBeadGroup = this.activeBeadGroupList.next();
    this.highlightBeadIndex = 0;

    if (this.orientation === undefined) {
      this.orientation = 'wide';
    }

    this.currentPrayer = this.findCurrentPrayer();
  }

  ngAfterViewInit(): void {
    this.tap1 = this.extractAudioElement(this.tapRef1);
    this.tap2 = this.extractAudioElement(this.tapRef2, 0.5);
  }

  private extractAudioElement(elementRef: ElementRef<HTMLAudioElement>, volume = 0.3): HTMLAudioElement {
    if (elementRef?.nativeElement) {
      const element = elementRef.nativeElement;
      element.volume = volume;
      return element;
    }
    return undefined;
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
    this.rosaryBeads.updateBeadPosition(this.highlightBeadIndex);
    this.playSound();
  }

  onPrevious() {
    this.activeBeadGroup = this.activeBeadGroupList.previous();
    if (this.activeBeadGroup) {
      this.highlightBeadIndex--;
    }
    this.currentPrayer = this.findCurrentPrayer();
    this.rosaryBeads.updateBeadPosition(this.highlightBeadIndex);
  }

  tap1mp3(): string {
    return window.location.href + '/assets/Tapping-1.mp3';
  }

  tap1ogg(): string {
    return window.location.href + '/assets/Tapping-1.ogg';
  }

  tap2mp3(): string {
    return window.location.href + '/assets/Tapping-2.mp3';
  }

  tap2ogg(): string {
    return window.location.href + '/assets/Tapping-2.ogg';
  }

  private findCurrentPrayer(): Prayer {
    return seqMap[this.activeBeadGroup?.sequence];
  }

  private playSound() {
    const feedback = this.activeBeadGroup?.phoneFeedback;
    if ('short' === feedback) {
      this.tap1?.play();
    }
    else if ('long' === feedback) {
      this.tap2?.play();
    }
  }
}
