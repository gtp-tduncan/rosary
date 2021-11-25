import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { LiturgicalDates } from 'src/app/models/liturgical-dates';
import { AppConfigService } from 'src/app/services/app-config.service';
import { AppDateService } from 'src/app/services/app-date.service';
import { LocalizationService } from 'src/app/services/localization.service';
import { MysterySelectorComponent } from '../mystery-selector/mystery-selector.component';
import { NoticesComponent } from '../notices/notices.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MysterySelectorComponent,
        NoticesComponent
      ],
      providers: [
        { provide: AppDateService, useValue: new AppDateService(undefined) },
        LocalizationService,
        AppConfigService,
        AppComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
