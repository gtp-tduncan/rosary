import { Component, Input, OnInit } from '@angular/core';
import { LiturgicalDates, LiturgicalPeriod } from 'src/app/models/liturgical-dates';
import { LiturgicalYearService } from 'src/app/services/liturgical-year.service';

@Component({
  selector: 'app-liturgical-dates',
  templateUrl: './liturgical-dates.component.html',
  styleUrls: ['./liturgical-dates.component.scss']
})
export class LiturgicalDatesComponent implements OnInit {

  periods: LiturgicalPeriod[];
  periodsLeft: LiturgicalPeriod[];
  periodsRight: LiturgicalPeriod[];

  constructor(private liturgicalYear: LiturgicalYearService) { }

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
  }

}
