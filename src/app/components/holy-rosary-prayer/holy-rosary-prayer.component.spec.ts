import { ComponentFixture, TestBed } from '@angular/core/testing';
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
import { PatsBeadsComponent } from '../pats-beads/pats-beads.component';

import { HolyRosaryPrayerComponent } from './holy-rosary-prayer.component';

describe('HolyRosaryPrayerComponent', () => {
  let component: HolyRosaryPrayerComponent;
  let fixture: ComponentFixture<HolyRosaryPrayerComponent>;
  let beadGroupLoader = new BeadGroupLoaderService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HolyRosaryPrayerComponent,
        PatsBeadsComponent,

        SignCrossComponent,
        CreedComponent,
        OurFatherComponent,
        HailMaryComponent,
        GloryComponent,
        FatimaComponent,
        HailHolyQueenComponent,
        ClosingComponent,
        EndComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolyRosaryPrayerComponent);
    component = fixture.componentInstance;
    component.activeBeadGroupList = beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(RosaryMysteriesEnum.LUMINOUS);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
