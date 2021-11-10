import { Component, Input, OnInit, ViewChild } from '@angular/core';
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

  constructor(private beadGroupLoader: BeadGroupLoaderService,
              public appConfig: AppConfigService,
              private liturgicalYear: LiturgicalYearService) {
  }

  ngOnInit(): void {
    console.log(`selectedMysteryId: ${this.selectedMysteryId}`);
    if (this.selectedMysteryId) {
      this.onMysterySelected(RosaryMysteriesEnum[this.selectedMysteryId]);
    }
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
    this.activePrayer.onNext();
    navigator.vibrate(250);
  }

  onPrevious(): void {
    this.activePrayer.onPrevious();
    navigator.vibrate(250);
  }

  onSwipe(event) {
    if (Hammer.DIRECTION_LEFT === event?.direction) {
      this.onNext();
    }
    else if (Hammer.DIRECTION_RIGHT === event?.direction) {
      this.onPrevious();
    }
  }

}
