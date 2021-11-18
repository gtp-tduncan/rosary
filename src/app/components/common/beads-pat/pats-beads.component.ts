import { Component, OnInit, OnChanges, AfterViewInit, SimpleChanges, Input } from "@angular/core";
import { AppConfigService } from "src/app/services/app-config.service";
import { RosaryBeads } from "../../rosary-beads";
import { PATS_BEADS_COORDS_LONG } from "./pats-beads-coords";

@Component({
  selector: 'app-pats-beads',
  templateUrl: './pats-beads.component.html',
  styleUrls: ['./pats-beads.component.scss']
})
export class PatsBeadsComponent implements OnInit, OnChanges, AfterViewInit, RosaryBeads {

  @Input()
  highlightBeadIdx: number = 0;

  private rawWidth = 1608;
  private rawHeight = 3704;
  private lastScale = undefined;
  rawCoords = PATS_BEADS_COORDS_LONG;

  private lastWindowDimensions = {
    width: undefined,
    height: undefined
  };

  constructor(private appConfig: AppConfigService) { }

  private updateLastWindowDimensions(desc: string) {
    if (window.innerWidth !== this.lastWindowDimensions.width && window.innerHeight !== this.lastWindowDimensions.height) {
      console.log(`+++ 1 - ${desc} - Before update: ${this.lastWindowDimensions.width}, ${this.lastWindowDimensions.height}`);
      this.lastWindowDimensions.width = window.innerWidth;
      this.lastWindowDimensions.height = window.innerHeight;
      console.log(`+++ 2 - ${desc} - After update:  ${this.lastWindowDimensions.width}, ${this.lastWindowDimensions.height}`);
    }
}

  ngOnInit(): void {
    this.updateLastWindowDimensions('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateLastWindowDimensions('ngOnChanges');
  }

  ngAfterViewInit(): void { }

  resetPrayer() {
    this.highlightBeadIdx = 0;
  }

  highlightStyle(): string {
    const offsetX = this.appConfig.isPortrait ? -100 : 0;
    const offsetY = this.appConfig.isPortrait ? -100 : 0;
    const point = this.rawCoords[this.highlightBeadIdx];
    return `left: ${point.x + offsetX}px; top: ${point.y + offsetY}px;` + this.imageStyle();
  }

  beadsTransformStyle(): string {
    if (this.lastScale === undefined) {
      // console.log(`beadsTransformStyle => isPortrait: ${this.appConfig.isPortrait}`);
      const useRawWidth = (this.appConfig.isPortrait) ? this.rawHeight : this.rawWidth;
      const useRawHeight = (this.appConfig.isPortrait) ? this.rawWidth : this.rawHeight;
      // console.log(`beadsTransformStyle => useRawWidth: ${useRawWidth}, useRawHeight: ${useRawHeight}`);
      const hscale = window.innerHeight / useRawHeight;
      const wscale = window.innerWidth / useRawWidth;
      // console.log(`beadsTransformStyle => innerHeight: ${window.innerHeight}, innerWidth: ${window.innerWidth}`);
      // console.log(`beadsTransformStyle => hscale: ${hscale}, wscale: ${wscale}`);
      const offset = (this.appConfig.isPortrait) ? -0.015 : -0.04;
      const scale = (hscale < wscale) ? hscale + offset : wscale + offset;
      this.lastScale = scale;
    }
    // console.log(`beadsTransformStyle => scale: ${this.lastScale}`);
    return (this.appConfig.isPortrait)
      ? `transform: rotate(90deg) scale(${this.lastScale});`
      : `transform: scale(${this.lastScale});`
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

