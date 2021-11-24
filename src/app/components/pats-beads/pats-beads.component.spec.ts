import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { AppDateService } from 'src/app/services/app-date.service';
import { LocalizationService } from 'src/app/services/localization.service';
import { LiturgicalYearService } from 'src/app/services/liturgical-year.service';

import { ActivatedRoute } from '@angular/router';
import { PatsBeadsComponent } from './pats-beads.component';
import { PATS_BEADS_COORDS_LONG } from './pats-beads-coords';
import { AppConfigService } from 'src/app/services/app-config.service';
import { PatsBeadsSpecFixture } from './fixtures/pats-beads-spec.fixture';

describe('PatsBeadsComponent', () => {
  let component: PatsBeadsComponent;
  let fixture: ComponentFixture<PatsBeadsComponent>;
  let elements: PatsBeadsSpecFixture;
  let appConfig: AppConfigService;
  let activatedRoute: ActivatedRoute;

  const rawCoords = PATS_BEADS_COORDS_LONG;

  beforeEach(() => {
    activatedRoute = new ActivatedRoute();
    TestBed.configureTestingModule({
      declarations: [
        PatsBeadsComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        AppComponent,
        { provide: AppDateService, useValue: new AppDateService(activatedRoute) },
        LocalizationService,
        LiturgicalYearService
      ]
    });

    fixture = TestBed.createComponent(PatsBeadsComponent);
    elements = new PatsBeadsSpecFixture(fixture);
    appConfig = TestBed.inject(AppConfigService);
    component = fixture.componentInstance;

  });

  it('should calculate position based on landscape screen', () => {
    appConfig.isPortrait = false;

    for (let idx = 0; idx < rawCoords.length; idx++) {
      component.updateBeadPosition(idx);

      fixture.detectChanges();
      expect(component).toBeTruthy();
      console.log(`[${idx}] - ${component.highlightStyle} - ${elements.patsBeadsHighlightDivElement?.getAttribute('style')}`);
    }
  });
});
