import { Component, ElementRef,  HostListener,  Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BeadPosition } from 'src/app/models/bead-position';

@Component({
  selector: 'app-pats-beads',
  templateUrl: './pats-beads.component.html',
  styleUrls: ['./pats-beads.component.scss']
})
export class PatsBeadsComponent implements OnInit, OnChanges {

  @Input()
  highlightBeadIdx: number;

  imageWidth = 273;

  imageHeight = 630;

  highlightTop: string;
  highlightLeft: string;

  private rawWidth = 1608;
  private rawHeight = 3704;
  private rawCoords: BeadPosition[] = [

    { x: 853, y: 3454 },  // Sign of the cross

    { x: 948, y: 3208 },  // Apostles Creed
    { x: 948, y: 3208 },  // Our Father

    { x: 1051, y: 2992 }, // Hail Marys
    { x: 1033, y: 2902 },
    { x: 988, y: 2830 },

    { x: 815, y: 2646 },  // Glory Be
    { x: 815, y: 2646 },  // First Mystery

    { x: 805, y: 2368 },  // Our Father
    { x: 949, y: 2170 },  // Hail Marys
    { x: 1015, y: 2091 },
    { x: 1060, y: 2012 },
    { x: 1105, y: 1933 },
    { x: 1141, y: 1841 },
    { x: 1169, y: 1761 },
    { x: 1228, y: 1673 },
    { x: 1305, y: 1604 },
    { x: 1339, y: 1533 },
    { x: 1353, y: 1442 },

    { x: 1458, y: 1249 }, // Glory Be
    { x: 1458, y: 1249 }, // Second Mystery
    { x: 1458, y: 1249 }, // Our Father

    { x: 1425, y: 1018 }, // Hail Marys
    { x: 1430, y: 924 },
    { x: 1458, y: 836 },
    { x: 1458, y: 765 },
    { x: 1447, y: 682 },
    { x: 1441, y: 600 },
    { x: 1425, y: 512 },
    { x: 1370, y: 429 },
    { x: 1287, y: 407 },
    { x: 1199, y: 396 },

    { x: 1045, y: 495 },  // Glory Be
    { x: 1045, y: 495 },  // Third Mystery
    { x: 1045, y: 495 },  // Our Father

    { x: 820, y: 479 },   // Hail Marys
    { x: 771, y: 400 },
    { x: 723, y: 324 },
    { x: 693, y: 238 },
    { x: 705, y: 144 },
    { x: 658, y: 103 },
    { x: 584, y: 84 },
    { x: 504, y: 107 },
    { x: 443, y: 165 },
    { x: 408, y: 242 },

    { x: 357, y: 459 },   // Glory Be
    { x: 357, y: 459 },   // Fourth Mystery
    { x: 357, y: 459 },   // Our Father

    { x: 391, y: 683 },   // Hail Marys
    { x: 351, y: 759 },
    { x: 279, y: 788 },
    { x: 186, y: 836 },
    { x: 142, y: 907 },
    { x: 123, y: 986 },
    { x: 124, y: 1074 },
    { x: 137, y: 1161 },
    { x: 174, y: 1241 },
    { x: 230, y: 1318 },

    { x: 399, y: 1503 },  // Glory Be
    { x: 399, y: 1503 },  // Fifth Mystery
    { x: 399, y: 1503 },  // Our Father

    { x: 341, y: 1710 },  // Hail Marys
    { x: 371, y: 1796 },
    { x: 405, y: 1871 },
    { x: 424, y: 1953 },
    { x: 481, y: 2034 },
    { x: 555, y: 2062 },
    { x: 654, y: 2074 },
    { x: 738, y: 2082 },
    { x: 787, y: 2139 },
    { x: 810, y: 2215 },

    { x: 805, y: 2368 },  // Glory Be
    { x: 805, y: 2368 },  // Hail, Holy Queen
    { x: 805, y: 2368 },  // Closing

    { x: 853, y: 3454 }   // Sign of the cross

  ];

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.ngOnChanges(undefined);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateBoxPosition();
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   const element = document.getElementById('pats-beads');
  //   this.imageWidth = element.clientWidth;
  //   this.imageHeight = element.clientHeight;
  //   this.calculateBoxPosition();
  // }

  hightlightStyle(): string {
    if (this.highlightTop && this.highlightLeft) {
      return `top: ${this.highlightTop}; left: ${this.highlightLeft}`;
    }
    return undefined;
  }

  private calculateBoxPosition() {
    const offset = 15;
    const rawCoord = this.rawCoords[this.highlightBeadIdx];
    this.highlightLeft = ((rawCoord.x / this.rawWidth * this.imageWidth) - offset).toString() + 'px';
    this.highlightTop = ((rawCoord.y / this.rawHeight * this.imageHeight) - offset - this.imageHeight).toString() + 'px';
  }
}
