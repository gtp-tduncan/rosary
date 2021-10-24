import { Component, Input, OnInit } from '@angular/core';
import { BeadGroupList } from 'src/app/models/bead-group-list';

@Component({
  selector: 'app-mystery-display',
  templateUrl: './mystery-display.component.html',
  styleUrls: ['./mystery-display.component.scss']
})
export class MysteryDisplayComponent implements OnInit {

  @Input()
  activeBeadGroupList: BeadGroupList;

  private mysteryNumbers = [undefined, 'First', 'Second', 'Third', 'Fourth', 'Fifth'];

  constructor() { }

  ngOnInit(): void {
  }


  get mysteryNum(): string {
    return this.mysteryNumbers[this.activeBeadGroupList.mysteryNumber()];
  }

  get mysteryName(): string {
    return this.activeBeadGroupList.mysterySequenceName();
  }

  get mysteryLiteralLabel(): string {
    return $localize`:@@mysteryLiteral:Mystery`;
  }
}
