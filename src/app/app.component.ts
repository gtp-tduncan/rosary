import { Component } from '@angular/core';
import { BeadGroupList } from './models/bead-group-list';
import { RosaryMysteriesEnum } from './sequences/rosary-helper';
import { BeadGroupLoaderService } from './services/bead-group-loader.service';
import { version } from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = $localize`:@@rosaryTitle:Rosary`;

  appVersion: string = version;

  constructor() { }

}
