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
    const useRawWidth = (this.appConfig.isPortrait) ? this.rawHeight : this.rawWidth;
    const useRawHeight = (this.appConfig.isPortrait) ? this.rawWidth : this.rawHeight;
    const hscale = window.innerHeight / useRawHeight;
    const wscale = window.innerWidth / useRawWidth;
    const offset = (this.appConfig.isPortrait) ? -0.015 : -0.04;
    const scale = (hscale < wscale) ? hscale + offset : wscale + offset;
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

