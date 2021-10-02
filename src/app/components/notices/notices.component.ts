import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {

  appVersion: string;

  constructor(appComponent: AppComponent) {
    this.appVersion = appComponent.appVersion;
  }

  ngOnInit(): void {
  }

}
