import { Component, OnInit, ViewChild } from '@angular/core';
import { BeadGroupList } from 'src/app/models/bead-group-list';
import { RosaryMysteriesEnum } from 'src/app/sequences/rosary-helper';
import { BeadGroupLoaderService } from 'src/app/services/bead-group-loader.service';
import { ActivePrayerComponent } from '../active-prayer/active-prayer.component';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class  LayoutsComponent implements OnInit {

  selectedBeadGroupList: BeadGroupList;

  @ViewChild(ActivePrayerComponent)
  activePrayer: ActivePrayerComponent;

  constructor(private beadGroupLoader: BeadGroupLoaderService) { }

  ngOnInit(): void {
    this.selectedBeadGroupList = this.beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(RosaryMysteriesEnum.GLORIOUS);
  }

  onNext(): void {
    this.activePrayer.onNext();
  }

  onPrevious(): void {
    this.activePrayer.onPrevious();
  }

}
