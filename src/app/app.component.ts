import { Component } from '@angular/core';
import { version } from '../../package.json';
import { LiturgicalYearService } from './services/liturgical-year.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = $localize`:@@rosaryTitle:Rosary`;

  appVersion: string = version;

  constructor(public liturgicalYear: LiturgicalYearService) { }

}
