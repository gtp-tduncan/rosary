import { Component } from '@angular/core';
import { BeadGroupList } from './models/bead-group-list';
import { RosaryMysteriesEnum } from './sequences/rosary-helper';
import { BeadGroupLoaderService } from './services/bead-group-loader.service';
import { version } from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = $localize`:@@rosaryTitle:Rosary`;

  selectedBeadGroupList: BeadGroupList;

  appVersion: string = version;
  dateStarted: Date;

  constructor(private beadGroupLoader: BeadGroupLoaderService) {
    const now = new Date();
    this.dateStarted = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }

  onMysterySelected(selectedMystery: RosaryMysteriesEnum) {
    this.selectedBeadGroupList = this.beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(selectedMystery);
  }

  get showMysterySelector(): boolean {
    return this.selectedBeadGroupList === undefined;
  }

  onResetEvent(flag: boolean) {
    this.selectedBeadGroupList = undefined;
  }

}
