import { Component, HostListener } from '@angular/core';
import { version } from '../../package.json';
import { AppConfigService } from './services/app-config.service';
import { LiturgicalYearService } from './services/liturgical-year.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = $localize`:@@rosaryTitle:Rosary`;

  appVersion: string = version;

  constructor(public liturgicalYear: LiturgicalYearService,
              private appConfig: AppConfigService) {
    this.checkOrientation();
    console.log(`user-agent: ${window.navigator.userAgent}`);
  }

  backgroundImageClass(): string {
    const color = this.liturgicalYear.liturgicalColor();
    return `lit-color-${color.toString().toLowerCase()}`;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkOrientation();
  }

  private checkOrientation(): void {
    if (window.matchMedia('(orientation: portrait)').matches) {
      console.log(`you're in PORTRAIT mode`);
      this.appConfig.isPortrait = true;
    }
    else if (window.matchMedia('(orientation: landscape)').matches) {
      console.log(`you're in LANDSCAPE mode`);
      this.appConfig.isPortrait = false;
    }
    else {
      this.appConfig.isPortrait = undefined;
    }
  }

}
