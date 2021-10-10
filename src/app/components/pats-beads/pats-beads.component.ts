import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppConfigService } from 'src/app/services/app-config.service';
import { RosaryBeads } from '../rosary-beads';
import { PATS_BEADS_COORDS } from './pats-beads-coords';

@Component({
  selector: 'app-pats-beads',
  templateUrl: './pats-beads.component.html',
  styleUrls: ['./pats-beads.component.scss']
})
export class PatsBeadsComponent implements OnInit, OnChanges, RosaryBeads {

  @Input()
  highlightBeadIdx: number;

  imageWidth = 273;

  imageHeight = 630;

  highlightTop: string;
  highlightLeft: string;
  highlightRight: string;

  highlightHeight: string;
  highlightWidth: string;
  highlightDiameter: number;

  private beadsElement: HTMLImageElement;

  private rawWidth = 1608;
  private rawHeight = 3704;
  private rawCoords = PATS_BEADS_COORDS;

  private imageAspectRatio = this.rawWidth / this.rawHeight;

  constructor(private appConfig: AppConfigService) { }

  ngOnInit(): void {
    this.ngOnChanges(undefined);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateHighlightPosition();
  }

  calculateHighlightPosition() {
    if (this.beadsElement === undefined) {
      this.beadsElement = document.querySelector('#pats-beads');
    }

    const newDims = this.checkIfBeadsFullyOnScreen();
    if (newDims) {
      console.log(`newDims: ${JSON.stringify(newDims)}`);
      this.imageWidth = newDims.width;
      this.imageHeight = newDims.height;
    }

    // // this.checkIfBeadsFullyOnScreen();
    // this.imageWidth = this.beadsElement.offsetWidth;
    // this.imageHeight = this.beadsElement.offsetHeight;

    // this.highlightDiameter = 150 * (this.imageHeight / this.rawHeight);
    // console.log(`highlightDiameter: ${this.highlightDiameter}`);
    // const highlightRadius = this.highlightDiameter / 2;
    // const offsetX = highlightRadius + 7;  // Half the size of the highlight div with some tweaking
    // const offsetY = highlightRadius + 5;  // Half the size of the highlight div with some tweaking
    const offsetX = 22;  // Half the size of the highlight div with some tweaking
    const offsetY = 18;  // Half the size of the highlight div with some tweaking

    const rawCoord = this.rawCoords[this.highlightBeadIdx];
    const baseLeft = ((rawCoord.x / this.rawWidth * this.imageWidth) + offsetX);
    //this.highlightLeft = baseLeft.toString() + 'px';
    this.highlightRight = ((baseLeft - this.imageWidth) * -1).toString() + 'px';
    this.highlightTop = ((rawCoord.y / this.rawHeight * this.imageHeight) - offsetY).toString() + 'px';
    // console.log(`left: ${this.highlightLeft}, right: ${this.highlightRight}, width: ${this.imageWidth}`);
  }

  hightlightStyle(): string {
    if (this.highlightTop && this.highlightRight) {
      //return `top: ${this.highlightTop}; left: ${this.highlightLeft}`;
      // return `top: ${this.highlightTop}; right: ${this.highlightRight}`;
      return `top: ${this.highlightTop}; right: ${this.highlightRight}; height: ${this.highlightDiameter}px; width: ${this.highlightDiameter}px`;
    }
    return undefined;
  }

  onResize(event) {
    this.calculateHighlightPosition();
  }

  private checkIfBeadsFullyOnScreen(): BeadsDimensions {
    const offset = 20;
    const rect = this.beadsElement.getBoundingClientRect();
    let beadsFullWidth = this.beadsElement.offsetWidth + rect.left;
    let beadsFullHeight = this.beadsElement.offsetHeight + rect.top;

    console.log(`full: ${beadsFullWidth}, ${beadsFullHeight} ${JSON.stringify(rect)}`);
    // console.log(`window: ${window.innerWidth}, ${window.innerHeight}`);
    // console.log(`rect: ${JSON.stringify(this.beadsElement.getBoundingClientRect())}`);
    // console.log(`client: ${this.beadsElement.clientTop}, ${this.beadsElement.clientLeft}, ${this.beadsElement.clientHeight}, ${this.beadsElement.clientWidth}`);
    // console.log(`offset: ${this.beadsElement.offsetTop}, ${this.beadsElement.offsetLeft}, ${this.beadsElement.offsetHeight}, ${this.beadsElement.offsetWidth}`);

    if (beadsFullHeight + offset >= window.innerHeight) {
      const newHeight = window.innerHeight - offset;
      console.log(`BINGO height - ${newHeight} - ${(newHeight * this.imageAspectRatio)}`);
      return {
        height: newHeight,
        width: (newHeight * this.imageAspectRatio)
      }
    }
    else if (beadsFullWidth + offset >= window.innerWidth) {
      console.log(`BINGO width`);
      const newWidth = window.innerWidth - offset;
      return {
        width: newWidth,
        height: (newWidth * this.imageAspectRatio)
      }
    }

    return undefined;
  }

}

interface BeadsDimensions {
  height: number;
  width: number;
}

/*
  calculateHighlightPosition() {
    if (this.beadsElement === undefined) {
      this.beadsElement = document.querySelector('#pats-beads');
    }

    const beadDim = this.checkIfBeadsFullyOnScreen();
    console.log(`beadDim: ${JSON.stringify(beadDim)}`);
    this.imageWidth = beadDim.width;
    this.imageHeight = beadDim.height;

    this.highlightDiameter = 150 * (this.imageHeight / this.rawHeight);
    console.log(`highlightDiameter: ${this.highlightDiameter}`);
    const highlightRadius = this.highlightDiameter / 2;
    const offsetX = highlightRadius + 7;  // Half the size of the highlight div with some tweaking
    const offsetY = highlightRadius + 5;  // Half the size of the highlight div with some tweaking

    const rawCoord = this.rawCoords[this.highlightBeadIdx];
    const baseLeft = ((rawCoord.x / this.rawWidth * this.imageWidth) + offsetX);
    //this.highlightLeft = baseLeft.toString() + 'px';
    this.highlightRight = ((baseLeft - this.imageWidth) * -1).toString() + 'px';
    this.highlightTop = ((rawCoord.y / this.rawHeight * this.imageHeight) - offsetY).toString() + 'px';
    // console.log(`left: ${this.highlightLeft}, right: ${this.highlightRight}, width: ${this.imageWidth}`);
  }

  hightlightStyle(): string {
    if (this.highlightTop && this.highlightRight) {
      //return `top: ${this.highlightTop}; left: ${this.highlightLeft}`;
      // return `top: ${this.highlightTop}; right: ${this.highlightRight}`;
      return `top: ${this.highlightTop}; right: ${this.highlightRight}; height: ${this.highlightDiameter}px; width: ${this.highlightDiameter}px`;
    }
    return undefined;
  }

  private checkIfBeadsFullyOnScreen(): BeadsDimensions {
    const offset = 20;
    let beadsFullWidth = this.beadsElement.clientWidth + this.beadsElement.clientLeft;
    let beadsFullHeight = this.beadsElement.clientHeight + this.beadsElement.clientTop;

    console.log(`client: ${this.beadsElement.clientTop}, ${this.beadsElement.clientLeft}, ${this.beadsElement.clientHeight}, ${this.beadsElement.clientWidth}`);
    console.log(`offset: ${this.beadsElement.offsetTop}, ${this.beadsElement.offsetLeft}, ${this.beadsElement.offsetHeight}, ${this.beadsElement.offsetWidth}`);
    if (beadsFullHeight > this.appConfig.maxHeight) {
      const newHeight = this.appConfig.maxHeight - this.beadsElement.offsetTop - offset;
      console.log(`newHeight: ${newHeight}`);
      return {
        height: newHeight,
        width: this.rawWidth * this.appConfig.aspectRatio
      }
    }
    else if (beadsFullWidth > this.appConfig.maxWidth) {
      console.log(`newWidth: n/a`);
    }

    console.log(`something else`);
    return {
      height: this.beadsElement.offsetHeight,
      width: this.beadsElement.offsetWidth
    }
  }

}

*/
