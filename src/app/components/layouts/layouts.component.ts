import { Component, OnInit } from '@angular/core';
import { BeadGroupList } from 'src/app/models/bead-group-list';
import { RosaryMysteriesEnum } from 'src/app/sequences/rosary-helper';
import { BeadGroupLoaderService } from 'src/app/services/bead-group-loader.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class  LayoutsComponent implements OnInit {

  selectedBeadGroupList: BeadGroupList;

  constructor(private beadGroupLoader: BeadGroupLoaderService) { }

  ngOnInit(): void {
    this.selectedBeadGroupList = this.beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(RosaryMysteriesEnum.GLORIOUS);
  }

}
