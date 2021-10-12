import { Component, OnInit, ViewChild } from '@angular/core';
import { BeadGroupLoaderService } from '../../services/bead-group-loader.service';
import { RosaryMysteriesEnum } from '../../sequences/rosary-helper';
import { BeadGroupList } from '../../models/bead-group-list';
import { AppConfigService } from '../../services/app-config.service';
import { ElementBoundaryUtils } from 'src/utils/element-boundary-utils';
import { ActivePrayerComponent } from '../active-prayer/active-prayer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedBeadGroupList: BeadGroupList;

  @ViewChild(ActivePrayerComponent)
  activePrayer: ActivePrayerComponent;

  private elementBoundary: ElementBoundaryUtils;
  private _homeContentBorderStyle: string;

  constructor(private beadGroupLoader: BeadGroupLoaderService,
              public appConfig: AppConfigService) {
  }

  ngOnInit(): void {
    // window.addEventListener('resize', this.onResize.bind(this), false);
  }

  onMysterySelected(selectedMystery: RosaryMysteriesEnum): void {
    this.selectedBeadGroupList = this.beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(selectedMystery);
  }

  // onResize(event) {
  //   if (this.elementBoundary === undefined) {
  //     console.log(`Initializing element boundary utils`);
  //     this.elementBoundary = new ElementBoundaryUtils();
  //   }
  //   const element = document.querySelector('#home-content-border');
  //   const result = this.elementBoundary.validateRectWindowBase(element.getBoundingClientRect());
  //   if (result.hasChanges) {
  //     this._homeContentBorderStyle = result.elementStyle;
  //     this.activePrayer.validateOnResizeEvent(result.elementRect, this.elementBoundary);
  //   }
  //   console.log(`homeContentBorderStyle: ${this._homeContentBorderStyle}`);
  //   const element2 = document.querySelector('.page-full');
  //   console.log(`innerHtml-2: ${element2.innerHTML}`);
  // }

  get showMysterySelector(): boolean {
    return this.selectedBeadGroupList === undefined;
  }

  homeContentBorderStyle(): string {
    return this._homeContentBorderStyle;
  }

  onResetEvent(flag: boolean): void {
    this.selectedBeadGroupList = undefined;
  }

}
