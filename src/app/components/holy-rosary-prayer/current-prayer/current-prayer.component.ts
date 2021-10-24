import { Component, Input, OnInit } from '@angular/core';
import { BeadGroup } from 'src/app/models/bead-group';
import { Prayer, PrayerHailMary } from 'src/app/prayers/common-prayers';

const cssClassesColumn1 = 'gtp-cell-plain-1 gtp-cell-plain-1-phone gtp-pre-line';
const cssClassesColumn2 = 'gtp-cell-plain-11 gtp-cell-plain-11-phone gtp-pre-line';

@Component({
  selector: 'app-current-prayer',
  templateUrl: './current-prayer.component.html',
  styleUrls: ['./current-prayer.component.scss']
})
export class CurrentPrayerComponent implements OnInit {

  @Input()
  activeBeadGroup: BeadGroup;

  @Input()
  currentPrayer: Prayer;

  @Input()
  prayerName: string;

  @Input()
  debugTheEnd: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(`ngOnInit() debugTheEnd: ${this.debugTheEnd}`);
  }

  beadStatus(): string {
    return (this.currentPrayer instanceof PrayerHailMary)
      ? `(${this.activeBeadGroup.index + 1} / ${this.activeBeadGroup.maxIndex})`
      : undefined;
  }

  currentPrayerLeader(): string {
    const prefix = (this.activeBeadGroup?.maxIndex > 1)
      ? `(${this.activeBeadGroup.index + 1} / ${this.activeBeadGroup.maxIndex}) `
      : '';
    return `${prefix}${this.currentPrayer.leader}`;
  }

  updateDebugTheEnd(flag: boolean): void {
    this.debugTheEnd = flag;
  }

  leaderLabelCssClass(): string {
    return `prayer-leader-label ${cssClassesColumn1}`;
  }

  leaderCssClass(): string {
    return `prayer-leader ${cssClassesColumn2}`;
  }

  responseLabelCssClass(): string {
    return `prayer-response-label ${cssClassesColumn1}`;
  }

  responseCssClass(): string {
    return `prayer-response ${cssClassesColumn2}`;
  }

}
