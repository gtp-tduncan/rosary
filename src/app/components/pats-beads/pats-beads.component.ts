import { Component, OnInit, OnChanges, AfterViewInit, SimpleChanges, Input } from "@angular/core";
import { AppConfigService } from "src/app/services/app-config.service";
import { RosaryBeads } from "../rosary-beads";
import { PATS_BEADS_COORDS_LONG } from "./pats-beads-coords";

@Component({
  selector: 'app-pats-beads',
  templateUrl: './pats-beads.component.html',
  styleUrls: ['./pats-beads.component.scss']
})
export class PatsBeadsComponent implements OnInit, OnChanges, AfterViewInit, RosaryBeads {

  @Input()
  highlightBeadIdx: number;

  imageWidth: number;
  imageHeight: number;
  highlightTop: string;
  highlightLeft: string;

  private rawWidth = 1608;
  private rawHeight = 3704;
  rawCoords = PATS_BEADS_COORDS_LONG;

  constructor(private appConfig: AppConfigService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateHighlightPosition();
  }

  ngAfterViewInit(): void {
    this.calculateHighlightPosition();
  }

  calculateHighlightPosition(): void {
    //throw new Error("Method not implemented.");
  }

  highlightStyle(idx: number): string {
    console.log(`highlightStyle - start`);
    const point = this.rawCoords[idx];
    const style = `left: ${point.x}px; top: ${point.y}px;` + this.imageStyle();
    console.log(`highlightStyle: ${idx} - ${style}`);
    return style;
  }

  beadsTransformStyle(): string {
    return 'transform: rotate(90deg) scale(0.10);';
    // return 'transform: scale(0.10);';
  }

  imageStyle(): string {
    return 'margin-top: -3704px;';
    // return '';
  }

}
