import { Mysteries } from 'src/app/models/mysteries';

export class MysterySorrowfulComponent implements Mysteries {

  constructor() { }

  get mysterySequenceName(): string {
    return 'Sorrowful';
  }

  get mystery1(): string {
    return $localize`:@@sorrowful-mystery-1:The Agony in the Garden`;
  }

  get fruit1(): string {
    return $localize`:@@sorrowful-fruit-1:Contrition for our sins`;
  }

  get mystery2(): string {
    return $localize`:@@sorrowful-mystery-2:The Scourging at the Pillar`;
  }

  get fruit2(): string {
    return $localize`:@@sorrowful-fruit-2:Mortification of our senses`;
  }

  get mystery3(): string {
    return $localize`:@@sorrowful-mystery-3:The Crowning of Thorns`;
  }

  get fruit3(): string {
    return $localize`:@@sorrowful-fruit-3:Interior mortification`;
  }

  get mystery4(): string {
    return $localize`:@@sorrowful-mystery-4:The Carrying of the Cross`;
  }

  get fruit4(): string {
    return $localize`:@@sorrowful-fruit-4:Patience under crosses`;
  }

  get mystery5(): string {
    return $localize`:@@sorrowful-mystery-5:The Crucifixion and Death of our Lord`;
  }

  get fruit5(): string {
    return $localize`:@@sorrowful-fruit-5:That we may die to ourselves`;
  }

}
