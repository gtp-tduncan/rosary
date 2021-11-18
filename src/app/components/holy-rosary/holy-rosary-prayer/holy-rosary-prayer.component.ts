import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BeadGroup } from 'src/app/models/bead-group';
import { BeadGroupList } from 'src/app/models/bead-group-list';
import { Prayer, PrayerApostlesCreed, PrayerClosing1, PrayerClosing2, PrayerFatima, PrayerGlory, PrayerGloryFatima, PrayerHailHolyQueen, PrayerHailMary, PrayerOurFather, PrayerSignOfTheCross } from 'src/app/prayers/common-prayers';
import { SoundService } from 'src/app/services/sound.service';
import { CurrentPrayerComponent } from '../current-prayer/current-prayer.component';

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
export class HolyRosaryPrayerComponent implements OnInit {

  @Input()
  activeBeadGroupList: BeadGroupList;

  @Input()
  prayerName: string;

  @Input()
  orientation: string;

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

  constructor(private soundService: SoundService) { }

  ngOnInit(): void {
    console.log(`ngOnInit() 1 - ${this.activeBeadGroupList}`);
    this.activeBeadGroup = this.activeBeadGroupList.next();
    console.log(`ngOnInit() 2 - ${this.activeBeadGroup}`);
    this.highlightBeadIndex = 0;

    if (this.orientation === undefined) {
      this.orientation = 'wide';
    }

    console.log(`ngOnInit() 3`);
    this.currentPrayer = this.findCurrentPrayer();
    console.log(`ngOnInit() 4 - ${this.currentPrayer}`);
  }

  // ngAfterViewInit(): void {
  //   this.tap1 = this.extractAudioElement(this.tapRef1);
  //   this.tap2 = this.extractAudioElement(this.tapRef2, 0.5);
  // }

  resetPrayer(): void {
    this.activeBeadGroupList = undefined;
    this.activeBeadGroup = undefined;
    this.currentPrayer = undefined;
    this.highlightBeadIndex = undefined;
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
    this.soundService.playSound(this.activeBeadGroup?.phoneFeedback);
  }

  onPrevious() {
    this.activeBeadGroup = this.activeBeadGroupList.previous();
    if (this.activeBeadGroup) {
      this.highlightBeadIndex--;
    }
    this.currentPrayer = this.findCurrentPrayer();
  }

  private findCurrentPrayer(): Prayer {
    console.log(`findCurrentPrayer - seqMap => ${seqMap} - seqIdx => ${this.activeBeadGroup?.sequence}`);
    return seqMap[this.activeBeadGroup?.sequence];
  }
}
