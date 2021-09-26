// import { Component, EventEmitter } from '@angular/core';
// import { BeadGroup } from 'src/app/models/bead-group';

// @Component({
//   selector: 'app-rosary-based-sequence',
//   templateUrl: './rosary-based-sequence.component.html',
//   styleUrls: ['./rosary-based-sequence.component.scss']
// })
// export abstract class RosaryBasedSequenceComponent  {

//   beadEvent = new EventEmitter<BeadGroup>();

//   private currentBead: BeadGroup;
//   private currentBeadIdx: number;

//   constructor() { }

//   abstract get prayerName(): string;

//   abstract get beads(): BeadGroup[];

//   start(): void {
//     this.currentBeadIdx = -1;
//   }

//   next(): void {
//     this.currentBeadIdx++;
//     this.currentBead = this.beads[this.currentBeadIdx];
//     this.beadEvent.emit(this.beads[0]);
//   }

// }
