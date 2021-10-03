import { Injectable } from '@angular/core';
import { AppDateService } from './app-date.service';

@Injectable({
  providedIn: 'root'
})
export class DateAndLocalizationService {

  constructor(public readonly appDate: AppDateService) {
  }

  get adventLabel(): string {
    return $localize`:@@adventLabel:Advent`;
  }

  get christmasLabel(): string {
    return $localize`:@@christmasLabel:Christmas`;
  }

  get lentLabel(): string {
    return $localize`:@@lentLabel:Lent`;
  }

  get triduumLabel(): string {
    return $localize`:@@triduumLabel:Holy Triduum`;
  }

  get holyThursdayLabel(): string {
    return $localize`:@@holyThursday:Holy Thursday`;
  }

  get goodFridayLabel(): string {
    return $localize`:@@goodFridayLabel:Good Friday`;
  }

  get holySaturdayLabel(): string {
    return $localize`:@@holySaturdayLabel:Holy Saturday`;
  }

  get easterLabel(): string {
    return $localize`:@@easterLabel:Easter`;
  }

  get easterSundayLabel(): string {
    return $localize`:@@easterSundayLabel:Easter Sunday`;
  }

}
