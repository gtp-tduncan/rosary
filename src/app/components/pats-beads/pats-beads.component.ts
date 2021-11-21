import { Component, OnInit, OnChanges, AfterViewInit, SimpleChanges, Input, ViewChild, ElementRef } from "@angular/core";
import { BeadPosition } from "src/app/models/bead-position";
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

  private _highlightStyle: string;

  @ViewChild('patsBeadsImg')
  patsBeadsImg: ElementRef<HTMLImageElement>;

  constructor(private appConfig: AppConfigService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void { }

  ngAfterViewInit(): void {
    setTimeout(() => this._highlightStyle = this.highlightStyle());
  }

  highlightStyle(): string {
    if (this._highlightStyle) {
      const style = this._highlightStyle;
      this._highlightStyle = undefined;
      console.log(`highlightStyle(1) style: ${style}`);
      return style;
    }
    if (this.patsBeadsImg) {
      const offsetX = this.appConfig.isPortrait ? -100 : 0;
      const offsetY = this.appConfig.isPortrait ? -100 : 0;
      const point = this.rawCoords[this.highlightBeadIdx];

      const style = (this.appConfig.isPortrait)
        ? this.highlightStyleForPortrait(point)
        : this.highlightStyleForLandscape(point);

      console.log(`highlightStyle(2) style: ${style}`);
      return style;
    }

    return undefined;
  }

  private highlightStyleForPortrait(point: BeadPosition): string {
    const scale = this.patsBeadsImg.nativeElement.width / this.rawWidth;
    return this.generateHighlightStyle(point, scale, -5, -52);
  }

  private highlightStyleForLandscape(point: BeadPosition): string {
    const scale = this.patsBeadsImg.nativeElement.height / this.rawHeight;
    return this.generateHighlightStyle(point, scale, 0, 0);
  }

  private generateHighlightStyle(point: BeadPosition, scale: number, offsetX: number, offsetY: number): string {
    const diameter = (125 * scale);
    const border = (150 * scale);
    const offset = border / 2;
    return `left: ${(point.x * scale) + this.patsBeadsImg.nativeElement.parentElement.offsetLeft - offset + offsetX}px;`
      + ` top: ${(point.y * scale) + this.patsBeadsImg.nativeElement.parentElement.offsetTop - offset + offsetY}px;`
      + ` width: ${diameter}px; height: ${diameter}px; border-width: ${border};`;
  }

  private debugElementRef(desc: string, elementRef: ElementRef) {
    console.log(`${desc} - ${elementRef?.nativeElement?.name} exists: ${elementRef}, ${elementRef?.nativeElement?.width}, ${elementRef?.nativeElement?.height}`);
  }

}

