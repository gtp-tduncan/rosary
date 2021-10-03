import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LiturgicalYearService } from 'src/app/services/liturgical-year.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {

  appVersion: string;

  constructor(appComponent: AppComponent,
              public liturgicalYear: LiturgicalYearService) {
    this.appVersion = appComponent.appVersion;
  }

  ngOnInit(): void {
  }

}
