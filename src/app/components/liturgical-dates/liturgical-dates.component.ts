import { Component, Input, OnInit } from '@angular/core';
import { LiturgicalDates, LiturgicalPeriod } from 'src/app/models/liturgical-dates';

@Component({
  selector: 'app-liturgical-dates',
  templateUrl: './liturgical-dates.component.html',
  styleUrls: ['./liturgical-dates.component.scss']
})
export class LiturgicalDatesComponent implements OnInit {

  @Input()
  liturgicalDates: LiturgicalDates;

  periods: LiturgicalPeriod[];

  constructor() { }

  ngOnInit(): void {
    this.periods = [
      this.liturgicalDates.advent,
      this.liturgicalDates.christmas,
      this.liturgicalDates.lent,
      this.liturgicalDates.triduum,
      this.liturgicalDates.easter
    ]

    this.periods.sort((period1: LiturgicalPeriod, period2: LiturgicalPeriod) => {
      return period1.startDate < period2.startDate ? -1 : 1;
    });
  }

}
