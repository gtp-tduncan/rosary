import { Component } from '@angular/core';
import { Mysteries } from 'src/app/models/mysteries';

@Component({
  selector: 'app-mystery-joyful',
  templateUrl: './mystery-joyful.component.html',
  styleUrls: ['./mystery-joyful.component.scss']
})
export class MysteryJoyfulComponent implements Mysteries {

  constructor() { }

  get mysterySequenceName(): string {
    return 'Joyful';
  }

  get mystery1(): string {
    return $localize`:@@joyful-mystery-1:The Annunciation`;
  }

  get fruit1(): string {
    return $localize`:@@joyful-fruit-1:Humility`;
  }

  get mystery2(): string {
    return $localize`:@@joyful-mystery-2:The Visitation`;
  }

  get fruit2(): string {
    return $localize`:@@joyful-fruit-2:Charity`;
  }

  get mystery3(): string {
    return $localize`:@@joyful-mystery-3:Birth of our Lord`;
  }

  get fruit3(): string {
    return $localize`:@@joyful-fruit-3:Poverty; detachment from the world`;
  }

  get mystery4(): string {
    return $localize`:@@joyful-mystery-4:The Presentation`;
  }

  get fruit4(): string {
    return $localize`:@@joyful-fruit-4:Obedience`;
  }

  get mystery5(): string {
    return $localize`:@@joyful-mystery-5:The finding of our Lord in the temple`;
  }

  get fruit5(): string {
    return $localize`:@@joyful-fruit-5:Piety`;
  }

}
