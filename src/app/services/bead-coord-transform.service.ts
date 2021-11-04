import { Injectable } from '@angular/core';
import { BeadPosition } from '../models/bead-position';
import { AppConfigService } from './app-config.service';

export const LANDSCAPE_SCALE = 1;
export const PORTRAIT_SCALE = 0.6;

@Injectable({
  providedIn: 'root'
})
export class BeadCoordTransformService {

  constructor(private appConfig: AppConfigService) { }

  transform(source: BeadPosition, element: HTMLImageElement, rawViewport: BeadViewport): BeadPosition {
    if (source === undefined || element === undefined) {
      console.log(`source: ${source}, element: ${element}`);
      return undefined;
    }

    const elementViewport = this.transformElementToViewport(element);
    console.log(`transform => elementViewport: ${JSON.stringify(elementViewport)}`);
    console.log(`transform => rawViewport: ${JSON.stringify(rawViewport)}`);
    console.log(`transform => elementViewport width: ${elementViewport.width()}`);
    console.log(`transform => rawViewport width: ${rawViewport.width()}`);
    const scaledWidth = elementViewport.scaledWidth(rawViewport);
    const scaledHeight = elementViewport.scaledHeight(rawViewport);
    console.log(`transform => scaled width: ${scaledWidth}`);
    console.log(`transform => scaled height: ${scaledHeight}`);

    return {
      x: source.x * scaledWidth,
      y: source.y * scaledHeight
    } as BeadPosition;

    // const xformPosition = this.transformBeadPosition(source);
    // const xformViewport = this.transformViewport(rawViewport);
    // const scale = (this.appConfig.isPortrait) ? PORTRAIT_SCALE : LANDSCAPE_SCALE;
    // return this.calculate(xformPosition, xformViewport, elementViewport, scale, this.appConfig.isPortrait);
  }

  // private transformBeadPosition(source: BeadPosition): BeadPosition {
  //   if (this.appConfig.isPortrait) {
  //     return {
  //       x: source.y,
  //       y: source.x
  //     }
  //   }

  //   return source;
  // }

  private transformElementToViewport(element: HTMLElement): BeadViewport {
    let beadViewport = new BeadViewport();

    Object.assign(beadViewport, {
      top: element.offsetTop,
      left: element.offsetLeft,
      bottom: element.offsetHeight + element.offsetTop,
      right: element.offsetWidth + element.offsetLeft
    }) as BeadViewport;

    console.log(`checking width: element source=${element.offsetWidth}`);
    console.log(`beadViewport json: ${JSON.stringify(beadViewport)}`);
    console.log(`beadViewport width: ${beadViewport.width()}`);
    return beadViewport;
  }

  // private transformViewport(viewport: BeadViewport) {
  //   if (!this.appConfig.isPortrait) {
  //     return viewport;
  //   }

  //   return {
  //     top: viewport.left,
  //     left: viewport.top,
  //     bottom: viewport.right,
  //     right: viewport.bottom
  //   };
  // }

  // private calculate(source: BeadPosition, xformViewport: BeadViewport, elementViewport: BeadViewport, scale: number, transformed: boolean): TransformedBeadPoint {
  //   const adjScaleX = scale * 0.95;
  //   // const newX = elementViewport.left + (elementViewport.right * adjScaleX) - (source.x / xformViewport.right * elementViewport.right * adjScaleX);
  //   // const newY = (elementViewport.top * scale) + (source.y / xformViewport.bottom * elementViewport.bottom * scale) - 30;
  //   let newX = ((source.x - elementViewport.left) / xformViewport.right * elementViewport.right * scale) + elementViewport.left;
  //   let newY = (source.y / xformViewport.bottom * elementViewport.bottom * scale);
  //   console.log(`isPortrait: ${this.appConfig.isPortrait}, newX: ${newX}, newY: ${newY}`);

  //   if (this.appConfig.isPortrait) {
  //     newX = elementViewport.right - newX;
  //     console.log(`adj newx: ${newX} left: ${elementViewport.left}, right: ${elementViewport.right}`);
  //   }

  //   return {
  //     x: newX,
  //     y: newY,
  //     top: elementViewport.left,
  //     left: elementViewport.top,
  //     bottom: elementViewport.right,
  //     right: elementViewport.bottom,
  //     scale,
  //     transformed
  //   }
  // }

}

export class BeadViewport {
  top: number;
  left: number;
  bottom: number;
  right: number;

  width(): number {
    const answer = (this.right !== undefined && this.left !== undefined) ? this.right - this.left : undefined;
    return answer;
  }

  height(): number {
    return (this.bottom !== undefined && this.top !== undefined) ? this.bottom - this.top : undefined;
  }

  scaledWidth(other: BeadViewport): number {
    console.log('in scaledWidth');
    return (other !== undefined && this.width() && other.width())
      ? this.width() / other.width()
      : undefined;
  }

  scaledHeight(other: BeadViewport): number {
    return (other && this.height() && other.height())
      ? this.height() / other.height()
      : undefined;
  }

}

export class TransformedBeadPoint extends BeadViewport implements BeadPosition {
  x: number;
  y: number;
  scale?: number;
  transformed?: boolean;
}
