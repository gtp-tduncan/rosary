import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EndComponent } from 'src/app/prayers/end/end.component';
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
