import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeadGroupLoaderService } from 'src/app/services/bead-group-loader.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class  LayoutsComponent implements OnInit {

  // selectedBeadGroupList: BeadGroupList;

  // debugTheEnd: boolean;

  // @ViewChild(ActivePrayerComponent)
  // activePrayer: ActivePrayerComponent;

  constructor(private beadGroupLoader: BeadGroupLoaderService,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.selectedBeadGroupList = this.beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(RosaryMysteriesEnum.GLORIOUS);
    // this.activateRoute.queryParams.subscribe(params => {
    //   if (('list' in params)) {
    //     this.selectedBeadGroupList.debugWriteSequenceIds();
    //   }
    //   else {
    //     console.log('Received message');
    //     const sequenceId = params['seqId'];
    //     console.log(`setting rosary to ${sequenceId}`);
    //     this.selectedBeadGroupList.debugSetIndices(sequenceId);
    //     this.debugTheEnd = (sequenceId === 'end');
    //     console.log(`LayoutsComponent - debugTheEnd: ${this.debugTheEnd}`);
    //   }
    // })
  }

  // ngAfterViewInit(): void {
  //   this.activePrayer.debugTheEnd = this.debugTheEnd;
  // }

  // onNext(): void {
  //   console.log('next - layouts');
  //   this.activePrayer.onNext();
  // }

  // onPrevious(): void {
  //   this.activePrayer.onPrevious();
  // }
}
