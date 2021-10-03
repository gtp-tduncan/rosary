import { LiturgicalDates, LiturgicalPeriod, PeriodStatus } from "src/app/models/liturgical-dates";
import { DateAndLocalizationService } from "src/app/services/date-and-localization.service";
import { addDays, Months } from "./key-dates";

export function refreshNeeded(period: LiturgicalPeriod, localization: DateAndLocalizationService): PeriodStatus {
  const hasStart = period?.startDate !== undefined;
  const hasEnd = period?.endDate !== undefined;

  if (!hasStart && !hasEnd) {
    return PeriodStatus.MISSING;
  }

  return (hasEnd && period.endDate > localization.appDate.date) || (!hasEnd && period.startDate > localization.appDate.date)
    ? PeriodStatus.INCREMENT_YEAR
    : PeriodStatus.GOOD;

}

export function calculateAdventAndChristmas(localization: DateAndLocalizationService): LiturgicalDates {
  const nextChristmasDay = calculateNextChristmas(localization);

  const adventYear = nextChristmasDay.startDate.getFullYear();
  const dowChristmasDay = nextChristmasDay.startDate.getDay();
  const sundayBeforeChristmas = (dowChristmasDay === 0) ? 7 : dowChristmasDay;
  const adventStartsDaysBack = nextChristmasDay.startDate.getDate() - 21 - sundayBeforeChristmas;
  const adventStarts = (adventStartsDaysBack >= 1)
    ? new Date(adventYear, Months.DEC, adventStartsDaysBack)
    : new Date(adventYear, Months.NOV, adventStartsDaysBack + 30);

  return {
    christmas: nextChristmasDay,
    advent: {
      startDate: adventStarts,
      endDate: new Date(adventYear, Months.DEC, 24),
      name: localization.adventLabel
    }
  }
}

function calculateNextChristmas(localization: DateAndLocalizationService): LiturgicalPeriod {
  let christmasDay = new Date(localization.appDate.currentYear, Months.DEC, 25);

  if (localization.appDate.date > christmasDay) {
    christmasDay = new Date(localization.appDate.currentYear + 1, Months.DEC, 25);
  }

  const endOfChristmas = calculateEndOfChristmasSeason(christmasDay);

  return {
    startDate: christmasDay,
    endDate: endOfChristmas,
    name: localization.christmasLabel
  };
}

function calculateEndOfChristmasSeason(christmasDay: Date): Date {
  // TODO: Less certain about how end of Christmas season is determined
  const jan6 = new Date(christmasDay.getFullYear() + 1, Months.JAN, 6);
  const daysInFuture = 7 - jan6.getDay();
  return addDays(jan6, daysInFuture);
}
