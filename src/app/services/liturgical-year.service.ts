import { Injectable } from '@angular/core';
import { calculateAdventAndChristmas, refreshNeeded } from 'src/utils/dates-advent-christmas';
import { calculateLentAndEaster } from 'src/utils/dates-lent-easter';
import { LiturgicalDates, PeriodStatus } from '../models/liturgical-dates';
import { DateAndLocalizationService } from './date-and-localization.service';

@Injectable({
  providedIn: 'root'
})
export class LiturgicalYearService {

  liturgicalDates: LiturgicalDates;

  constructor(private localization: DateAndLocalizationService) {
    this.validateDates();
  }

  validateDates() {
    let rawDates = window.localStorage.getItem('rosary.liturgical-dates');

    try {
      if (rawDates) {
        this.liturgicalDates = JSON.parse(rawDates) as LiturgicalDates;
      }
    }
    catch (error) {
      this.liturgicalDates = undefined;
    }

    this.refreshLiturgicalDates();
  }

  private refreshLiturgicalDates() {
    let workingCopy: LiturgicalDates = new LiturgicalDates(this.liturgicalDates);

    this.refreshAdventAndChristmas(workingCopy);
    this.refreshLentAndEaster(workingCopy);

    this.liturgicalDates = workingCopy;
  }

  private refreshAdventAndChristmas(workingCopy: LiturgicalDates) {
    const adventStatus = refreshNeeded(workingCopy?.advent, this.localization);
    const christmasStatus = refreshNeeded(workingCopy?.christmas, this.localization);

    if (PeriodStatus.GOOD !== adventStatus || PeriodStatus.GOOD !== christmasStatus) {
      const updatedAdventChristmas = calculateAdventAndChristmas(this.localization)
      workingCopy.christmas = updatedAdventChristmas.christmas;
      workingCopy.advent = updatedAdventChristmas.advent;
    }
  }

  private refreshLentAndEaster(workingCopy: LiturgicalDates) {
    const lentStatus = refreshNeeded(workingCopy?.lent, this.localization);
    const triduumStatus = refreshNeeded(workingCopy?.triduum, this.localization);
    const easterStatus = refreshNeeded(workingCopy?.easter, this.localization);

    if (PeriodStatus.GOOD !== lentStatus || PeriodStatus.GOOD !== triduumStatus || PeriodStatus.GOOD !== easterStatus) {
      const updatedLentEaster = calculateLentAndEaster(this.localization);
      workingCopy.lent = updatedLentEaster.lent;
      workingCopy.easter = updatedLentEaster.easter;
      workingCopy.triduum = updatedLentEaster.triduum;
    }
  }

}
