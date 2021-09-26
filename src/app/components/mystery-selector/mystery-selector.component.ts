import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RosaryMysteriesEnum } from 'src/app/services/bead-group-loader.service';

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
