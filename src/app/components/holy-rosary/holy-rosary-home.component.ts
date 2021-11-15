import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { BeadGroupLoaderService } from '../../services/bead-group-loader.service';
import { RosaryMysteriesEnum } from '../../sequences/rosary-helper';
import { BeadGroupList } from '../../models/bead-group-list';
import { AppConfigService } from '../../services/app-config.service';
import { LiturgicalYearService } from 'src/app/services/liturgical-year.service';
import { HolyRosaryPrayerComponent } from './holy-rosary-prayer/holy-rosary-prayer.component';

@Component({
  selector: 'app-holy-rosary-home',
  templateUrl: './holy-rosary-home.component.html',
  styleUrls: ['./holy-rosary-home.component.scss']
})
export class HolyRosaryHomeComponent implements OnInit {

  @Input()
  selectedMysteryId: string;

  selectedBeadGroupList: BeadGroupList;

  prayerName: string;

  navigationEnabled: boolean;

  // @ViewChild(ActivePrayerComponent)
  // activePrayer: ActivePrayerComponent;

  @ViewChild(HolyRosaryPrayerComponent)
  holyRosaryPrayer: HolyRosaryPrayerComponent;

  elem: any;

  constructor(private beadGroupLoader: BeadGroupLoaderService,
              public appConfig: AppConfigService,
              private liturgicalYear: LiturgicalYearService,
              @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit(): void {
    console.log(`selectedMysteryId: ${this.selectedMysteryId}`);
    if (this.selectedMysteryId) {
      this.onMysterySelected(RosaryMysteriesEnum[this.selectedMysteryId]);
    }
    this.elem = document.documentElement;
  }

  onMysterySelected(selectedMystery: RosaryMysteriesEnum): void {
    console.log(`onMysterySelected - ${selectedMystery}`);
    this.selectedBeadGroupList = this.beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(selectedMystery);
    this.prayerName = this.selectedBeadGroupList.prayerName;
  }

  get showMysterySelector(): boolean {
    return this.selectedBeadGroupList === undefined;
  }

  onConfig(): void {

  }

  onResetPrayer(flag: boolean): void {
    this.selectedBeadGroupList = undefined;
    this.liturgicalYear.overrideLiturgicalColor = undefined;
  }

  onEnableNavigation(flag: boolean): void {
    console.log(`home: ${flag}`);
    this.navigationEnabled = flag;
  }

  onNext(): void {
    this.holyRosaryPrayer.onNext();
  }

  onPrevious(): void {
    this.holyRosaryPrayer.onPrevious();
  }

  onSwipe(event) {
    if (Hammer.DIRECTION_LEFT === event?.direction) {
      this.onNext();
    }
    else if (Hammer.DIRECTION_RIGHT === event?.direction) {
      this.onPrevious();
    }
  }

  onToggleView(): void {
    this.appConfig.toggleView();
    if (this.appConfig.isFullscreen) {
      this.openFullscreen();
    }
    else {
      this.closeFullscreen();
    }
  }
  openFullscreen() {
    if (this.elem.requestFullscreen) {
      console.log(`${this.elem.requestFullscreen}`);
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
}
