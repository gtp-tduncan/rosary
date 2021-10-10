import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { AppDateService } from 'src/app/services/app-date.service';
import { LocalizationService } from 'src/app/services/localization.service';
import { LiturgicalYearService } from 'src/app/services/liturgical-year.service';

import { NoticesComponent } from './notices.component';

describe('NoticesComponent', () => {
  let component: NoticesComponent;
  let fixture: ComponentFixture<NoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NoticesComponent
      ],
      providers: [
        AppComponent,
        { provide: AppDateService, useValue: new AppDateService() },
        LocalizationService,
        LiturgicalYearService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
