import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppConfigService } from 'src/app/services/app-config.service';
import { RosaryBeads } from '../rosary-beads';
import { PATS_BEADS_COORDS } from './pats-beads-coords';

@Component({
  selector: 'app-pats-beads',
  templateUrl: './pats-beads.component.html',
  styleUrls: ['./pats-beads.component.scss']
})
export class PatsBeadsComponent implements OnInit, OnChanges, AfterViewInit, RosaryBeads {

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

  constructor(private appConfig: AppConfigService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.calculateHighlightPosition();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateHighlightPosition();
  }

  calculateHighlightPosition() {

    if (this.beadsElement === undefined) {
      this.beadsElement = document.querySelector('#pats-beads');
    }

    if (this.beadsElement.width === 0 || this.beadsElement.height === 0) {
      return;
    }

    this.imageWidth = this.beadsElement.width;
    this.imageHeight = this.beadsElement.height;

    this.highlightDiameter = 150 * (this.imageHeight / this.rawHeight);

    const highlightRadius = this.highlightDiameter / 2;
    const offsetX = highlightRadius + 7;  // Half the size of the highlight div with some tweaking
    const offsetY = highlightRadius + 5;  // Half the size of the highlight div with some tweaking

    const rawCoord = this.rawCoords[this.highlightBeadIdx];
    const baseLeft = ((rawCoord.x / this.rawWidth * this.imageWidth) + offsetX);

    this.highlightRight = ((baseLeft - this.imageWidth) * -1).toString() + 'px';
    this.highlightTop = ((rawCoord.y / this.rawHeight * this.imageHeight) - offsetY).toString() + 'px';
  }

  highlightStyle(): string {
    if (this.highlightTop && this.highlightRight) {
      return `top: ${this.highlightTop}; right: ${this.highlightRight}; height: ${this.highlightDiameter}px; width: ${this.highlightDiameter}px`;
    }
    return undefined;
  }

  onResize(event) {
    const element = document.querySelector('#pats-beads');
    console.log(`3) w: ${element.clientWidth}, h: ${element.clientHeight}`);
    this.calculateHighlightPosition();
  }

}

interface BeadsDimensions {
  height: number;
  width: number;
}
