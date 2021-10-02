import { Mysteries } from 'src/app/models/mysteries';

export class MysteryGloriousComponent implements Mysteries {

  constructor() { }

  get mysterySequenceName(): string {
    return 'Glorious';
  }

  get mystery1(): string {
    return $localize`:@@glorious-mystery-1:The Resurrection`;
  }

  get fruit1(): string {
    return $localize`:@@glorious-fruit-1:A conversion of heart`;
  }

  get mystery2(): string {
    return $localize`:@@glorious-mystery-2:The Ascension`;
  }

  get fruit2(): string {
    return $localize`:@@glorious-fruit-2:A desire for heaven`;
  }

  get mystery3(): string {
    return $localize`:@@glorious-mystery-3:The coming of the Holy Spirit`;
  }

  get fruit3(): string {
    return $localize`:@@glorious-fruit-3:The gifts of the Holy Spirit`;
  }

  get mystery4(): string {
    return $localize`:@@glorious-mystery-4:The Assumption of the Blessed Mother`;
  }

  get fruit4(): string {
    return $localize`:@@glorious-fruit-4:Devotion to Mary`;
  }

  get mystery5(): string {
    return $localize`:@@glorious-mystery-5:The Coronation of the Blessed Mother`;
  }

  get fruit5(): string {
    return $localize`:@@glorious-fruit-5:Eternal happiness`;
  }

}
