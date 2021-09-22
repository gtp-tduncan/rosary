import { Component } from '@angular/core';
import { BeadGroupLoaderService, RosaryMysteriesEnum, SequenceIdEnum } from './services/bead-group-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = $localize`:@@rosaryTitle:Rosary`;

  constructor(private beadGroupLoader: BeadGroupLoaderService) { }

  onMysterySelected(selectedMystery: RosaryMysteriesEnum) {
    console.log(`onMysterySelected: ${selectedMystery}`);
    const beadGroup = this.beadGroupLoader.load(SequenceIdEnum.HOLY_ROSARY);
    let currentBead = beadGroup[0];
    // while (currentBead) {
    console.log(`1: ${currentBead.data.prayerIds} - ${currentBead.data.repeatCount} - ${currentBead.data.sequenceId}`);
    currentBead = currentBead.next();
    // }
    console.log(`2: ${currentBead.data.prayerIds} - ${currentBead.data.repeatCount} - ${currentBead.data.sequenceId}`);
  }

  get showMysterySelector(): boolean {
    return true;
  }

}
