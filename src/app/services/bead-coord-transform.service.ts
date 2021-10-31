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

  transform(source: BeadPosition, element: HTMLImageElement, rawViewport: BeadViewport): TransformedBeadPoint {
    if (source === undefined || element === undefined) {
      console.log(`source: ${source}, element: ${element}`);
      return undefined;
    }

    const xformPosition = this.transformBeadPosition(source);
    const elementViewport = this.transformElementToViewport(element);
    const xformViewport = this.transformViewport(rawViewport);
    const scale = (this.appConfig.isPortrait) ? PORTRAIT_SCALE : LANDSCAPE_SCALE;
    return this.calculate(xformPosition, xformViewport, elementViewport, scale, this.appConfig.isPortrait);
  }

  private transformBeadPosition(source: BeadPosition): BeadPosition {
    if (this.appConfig.isPortrait) {
      return {
        x: source.y,
        y: source.x
      }
    }

    return source;
  }

  private transformElementToViewport(element: HTMLElement): BeadViewport {
    const viewport = {
      top: element.offsetTop,
      left: element.offsetLeft,
      bottom: element.offsetHeight + element.offsetTop,
      right: element.offsetWidth + element.offsetLeft
    };

    return this.transformViewport(viewport);
  }

  private transformViewport(viewport: BeadViewport) {
    if (!this.appConfig.isPortrait) {
      return viewport;
    }

    return {
      top: viewport.left,
      left: viewport.top,
      bottom: viewport.right,
      right: viewport.bottom
    };
  }

  private calculate(source: BeadPosition, xformViewport: BeadViewport, elementViewport: BeadViewport, scale: number, transformed: boolean): TransformedBeadPoint {
    const adjScaleX = scale * 0.95;
    // const newX = elementViewport.left + (elementViewport.right * adjScaleX) - (source.x / xformViewport.right * elementViewport.right * adjScaleX);
    // const newY = (elementViewport.top * scale) + (source.y / xformViewport.bottom * elementViewport.bottom * scale) - 30;
    let newX = ((source.x - elementViewport.left) / xformViewport.right * elementViewport.right * scale) + elementViewport.left;
    let newY = (source.y / xformViewport.bottom * elementViewport.bottom * scale);
    console.log(`isPortrait: ${this.appConfig.isPortrait}, newX: ${newX}, newY: ${newY}`);

    if (this.appConfig.isPortrait) {
      newX = elementViewport.right - newX;
      console.log(`adj newx: ${newX} left: ${elementViewport.left}, right: ${elementViewport.right}`);
    }

    return {
      x: newX,
      y: newY,
      top: elementViewport.left,
      left: elementViewport.top,
      bottom: elementViewport.right,
      right: elementViewport.bottom,
      scale,
      transformed
    }
  }

}

export interface BeadViewport {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

export interface TransformedBeadPoint extends BeadPosition, BeadViewport {
  scale?: number;
  transformed?: boolean;
}
