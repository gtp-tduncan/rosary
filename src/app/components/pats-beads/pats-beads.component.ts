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
  highlightBeadIdx: number = 0;

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

  highlightStyle(): string {
    const point = this.rawCoords[this.highlightBeadIdx];
    return `left: ${point.x}px; top: ${point.y}px;` + this.imageStyle();
  }

  beadsTransformStyle(): string {
    return (this.appConfig.isPortrait)
      ? 'transform: rotate(90deg) scale(0.10);'
      : 'transform: scale(0.09);'
  }

  imageStyle(): string {
    return (this.appConfig.isPortrait)
      ? `margin-top: ${this.rawHeight * -1}px;`
      : '';
  }

}
