import { Mysteries } from 'src/app/models/mysteries';

export class MysteryLuminousComponent implements Mysteries {

  constructor() { }

  get mysterySequenceName(): string {
    return 'Luminous';
  }

  get mystery1(): string {
    return $localize`:@@luminous-mystery-1:The Baptism in the Jordan`;
  }

  get fruit1(): string {
    return $localize`:@@luminous-fruit-1:Openness to the Holy Spirit`;
  }

  get mystery2(): string {
    return $localize`:@@luminous-mystery-2:The Wedding Feast at Cana`;
  }

  get fruit2(): string {
    return $localize`:@@luminous-fruit-2:To Jesus through Mary`;
  }

  get mystery3(): string {
    return $localize`:@@luminous-mystery-3:The Proclamation of the Kingdom of God`;
  }

  get fruit3(): string {
    return $localize`:@@luminous-fruit-3:Conversion`;
  }

  get mystery4(): string {
    return $localize`:@@luminous-mystery-4:The Transfiguration`;
  }

  get fruit4(): string {
    return $localize`:@@luminous-fruit-4:Desire for holiness`;
  }

  get mystery5(): string {
    return $localize`:@@luminous-mystery-5:The Instituation of the Eucharist`;
  }

  get fruit5(): string {
    return $localize`:@@luminous-fruit-5:Adoration`;
  }

}
