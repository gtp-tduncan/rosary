export enum Months {
  JAN = 0,
  FEB,
  MAR,
  APR,
  MAY,
  JUN,
  JUL,
  AUG,
  SEP,
  OCT,
  NOV,
  DEC
}

/**
 * Reference:
 * https://www.geeksforgeeks.org/how-to-calculate-the-easter-date-for-a-given-year-using-gauss-algorithm/
 *
 * @param year
 */
export function gaussEaster(year: number) {
  const a = year % 19;
  const b = year % 4;
  const c = year % 7;

  const p = Math.floor(year / 100);
  const q = Math.floor((13 + 8 * p) / 25);

  const m = Math.floor(15 - q + p - p / 4) % 30;
  const n = Math.floor(4 + p - p / 4) % 7;
  const d = Math.floor(19 * a + m) % 30;
  const e = Math.floor(2 * b + 4 * c + 6 * d + n) % 7;

  const days = Math.floor(22 + d + e);

  if (d == 29 && e == 6) {
    return new Date(year, Months.APR, 19);
  }
  else if (d == 28 && e == 6) {
    return new Date(year, Months.APR, 18);
  }

  return (days > 31)
    ? new Date(year, Months.APR, days - 31)
    : new Date(year, Months.MAR, days);
}

export function isAdvent(): boolean {
  const baseNow = new Date();
  const year = baseNow.getFullYear();
  const now = new Date(year, baseNow.getMonth(), baseNow.getDate());
  const christmasDay = new Date(year, Months.DEC, 25);
  const dowChristmasDay = christmasDay.getDay();
  const adventStartsDaysBack = dowChristmasDay - 28;
  const adventStarts = (adventStartsDaysBack >= 1)
    ? new Date(year, Months.DEC, adventStartsDaysBack)
    : new Date(year, Months.NOV, adventStartsDaysBack + 30);

  return adventStarts <= now && now <= christmasDay;
}
