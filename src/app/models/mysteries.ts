export interface Mysteries {

  mysterySequenceName: string;

  mystery1: string;

  fruit1: string;

  mystery2: string;

  fruit2: string;

  mystery3: string;

  fruit3: string;

  mystery4: string;

  fruit4: string;

  mystery5: string;

  fruit5: string;

}

export function mysteryByNumber(mystery: Mysteries, mysteryNum: number): string {
  if (mysteryNum === 1) {
    return mystery.mystery1;
  }
  else if (mysteryNum === 2) {
    return mystery.mystery2;
  }
  else if (mysteryNum === 3) {
    return mystery.mystery3;
  }
  else if (mysteryNum === 4) {
    return mystery.mystery4;
  }
  else if (mysteryNum === 5) {
    return mystery.mystery5;
  }
  return undefined;
}

export function fruitByNumber(mystery: Mysteries, mysteryNum: number): string {
  if (mysteryNum === 1) {
    return mystery.fruit1;
  }
  else if (mysteryNum === 2) {
    return mystery.fruit2;
  }
  else if (mysteryNum === 3) {
    return mystery.fruit3;
  }
  else if (mysteryNum === 4) {
    return mystery.fruit4;
  }
  else if (mysteryNum === 5) {
    return mystery.fruit5;
  }
  return undefined;
}
