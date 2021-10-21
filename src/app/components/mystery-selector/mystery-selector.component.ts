import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RosaryMysteriesEnum } from 'src/app/sequences/rosary-helper';

const SUN = 0;
const MON = 1;
const TUE = 2;
const WED = 3;
const THU = 4;
const FRI = 5;
const SAT = 6;

export const MYSTERY_LABEL_MAP = new Map<RosaryMysteriesEnum, string>();

const HIGHLIGHT_MYSTERY_OF_DAY = 'highlight-mystery-of-day';

@Component({
  selector: 'app-mystery-selector',
  templateUrl: './mystery-selector.component.html',
  styleUrls: ['./mystery-selector.component.scss']
})
export class MysterySelectorComponent implements OnInit {

  @Output()
  selectedMysteryEvent = new EventEmitter<RosaryMysteriesEnum>();

  mysteryOfTheDayLabel: string;

  mysteryOfTheDay: RosaryMysteriesEnum;

  private dayOfWeek: number;

  constructor() {
    if (MYSTERY_LABEL_MAP.size === 0) {
      MYSTERY_LABEL_MAP[RosaryMysteriesEnum.GLORIOUS] = this.gloriousMystery;
      MYSTERY_LABEL_MAP[RosaryMysteriesEnum.JOYFUL] = this.joyfulMystery;
      MYSTERY_LABEL_MAP[RosaryMysteriesEnum.LUMINOUS] = this.luminousMystery;
      MYSTERY_LABEL_MAP[RosaryMysteriesEnum.SORROWFUL] = this.sorrowfulMystery;
    }

    this.dayOfWeek = (new Date()).getDay();
    this.mysteryOfTheDay = this.getMysteryOfTheDay();
    this.mysteryOfTheDayLabel = MYSTERY_LABEL_MAP[this.mysteryOfTheDay];
  }

  ngOnInit(): void { }

  get gloriousMystery(): string {
    return $localize`:@@glorious:Glorious`;
  }

  get joyfulMystery(): string {
    return $localize`:@@joyful:Joyful`;
  }

  get luminousMystery(): string {
    return $localize`:@@luminous:Luminous`;
  }

  get sorrowfulMystery(): string {
    return $localize`:@@sorrowful:Sorrowful`;
  }

  get isGlorious(): string {
    return (this.getMysteryOfTheDay() === RosaryMysteriesEnum.GLORIOUS)
      ? HIGHLIGHT_MYSTERY_OF_DAY : '';
  }

  get isJoyful(): string {
    return (this.getMysteryOfTheDay() === RosaryMysteriesEnum.JOYFUL)
      ? HIGHLIGHT_MYSTERY_OF_DAY : '';
  }

  get isLuminous(): string {
    return (this.getMysteryOfTheDay() === RosaryMysteriesEnum.LUMINOUS)
      ? HIGHLIGHT_MYSTERY_OF_DAY : '';
  }

  get isSorrowful(): string {
    return (this.getMysteryOfTheDay() === RosaryMysteriesEnum.SORROWFUL)
      ? HIGHLIGHT_MYSTERY_OF_DAY : '';
  }

  getMysteryOfTheDay(): RosaryMysteriesEnum {
    if (this.dayOfWeek === SUN || this.dayOfWeek === WED) {
      console.log('GLORIOUS');
      return RosaryMysteriesEnum.GLORIOUS;
    }
    else if (this.dayOfWeek === MON || this.dayOfWeek === SAT) {
      console.log('JOYFUL');
      return RosaryMysteriesEnum.JOYFUL;
    }
    else if (this.dayOfWeek === TUE || this.dayOfWeek === FRI) {
      console.log('SORROWFUL');
      return RosaryMysteriesEnum.SORROWFUL;
    }
    console.log('LUMINOUS');
    return RosaryMysteriesEnum.LUMINOUS;
  }

  selectByDay() {
    if (this.mysteryOfTheDay === RosaryMysteriesEnum.GLORIOUS) {
      this.selectGlorious();
    }
    else if (this.mysteryOfTheDay === RosaryMysteriesEnum.JOYFUL) {
      this.selectJoyful();
    }
    else if (this.mysteryOfTheDay === RosaryMysteriesEnum.SORROWFUL) {
      this.selectSorrowful();
    }
    else {
      this.selectLuminous();
    }
  }

  selectGlorious() {
    console.log(`selectGlorious`);
    this.selectedMysteryEvent.emit(RosaryMysteriesEnum.GLORIOUS);
  }

  selectJoyful() {
    console.log(`selectJoyful`);
    this.selectedMysteryEvent.emit(RosaryMysteriesEnum.JOYFUL);
  }

  selectLuminous() {
    console.log(`selectLuminous`);
    this.selectedMysteryEvent.emit(RosaryMysteriesEnum.LUMINOUS);
  }

  selectSorrowful() {
    console.log(`selectSorrowful`);
    this.selectedMysteryEvent.emit(RosaryMysteriesEnum.SORROWFUL);
  }

}
