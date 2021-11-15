// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { AppComponent } from 'src/app/app.component';
// import { BeadGroupList } from 'src/app/models/bead-group-list';
// import { EndComponent } from 'src/app/prayers/end/end.component';
// import { RosaryMysteriesEnum } from 'src/app/sequences/rosary-helper';
// import { BeadGroupLoaderService } from 'src/app/services/bead-group-loader.service';
// import { HolyRosaryPrayerComponent } from '../../holy-rosary/holy-rosary-prayer.component';
// import { PatsBeadsComponent } from '../beads/pats-beads/v1-pats-beads.component';
// import { ActivePrayerComponent } from './active-prayer.component';

// describe('ActivePrayerComponent', () => {
//   let component: ActivePrayerComponent;
//   let fixture: ComponentFixture<ActivePrayerComponent>;
//   let beadGroupLoader = new BeadGroupLoaderService();
//   let holyRosaryPrayer: HolyRosaryPrayerComponent;

//   beforeEach(() => {
//     holyRosaryPrayer = new HolyRosaryPrayerComponent();
//     holyRosaryPrayer.activeBeadGroupList = beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(RosaryMysteriesEnum.GLORIOUS);
//     holyRosaryPrayer.prayerName = 'test-active-prayer';

//     TestBed.configureTestingModule({
//       declarations: [
//         ActivePrayerComponent,
//         HolyRosaryPrayerComponent,
//         PatsBeadsComponent,
//         EndComponent
//       ],
//       providers: [
//         AppComponent,
//         { provide: HolyRosaryPrayerComponent, useValue: holyRosaryPrayer },
//         { provide: BeadGroupList, useValue: holyRosaryPrayer.activeBeadGroupList }
//       ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ActivePrayerComponent);
//     component = fixture.componentInstance;
//     component.holyRosaryPrayer = holyRosaryPrayer;
//     component.activeBeadGroupList = holyRosaryPrayer.activeBeadGroupList;
//     console.log(`src: ${holyRosaryPrayer.prayerName}`);
//     console.log(`component: ${component.prayerName}`);
//     fixture.detectChanges();
//     console.log(`after detect changes`);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
