import { EventEmitter, Injectable } from "@angular/core";
import { HammerGestureConfig } from "@angular/platform-browser";
import * as Hammer from 'hammerjs';

@Injectable({
  providedIn: 'root'
})
export class AppHammerConfig extends HammerGestureConfig {
  // onHammerEvent = new EventEmitter<HammerInput>();

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
    // mc.on('panleft panright', (ev) => {
    //   console.log(`mc.on => ${ev.direction} - ${ev.type}`);
    //   this.onHammerEvent.emit(ev);
    // });
    return mc;
  }
}

