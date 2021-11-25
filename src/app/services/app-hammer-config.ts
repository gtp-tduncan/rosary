import { EventEmitter, Injectable } from "@angular/core";
import { HammerGestureConfig } from "@angular/platform-browser";
import * as Hammer from 'hammerjs';

@Injectable({
  providedIn: 'root'
})
export class AppHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { enable: true, direction: Hammer.DIRECTION_HORIZONTAL },
    'pinch': { enable: false },
    'rotate': { enable: false }
  }

  buildHammer(element: HTMLElement) {
    console.log(`element: ${element?.getAttribute('id')}`);
    const mc = new Hammer(element, {
      touchAction: 'pan-x'
    });
    return mc;
  }
}

export function consoleHammerInput(ev: HammerInput) {
  console.log(`${ev.direction}, ${ev.isFirst}, ${ev.isFinal}`)
}