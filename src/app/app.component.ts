import { Component } from '@angular/core';
import { version } from '../../package.json';
import { LiturgicalColors, LiturgicalYearService } from './services/liturgical-year.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = $localize`:@@rosaryTitle:Rosary`;

  appVersion: string = version;

  constructor(public liturgicalYear: LiturgicalYearService) { }

  backgroundImageClass(): string {
    const color = this.liturgicalYear.liturgicalColor();
    return `lit-color-${color.toString().toLowerCase()}`;
  }

  private formatBackgroundImage(color: string, rgb: string) {
    return `repeating-linear-gradient(-45deg, ${color}, ${color} 3px, ${rgb} 3px, ${rgb}, 6px`;
  }
}
