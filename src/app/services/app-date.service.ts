import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDateService {
  // tslint:disable-next-line:variable-name
  private _date: Date;
  // tslint:disable-next-line:variable-name
  private _currentYear;

  constructor() {
    this.updateDate(new Date());
  }

  get date(): Date {
    return this._date;
  }

  get currentYear(): number {
    return this._currentYear;
  }

  protected updateDate(date: Date): void {
    const baseDate = (date) ? date : new Date();
    this._currentYear = baseDate.getFullYear();
    this._date = new Date(this._currentYear, baseDate.getMonth(), baseDate.getDate());
  }
}
