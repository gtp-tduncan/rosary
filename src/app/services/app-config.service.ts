import { Injectable } from '@angular/core';
import { AppDateService } from './app-date.service';
import { LocalizationService } from './localization.service';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  isPortrait: boolean;

  private _isFullscreen: boolean;

  constructor(public readonly appDate: AppDateService,
              public readonly localization: LocalizationService) { }

  toggleView(): void {
    this._isFullscreen = !this._isFullscreen;
  }

  get isFullscreen(): boolean {
    return this._isFullscreen;
  }
}
