export abstract class Prayer {
  abstract get name(): string;

  abstract get leader(): string;

  abstract get response(): string;

  get all(): string {
    return undefined;
  }
}

/* ================================================================================ */

export abstract class GroupPrayer extends Prayer {

  get leader() {
    return undefined;
  }

  get response() {
    return undefined;
  }

  abstract get all(): string;
}

/* ================================================================================ */

export class PrayerApostlesCreed extends GroupPrayer {

  constructor() {
    super();
  }

  get name(): string {
    return $localize`:@@creedName:Apostles' Creed`;
  }

  get all(): string {
    return $localize`:@@creed:I believe in God the Father almighty
      Creator of Heaven and Earth;
      I believe in Jesus Christ, His only Son, Our Lord
      who was conceived by the Holy Spirit,
      born of the Virgin Mary,
      suffered under Pontius Pilate,
      was crucified, died and was buried;
      He decended into hell;
      the third day He rose again from the dead;
      He ascended into heaven,
      sits at the right hand of God the Father Almighty;
      from there He shall come to judge
         the living and the dead.
      I believe in the Holy Spirit;
      the Holy Catholic Church,
      the communion of saints;
      the forgiveness of sins;
      the resurrection of the body;
      and life everylasting.
      Amen.`;
  }

}

/* ================================================================================ */

export class PrayerClosing1 extends Prayer {

  constructor() {
    super();
  }

  get name(): string {
    return $localize`:@@closingName1:Closing Prayer 1`;
  }

  get leader(): string {
    return $localize`:@@closing-leader-1:Pray for us, O holy Mother of God.`;
  }

  get response(): string {
    return $localize`:@@closing-response-1:That we may be made worthy of the promises of Christ.`;
  }

}

/* ================================================================================ */

export class PrayerClosing2 extends Prayer {

  constructor() {
    super();
  }

  get name(): string {
    return $localize`:@@closingName2:Closing Prayer 2`;
  }

  get leader(): string {
    return $localize`:@@closing-leader-2:Let us pray:`;
  }

  get response(): string {
    return $localize`:@@closing-response-2:O God, whose only begotten Son,
      by His life, death and resurrection,
      has purchased for us
      the rewards of eternal life,
      grant, we beseech Thee,
      that meditating on these mysteries
      of the Most Holy Rosary
      of the Blessed Virgin Mary,
      we may imitate what they contain,
      and obtain what they promise,
      through the same Christ, our Lord.

      Amen.`
  }

}

/* ================================================================================ */

function gloryBeLeader(): string {
  return $localize`:@@glory-leader:Glory be to the Father, and the Son,
      and the Holy Spirit.`;
}

function gloryBeResponse(): string {
  return $localize`:@@glory-response:As it was in the beginning, is now,
      and ever shall be, world without end.

      Amen.`;
}

/* ================================================================================ */

export class PrayerFatima extends GroupPrayer {

  constructor() {
    super();
  }

  get name(): string {
    return $localize`:@@fatimaName:The Fatima Prayer`;
  }

  get all(): string {
    return $localize`:@@fatima:Oh my Jesus, forgive us our sins,
      save us from the fires of hell;
      lead all souls to heaven,
      especially those in most need of your mercy!

      Amen.`;
  }

}

/* ================================================================================ */

export class PrayerGlory extends Prayer {

  constructor() {
    super();
  }

  // Reference: https://www.usccb.org/prayers/prayers-rosary
  get name(): string {
    return $localize`:@@gloryName:The Glory Be (The Doxology)`;
  }

  get leader(): string {
    return gloryBeLeader();
  }

  get response(): string {
    return gloryBeResponse();
  }

}

/* ================================================================================ */

export class PrayerGloryFatima extends Prayer {

  private gloryPrayer = new PrayerGlory();
  private fatimaPrayer = new PrayerFatima();

  constructor() {
    super();
  }

  get name(): string {
    return `${this.gloryPrayer.name} / ${this.fatimaPrayer.name}`;
  }

  get leader(): string {
    return this.gloryPrayer.leader;
  }

  get response(): string {
    return `${this.gloryPrayer.response}

      ${this.fatimaPrayer.response}`;
  }

}

/* ================================================================================ */

export class PrayerHailHolyQueen extends GroupPrayer {

  constructor() {
    super();
  }

  get all(): string {
    return $localize`:@@hail-holy-queen:Hail, Holy Queen, Mother of Mercy,
      our life, our sweetness, and our hope.
      To thee do we cry, poor banished children of Eve.
      To thee do we send up our sighs, mourning and weeping in this vale of tears.
      Turn then, most gracious advocate, thine eyes of mercy towards us,
      and after this our exile show unto us the blessed fruit of thy womb, Jesus.
      O clement, O loving, O sweet Virgin Mary.

      Amen`;
  }

  get name(): string {
    throw new Error("Method not implemented.");
  }

}

/* ================================================================================ */

export class PrayerHailMary extends Prayer {

  constructor() {
    super();
  }

  // Reference: https://www.usccb.org/prayers/prayers-rosary
  get name(): string {
    return $localize`:@@hailMaryName:Hail Mary`;
  }

  get leader(): string {
    return $localize`:@@hail-mary-leader:Hail Mary, full of grace,
      the Lord is with thee;
      blessed art thou amongst women,
      and blessed is the fruit of thy womb, Jesus.`;
  }

  get response(): string {
    return $localize`:@@hail-mary-response:Holy Mary, Mother of God,
      pray for us sinners,
      now, and at the hour of our death.

      Amen.`;
  }

}

/* ================================================================================ */

export class PrayerOurFather extends Prayer {

  constructor() {
    super();
  }

  // Reference: https://www.usccb.org/prayers/prayers-rosary
  get name(): string {
    return $localize`:@@ourFatherName:Our Father`;
  }

  get leader(): string {
    return $localize`:@@our-father-leader:Our Father who art in heaven,
      hallowed be Thy name;
      Thy kingdom come;
      Thy will be done
      on earth as it is in heaven.`;
  }

  get response(): string {
    return $localize`:@@our-father-response:Give us this day our daily bread;
      and forgive us our trespasses,
      as we forgive those who trespass against us;
      and lead us not into temptation;
      but deliver us from evil.

      Amen.`;
  }

}

/* ================================================================================ */

export class PrayerSignOfTheCross extends GroupPrayer {

  constructor() {
    super();
  }

  // Reference: https://www.usccb.org/prayers/prayers-rosary
  get name(): string {
    return $localize`:@@signCrossName:The Sign of the Cross`;
  }

  get all(): string {
    return $localize`:@@sign-cross:In the name of the Father,
      and of the Son,
      and of the Holy Spirit.

      Amen.`
  }

}
