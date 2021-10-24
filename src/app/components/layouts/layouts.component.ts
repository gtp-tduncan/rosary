import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeadGroupList } from 'src/app/models/bead-group-list';
import { RosaryMysteriesEnum } from 'src/app/sequences/rosary-helper';
import { BeadGroupLoaderService } from 'src/app/services/bead-group-loader.service';
import { ActivePrayerComponent } from '../active-prayer/active-prayer.component';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class  LayoutsComponent implements OnInit, AfterViewInit {

  selectedBeadGroupList: BeadGroupList;

  debugTheEnd: boolean;

  @ViewChild(ActivePrayerComponent)
  activePrayer: ActivePrayerComponent;

  constructor(private beadGroupLoader: BeadGroupLoaderService,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.selectedBeadGroupList = this.beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(RosaryMysteriesEnum.GLORIOUS);
    this.activateRoute.queryParams.subscribe(params => {
      if (('list' in params)) {
        this.selectedBeadGroupList.debugWriteSequenceIds();
      }
      else {
        console.log('Received message');
        const sequenceId = params['seqId'];
        console.log(`setting rosary to ${sequenceId}`);
        this.selectedBeadGroupList.debugSetIndices(sequenceId);
        this.debugTheEnd = (sequenceId === 'end');
        console.log(`LayoutsComponent - debugTheEnd: ${this.debugTheEnd}`);
      }
    })
  }

  ngAfterViewInit(): void {
    this.activePrayer.debugTheEnd = this.debugTheEnd;
  }

  onNext(): void {
    this.activePrayer.onNext();
  }

  onPrevious(): void {
    this.activePrayer.onPrevious();
  }
}
