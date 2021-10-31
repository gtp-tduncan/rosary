import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BeadPosition } from 'src/app/models/bead-position';
import { AppConfigService } from 'src/app/services/app-config.service';
import { BeadCoordTransformService, BeadViewport, LANDSCAPE_SCALE, PORTRAIT_SCALE } from 'src/app/services/bead-coord-transform.service';
import { RosaryBeads } from '../rosary-beads';
import { PATS_BEADS_COORDS_LONG } from './pats-beads-coords';

const baseHighlightRadius = 150;

@Component({
  selector: 'app-pats-beads',
  templateUrl: './pats-beads.component.html',
  styleUrls: ['./pats-beads.component.scss']
})
export class PatsBeadsComponent implements OnInit, OnChanges, AfterViewInit, RosaryBeads {

  @Input()
  highlightBeadIdx: number;

  // NOTE: Initial number is overwritten based on element
  imageWidth = 273;

  // NOTE: Initial number is overwritten based on element
  imageHeight = 630;

  highlightTop: string;
  highlightLeft: string;
  // highlightRight: string;

  highlightHeight: string;
  highlightWidth: string;
  highlightDiameter: number;

  private lastIsPortrait: boolean;
  private highlightRadius: number;
  private offsetX: number;
  private offsetY: number;
  private scale = 1;

  private patsBeadsOffsetX = '-90vw';
  private patsBeadsOffsetY = '-18vh';

  private beadsElement: HTMLImageElement;

  private rawWidth = 1608;
  private rawHeight = 3704;
  private rawCoords = PATS_BEADS_COORDS_LONG;

  private rawViewport: BeadViewport = {
    top: 0,
    left: 0,
    bottom: this.rawHeight,
    right: this.rawWidth
  }

  constructor(private appConfig: AppConfigService,
              private beadXform: BeadCoordTransformService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.calculateHighlightPosition();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateHighlightPosition();
  }

  calculateHighlightPosition() {

    if (!this.initHighlightProperties()) {
      return;
    }

    const xformCoord = this.beadXform.transform(this.rawCoords[this.highlightBeadIdx], this.beadsElement, this.rawViewport);
    console.log(`xformCoord(2): ${JSON.stringify(xformCoord)}`);

    this.scale = (this.appConfig.isPortrait) ? PORTRAIT_SCALE : LANDSCAPE_SCALE;

    if (xformCoord?.x && xformCoord?.y) {
      this.highlightTop = `${xformCoord.y}px`;
      this.highlightLeft = `${xformCoord.x}px`;
    }

    console.log(`highlight location: ${this.highlightLeft}, ${this.highlightTop}`);

    // console.log('-------------------------------------------');
    // console.log(`image width: ${this.imageWidth}, height: ${this.imageHeight}`);

    // const xformCoord = this.getBeadOrientationPoint(this.rawCoords[this.highlightBeadIdx]);
    // console.log(`xform bead coords: ${JSON.stringify(xformCoord)} - ${this.offsetX}`);

    // const baseLeft = ((xformCoord.x / xformCoord.rawWidth * xformCoord.width) + this.offsetX);
    // console.log(`baseLeft: ${baseLeft}, offsetX: ${this.offsetX}, offsetY: ${this.offsetY}`);

    // if (baseLeft) {
    //   this.highlightRight = ((baseLeft - xformCoord.width) * xformCoord.modifier * this.scale).toString() + 'px';
    //   this.highlightTop = ((xformCoord.y / xformCoord.rawHeight * xformCoord.height * this.scale) - this.offsetY).toString() + 'px';
    // }
    // else {
    //   this.highlightRight = undefined;
    //   this.highlightTop = undefined;
    // }
    // console.log(`highlight coords: ${this.highlightRight}, ${this.highlightTop}`);
  }

  beadStyle(): string {
    return (this.appConfig.isPortrait)
      ? `transform: rotate(90deg) scale(${this.scale}) translateX(${this.patsBeadsOffsetX}) translateY(${this.patsBeadsOffsetY}); translate-origin: top left;`
      : '';
  }

  highlightStyle(): string {
    if (this.highlightTop && this.highlightLeft) {
      // const rotateStyle = `transform: scale(${this.scale})`;
      const rotateStyle = (this.appConfig.isPortrait)
        ? `transform: rotate(90deg) scale(${this.scale}); transform-origin: top left;`
        : '';
      const style = `top: ${this.highlightTop}; left: ${this.highlightLeft}; height: ${this.highlightDiameter}px; width: ${this.highlightDiameter}px; ${rotateStyle}`;
      // console.log(`highlightStyle: ${style}`);
      return style;
    }
    return '';
  }

  onResize(event) {
    const element = document.querySelector('#pats-beads');
    console.log(`3) w: ${element.clientWidth}, h: ${element.clientHeight}`);
    this.calculateHighlightPosition();
  }

  private initHighlightProperties(): boolean {
    this.lastIsPortrait = this.appConfig.isPortrait;
    this.beadsElement = document.querySelector('#pats-beads');
    if (this.beadsElement?.width === 0 || this.beadsElement?.height === 0) {
      this.beadsElement = undefined;
      return false;
    }

    console.log(`beadsElement init => raw width: ${this.beadsElement.width}, height: ${this.beadsElement.height}`);
    console.log(`beadsElement init => offset width: ${this.beadsElement.offsetWidth}, height: ${this.beadsElement.offsetHeight}`);
    console.log(`beadsElement init => client width: ${this.beadsElement.clientWidth}, height: ${this.beadsElement.clientHeight}`);

    this.imageWidth = this.beadsElement.width;
    this.imageHeight = this.beadsElement.height;
    this.highlightDiameter = baseHighlightRadius * (this.imageHeight / this.rawHeight);
    this.highlightRadius = this.highlightDiameter / 2;

    console.log(`exiting init: diameter=${this.highlightDiameter}, radius=${this.highlightRadius}`);
    return true;

  //   // this.offsetX = this.highlightRadius + 7;  // Half the size of the highlight div with some tweaking
  //   // this.offsetY = this.highlightRadius + 5;  // Half the size of the highlight div with some tweaking
  //   console.log(`isPortrait: ${this.appConfig?.isPortrait}`);
  //   const adjustX = (this.appConfig.isPortrait) ? this.beadsElement.offsetLeft : this.beadsElement.offsetTop;
  //   const adjustY = (this.appConfig.isPortrait) ? -1 * this.beadsElement.offsetTop : this.beadsElement.offsetLeft;
  //   const yRadiusMod = (this.appConfig.isPortrait) ? -1 : 1;
  //   this.offsetX = this.highlightRadius + adjustX;  // Half the size of the highlight div
  //   this.offsetY = (this.highlightRadius * yRadiusMod) + adjustY;  // Half the size of the highlight div

  //   return true;
  }

  // private getBeadOrientationPoint(source: BeadPosition): BeadOrientationPoint {
  //   // console.log(`initial bead position: ${JSON.stringify(source)}`);
  //   return (this.appConfig.isPortrait)
  //     ? {
  //       x: source.y,
  //       y: source.x,
  //       modifier: -1,
  //       scale: this.scale,
  //       width: this.imageHeight,
  //       height: this.imageWidth,
  //       rawWidth: this.rawHeight,
  //       rawHeight: this.rawWidth
  //     }
  //     : {
  //     // return {
  //       x: source.x,
  //       y: source.y,
  //       modifier: 1,
  //       scale: this.scale,
  //       width: this.imageWidth,
  //       height: this.imageHeight,
  //       rawWidth: this.rawWidth,
  //       rawHeight: this.rawHeight
  //     }
  // }

}
