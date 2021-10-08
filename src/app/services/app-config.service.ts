import { HostListener, Injectable } from '@angular/core';
import { AppDateService } from './app-date.service';
import { DateAndLocalizationService } from './date-and-localization.service';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  isPortrait: boolean;

  constructor(public readonly appDate: AppDateService,
              public readonly localization: DateAndLocalizationService) {
    this.checkOrientation();
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event): void {
    console.log(`orientationChanged`);
    this.checkOrientation();
  }

  private checkOrientation(): void {
    if (window.matchMedia('(orientation: portrait)').matches) {
      console.log(`you're in PORTRAIT mode`);
      this.isPortrait = true;
    }
    else if (window.matchMedia('(orientation: landscape)').matches) {
      console.log(`you're in LANDSCAPE mode`);
      this.isPortrait = false;
    }
    else {
      this.isPortrait = undefined;
    }
  }
}
