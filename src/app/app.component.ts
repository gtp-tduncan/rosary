import { Component } from '@angular/core';
import { BeadGroupList } from './models/bead-group-list';
import { BeadGroupLoaderService, RosaryMysteriesEnum, SequenceIdEnum } from './services/bead-group-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = $localize`:@@rosaryTitle:Rosary`;

  selectedBeadGroupList: BeadGroupList;

  constructor(private beadGroupLoader: BeadGroupLoaderService) { }

  onMysterySelected(selectedMystery: RosaryMysteriesEnum) {
    this.selectedBeadGroupList = this.beadGroupLoader.loadMysteryEnum(SequenceIdEnum.HOLY_ROSARY, selectedMystery);
  }

  get showMysterySelector(): boolean {
    return this.selectedBeadGroupList === undefined;
  }

}
