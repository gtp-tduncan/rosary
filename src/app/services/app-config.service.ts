import { Injectable } from '@angular/core';
import { AppDateService } from './app-date.service';
import { LocalizationService } from './localization.service';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  isPortrait: boolean;

  constructor(public readonly appDate: AppDateService,
              public readonly localization: LocalizationService) { }

}
