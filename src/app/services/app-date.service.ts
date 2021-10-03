import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppDateService {
  readonly date: Date;
  readonly currentYear: number;

  constructor(date?: Date) {
    const baseDate = (date) ? date : new Date();
    this.currentYear = baseDate.getFullYear();
    this.date = new Date(this.currentYear, baseDate.getMonth(), baseDate.getDate());
  }
}
