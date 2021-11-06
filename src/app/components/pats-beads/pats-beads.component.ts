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

  ngOnChanges(changes: SimpleChanges): void { }

  ngAfterViewInit(): void { }

  highlightStyle(): string {
    const offsetX = this.appConfig.isPortrait ? -100 : 0;
    const offsetY = this.appConfig.isPortrait ? -100 : 0;
    const point = this.rawCoords[this.highlightBeadIdx];
    return `left: ${point.x + offsetX}px; top: ${point.y + offsetY}px;` + this.imageStyle();
  }

  beadsTransformStyle(): string {
    console.log(`RAW => ${this.rawWidth}, ${this.rawHeight}`);
    console.log(`window (inner) => ${window.innerWidth}, ${window.innerHeight}`);
    console.log(`window (outer) => ${window.outerWidth}, ${window.outerHeight}`);
    const hscale = window.innerHeight / this.rawHeight;
    const wscale = window.innerWidth / this.rawWidth;
    const scale = (hscale < wscale) ? hscale - 0.03 : wscale - 0.03;
    console.log(`hscale: ${hscale}, wscale: ${wscale}, scale: ${scale}`);
    return (this.appConfig.isPortrait)
      ? `transform: rotate(90deg) scale(${scale});`
      : `transform: scale(${scale});`
  }

  imageStyle(): string {
    return (this.appConfig.isPortrait)
      ? `margin-top: ${this.rawHeight * -1}px;`
      : '';
  }

  imagePlaceholderStyle(): string {
    return '';
    // return (this.appConfig.isPortrait)
    //   ? `height: ${this.imageWidth}px;`
    //   : '';
  }

}

