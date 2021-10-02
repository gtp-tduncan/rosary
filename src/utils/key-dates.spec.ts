import { gaussEaster } from "./key-dates";

const easterData: GaussDate[] = [
  { year: 2001, expectedDate: new Date(2001, 3, 15) },
  { year: 2002, expectedDate: new Date(2002, 2, 31) },
  { year: 2003, expectedDate: new Date(2003, 3, 20) },
  { year: 2004, expectedDate: new Date(2004, 3, 11) },
  { year: 2005, expectedDate: new Date(2005, 2, 27) },
  { year: 2006, expectedDate: new Date(2006, 3, 16) },
  { year: 2007, expectedDate: new Date(2007, 3, 8) },
  { year: 2008, expectedDate: new Date(2008, 2, 23) },
  { year: 2009, expectedDate: new Date(2009, 3, 12) },
  { year: 2010, expectedDate: new Date(2010, 3, 4) },
  { year: 2011, expectedDate: new Date(2011, 3, 24) },
  { year: 2012, expectedDate: new Date(2012, 3, 8) },
  { year: 2013, expectedDate: new Date(2013, 2, 31) },
  { year: 2014, expectedDate: new Date(2014, 3, 20) },
  { year: 2015, expectedDate: new Date(2015, 3, 5) },
  { year: 2016, expectedDate: new Date(2016, 2, 27) },
  { year: 2017, expectedDate: new Date(2017, 3, 16) },
  { year: 2018, expectedDate: new Date(2018, 3, 1) },
  { year: 2019, expectedDate: new Date(2019, 3, 21) },
  { year: 2020, expectedDate: new Date(2020, 3, 12) },
  { year: 2021, expectedDate: new Date(2021, 3, 4) },
  { year: 2022, expectedDate: new Date(2022, 3, 17) },
  { year: 2023, expectedDate: new Date(2023, 3, 9) },
  { year: 2024, expectedDate: new Date(2024, 2, 31) },
  { year: 2025, expectedDate: new Date(2025, 3, 20) },
  { year: 2026, expectedDate: new Date(2026, 3, 5) },
  { year: 2027, expectedDate: new Date(2027, 2, 28) },
  { year: 2028, expectedDate: new Date(2028, 3, 16) },
  { year: 2029, expectedDate: new Date(2029, 3, 1) },
  { year: 2030, expectedDate: new Date(2030, 3, 21) },
  { year: 2031, expectedDate: new Date(2031, 3, 13) },
  { year: 2032, expectedDate: new Date(2032, 2, 28) },
  { year: 2033, expectedDate: new Date(2033, 3, 17) },
  { year: 2034, expectedDate: new Date(2034, 3, 9) },
  { year: 2035, expectedDate: new Date(2035, 2, 25) },
  { year: 2036, expectedDate: new Date(2036, 3, 13) },
  { year: 2037, expectedDate: new Date(2037, 3, 5) },
  { year: 2038, expectedDate: new Date(2038, 3, 25) },
  { year: 2039, expectedDate: new Date(2039, 3, 10) },
  { year: 2040, expectedDate: new Date(2040, 3, 1) },
  { year: 2041, expectedDate: new Date(2041, 3, 21) }
];

describe('calculate Easter', () => {
  easterData.forEach(testData => {
    it(`should find Easter on ${testData.expectedDate} for the year ${testData.year}`, () => {
      const answer = gaussEaster(testData.year);
      expect(answer).toEqual(new Date(testData.expectedDate));
    })
  })
});

interface GaussDate {
  year: number;
  expectedDate: Date;
}
