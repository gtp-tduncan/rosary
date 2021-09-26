import { Component } from '@angular/core';
import { Mysteries } from 'src/app/models/mysteries';

@Component({
  selector: 'app-mystery-sorrowful',
  templateUrl: './mystery-sorrowful.component.html',
  styleUrls: ['./mystery-sorrowful.component.scss']
})
export class MysterySorrowfulComponent implements Mysteries {

  constructor() { }

  get mysterySequenceName(): string {
    return 'Sorrowful';
  }

  get mystery1(): string {
    return $localize`:@@sorrowful-mystery-1:The Resurrection`;
  }

  get fruit1(): string {
    return $localize`:@@sorrowful-fruit-1:A conversion of heart`;
  }

  get mystery2(): string {
    return $localize`:@@sorrowful-mystery-2:The Ascension`;
  }

  get fruit2(): string {
    return $localize`:@@sorrowful-fruit-2:A desire for heaven`;
  }

  get mystery3(): string {
    return $localize`:@@sorrowful-mystery-3:The coming of the Holy Spirit`;
  }

  get fruit3(): string {
    return $localize`:@@sorrowful-fruit-3:The gifts of the Holy Spirit`;
  }

  get mystery4(): string {
    return $localize`:@@sorrowful-mystery-4:The Assumption of the Blessed Mother`;
  }

  get fruit4(): string {
    return $localize`:@@sorrowful-fruit-4:Devotion to Mary`;
  }

  get mystery5(): string {
    return $localize`:@@sorrowful-mystery-5:The Coronation of the Blessed Mother`;
  }

  get fruit5(): string {
    return $localize`:@@sorrowful-fruit-5:Eternal happiness`;
  }


}
