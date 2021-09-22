import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Mysteries } from 'src/app/models/mysteries';
import { RosaryMysteriesEnum, SequenceIdEnum } from 'src/app/services/bead-group-loader.service';
import { MysteryGloriousComponent } from '../mysteries/mystery-glorious/mystery-glorious.component';
import { MysteryJoyfulComponent } from '../mysteries/mystery-joyful/mystery-joyful.component';
import { MysteryLuminousComponent } from '../mysteries/mystery-luminous/mystery-luminous.component';
import { MysterySorrowfulComponent } from '../mysteries/mystery-sorrowful/mystery-sorrowful.component';

@Component({
  selector: 'app-mystery-selector',
  templateUrl: './mystery-selector.component.html',
  styleUrls: ['./mystery-selector.component.scss']
})
export class MysterySelectorComponent implements OnInit {

  @Output()
  selectedMysteryEvent = new EventEmitter<RosaryMysteriesEnum>();

  constructor() { }

  ngOnInit(): void {
  }

  selectByDayLabel(): string {
    return 'Select by Day';
  }

  selectByDay() {

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
