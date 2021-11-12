import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { BeadGroupLoaderService } from '../../services/bead-group-loader.service';
import { RosaryMysteriesEnum } from '../../sequences/rosary-helper';
import { BeadGroupList } from '../../models/bead-group-list';
import { AppConfigService } from '../../services/app-config.service';
import { ActivePrayerComponent } from '../active-prayer/active-prayer.component';
import { LiturgicalYearService } from 'src/app/services/liturgical-year.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input()
  selectedMysteryId: string;

  selectedBeadGroupList: BeadGroupList;

  navigationEnabled: boolean;

  @ViewChild(ActivePrayerComponent)
  activePrayer: ActivePrayerComponent;

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
    this.openFullscreen();
  }

  onMysterySelected(selectedMystery: RosaryMysteriesEnum): void {
    this.selectedBeadGroupList = this.beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(selectedMystery);
  }

  get showMysterySelector(): boolean {
    return this.selectedBeadGroupList === undefined;
  }

  onResetEvent(flag: boolean): void {
    this.selectedBeadGroupList = undefined;
    this.liturgicalYear.overrideLiturgicalColor = undefined;
  }

  onEnableNavigation(flag: boolean): void {
    console.log(`home: ${flag}`);
    this.navigationEnabled = flag;
  }

  onNext(): void {
    console.log('home - window.navigator.vibrate([1000, 100, 250]);');
    this.activePrayer.onNext();
    // navigator.vibrate([1000, 100, 250]);
  }

  onPrevious(): void {
    console.log('home - window.navigator.vibrate([250, 250, 250]);');
    this.activePrayer.onPrevious();
    // navigator.vibrate([250, 250, 250]);
  }

  onSwipe(event) {
    if (Hammer.DIRECTION_LEFT === event?.direction) {
      this.onNext();
    }
    else if (Hammer.DIRECTION_RIGHT === event?.direction) {
      this.onPrevious();
    }
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
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
