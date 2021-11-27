import { Component, OnInit } from '@angular/core';
import { LiturgicalColors } from 'src/app/models/liturgical-colors';
import { automaticSelection, LiturgicalPeriod, ordinaryTime } from 'src/app/models/liturgical-dates';
import { AppConfigService } from 'src/app/services/app-config.service';
import { LiturgicalYearService } from 'src/app/services/liturgical-year.service';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-liturgical-dates',
  templateUrl: './liturgical-dates.component.html',
  styleUrls: ['./liturgical-dates.component.scss']
})
export class LiturgicalDatesComponent implements OnInit {

  periods: LiturgicalPeriod[];
  periodsLeft: LiturgicalPeriod[];
  periodsRight: LiturgicalPeriod[];

  litYearColorSelector: LiturgicalPeriod[];

  constructor(private liturgicalYear: LiturgicalYearService,
              private localizationUtil: LocalizationService) { }

  ngOnInit(): void {
    const liturgicalDates = this.liturgicalYear?.liturgicalDates;

    let periods = [
      liturgicalDates.advent,
      liturgicalDates.christmas,
      liturgicalDates.lent,
      liturgicalDates.triduum,
      liturgicalDates.easter
    ]

    periods.sort((period1: LiturgicalPeriod, period2: LiturgicalPeriod) => {
      return period1.startDate < period2.startDate ? -1 : 1;
    });

    this.periodsLeft = [
      periods[0], periods[1], periods[2]
    ];

    this.periodsRight = [
      periods[3], periods[4]
    ];

    this.periods = periods;

    this.litYearColorSelector = [
      automaticSelection,
      ordinaryTime,
      ...periods
    ]
  }

  labelFromId(labelId: string): string {
    if (':@@adventLabel' === labelId) {
      return this.localizationUtil.adventLabel;
    }
    else if (':@@christmasLabel' === labelId) {
      return this.localizationUtil.christmasLabel;
    }
    else if (':@@lentLabel' === labelId) {
      return this.localizationUtil.lentLabel;
    }
    else if (':@@triduumLabel' === labelId) {
      return this.localizationUtil.triduumLabel;
    }
    else if (':@@easterLabel' === labelId) {
      return this.localizationUtil.easterLabel;
    }
    return labelId;
  }

  onLiturgicalPeriodChanged(newValue: string): void {
    const idx = Number.parseInt(newValue);
    if (idx === 0) {
      this.liturgicalYear.overrideLiturgicalColor = undefined;
    }
    else if (idx >= 1 && idx < this.litYearColorSelector.length) {
      this.liturgicalYear.overrideLiturgicalColor = this.litYearColorSelector[idx].color;
    }
  }
}
