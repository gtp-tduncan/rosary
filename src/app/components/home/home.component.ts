import { Component, OnInit } from '@angular/core';
import { BeadGroupLoaderService } from '../../services/bead-group-loader.service';
import { RosaryMysteriesEnum } from '../../sequences/rosary-helper';
import { BeadGroupList } from '../../models/bead-group-list';
import { AppConfigService } from '../../services/app-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedBeadGroupList: BeadGroupList;

  constructor(private beadGroupLoader: BeadGroupLoaderService,
              public appConfig: AppConfigService) {
  }

  ngOnInit(): void { }

  onMysterySelected(selectedMystery: RosaryMysteriesEnum): void {
    this.selectedBeadGroupList = this.beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(selectedMystery);
  }

  get showMysterySelector(): boolean {
    return this.selectedBeadGroupList === undefined;
  }

  onResetEvent(flag: boolean): void {
    this.selectedBeadGroupList = undefined;
  }


}
