import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { BeadGroupList } from 'src/app/models/bead-group-list';
import { ClosingComponent } from 'src/app/prayers/closing/closing.component';
import { CreedComponent } from 'src/app/prayers/creed/creed.component';
import { EndComponent } from 'src/app/prayers/end/end.component';
import { FatimaComponent } from 'src/app/prayers/fatima/fatima.component';
import { GloryComponent } from 'src/app/prayers/glory/glory.component';
import { HailHolyQueenComponent } from 'src/app/prayers/hail-holy-queen/hail-holy-queen.component';
import { HailMaryComponent } from 'src/app/prayers/hail-mary/hail-mary.component';
import { OurFatherComponent } from 'src/app/prayers/our-father/our-father.component';
import { SignCrossComponent } from 'src/app/prayers/sign-cross/sign-cross.component';
import { RosaryMysteriesEnum } from 'src/app/sequences/rosary-helper';
import { BeadGroupLoaderService } from 'src/app/services/bead-group-loader.service';
import { HolyRosaryPrayerComponent } from '../holy-rosary-prayer/holy-rosary-prayer.component';
import { PatsBeadsComponent } from '../pats-beads/pats-beads.component';

import { ActivePrayerComponent } from './active-prayer.component';

describe('ActivePrayerComponent', () => {
  let component: ActivePrayerComponent;
  let fixture: ComponentFixture<ActivePrayerComponent>;
  let beadGroupLoader = new BeadGroupLoaderService();
  let holyRosaryPrayer: HolyRosaryPrayerComponent;

  beforeEach(() => {
    holyRosaryPrayer = new HolyRosaryPrayerComponent();
    holyRosaryPrayer.activeBeadGroupList = beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(RosaryMysteriesEnum.GLORIOUS);
    holyRosaryPrayer.prayerName = 'test-active-prayer';

    TestBed.configureTestingModule({
      declarations: [
        ActivePrayerComponent,
        HolyRosaryPrayerComponent,
        PatsBeadsComponent,
        EndComponent
      ],
      providers: [
        AppComponent,
        { provide: HolyRosaryPrayerComponent, useValue: holyRosaryPrayer },
        { provide: BeadGroupList, useValue: holyRosaryPrayer.activeBeadGroupList }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivePrayerComponent);
    component = fixture.componentInstance;
    component.holyRosaryPrayer = holyRosaryPrayer;
    component.activeBeadGroupList = holyRosaryPrayer.activeBeadGroupList;
    console.log(`src: ${holyRosaryPrayer.prayerName}`);
    console.log(`component: ${component.prayerName}`);
    fixture.detectChanges();
    console.log(`after detect changes`);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
