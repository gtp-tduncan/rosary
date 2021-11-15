import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { LiturgicalDates } from 'src/app/models/liturgical-dates';
import { MysterySelectorComponent } from '../mystery-selector/mystery-selector.component';
import { NoticesComponent } from '../notices/notices.component';

import { HolyRosaryHomeComponent } from './holy-rosary-home.component';

describe('HomeComponent', () => {
  let component: HolyRosaryHomeComponent;
  let fixture: ComponentFixture<HolyRosaryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HolyRosaryHomeComponent,
        MysterySelectorComponent,
        NoticesComponent
      ],
      providers: [
        AppComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolyRosaryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
