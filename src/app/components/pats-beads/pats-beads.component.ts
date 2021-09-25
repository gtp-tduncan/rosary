import { Component, OnInit } from '@angular/core';
import { BeadPosition } from 'src/app/models/bead-position';

@Component({
  selector: 'app-pats-beads',
  templateUrl: './pats-beads.component.html',
  styleUrls: ['./pats-beads.component.scss']
})
export class PatsBeadsComponent implements OnInit {

  imageWidth = 482;

  imageHeight = 1111;

  coords: BoxPosition[];

  private rawWidth = 1608;
  private rawHeight = 3704;
  private rawCoords: BeadPosition[] = [
    { x: 948, y: 3208 },
    { x: 1051, y: 2992 },
    { x: 1033, y: 2902 },
    { x: 283, y: 2830 },
    { x: 815, y: 2646 },

    { x: 805, y: 2368 },
    { x: 949, y: 2170 },
    { x: 1015, y: 2091 },
    { x: 1060, y: 2012 },
    { x: 1105, y: 1933 },
    { x: 1141, y: 1841 },
    { x: 1169, y: 1761 },
    { x: 1228, y: 1673 },
    { x: 1305, y: 1604 },
    { x: 1339, y: 1533 },
    { x: 1353, y: 1442 },

    { x: 1458, y: 1249 },

    { x: 1425, y: 1018 },
    { x: 1430, y: 924 },
    { x: 1458, y: 836 },
    { x: 1458, y: 765 },
    { x: 1447, y: 682 },
    { x: 1441, y: 600 },
    { x: 1425, y: 512 },
    { x: 1370, y: 429 },
    { x: 1287, y: 407 },
    { x: 1199, y: 396 },

    { x: 1045, y: 495 },

    { x: 820, y: 479 },
    { x: 771, y: 400 },
    { x: 723, y: 324 },
    { x: 693, y: 238 },
    { x: 705, y: 144 },
    { x: 658, y: 103 },
    { x: 584, y: 84 },
    { x: 504, y: 107 },
    { x: 443, y: 165 },
    { x: 408, y: 242 },

    { x: 357, y: 459 },

    { x: 391, y: 683 },
    { x: 351, y: 759 },
    { x: 279, y: 788 },
    { x: 186, y: 836 },
    { x: 142, y: 907 },
    { x: 123, y: 986 },
    { x: 124, y: 1074 },
    { x: 137, y: 1161 },
    { x: 174, y: 1241 },
    { x: 230, y: 1318 },

    { x: 399, y: 1503 },

    { x: 341, y: 1710 },
    { x: 371, y: 1796 },
    { x: 405, y: 1871 },
    { x: 424, y: 1953 },
    { x: 481, y: 2034 },
    { x: 555, y: 2062 },
    { x: 654, y: 2074 },
    { x: 738, y: 2082 },
    { x: 787, y: 2139 },
    { x: 810, y: 2215 },

  ];

  constructor() { }

  ngOnInit(): void {
    const offset = 5;
    this.coords = [];

    this.rawCoords.forEach(entry => {
      const newX = (entry.x / this.rawWidth * this.imageWidth);
      const newY = (entry.y / this.rawHeight * this.imageHeight);

      const boxPosition: BoxPosition = {
        left: (newX - offset),
        right: (newX + offset),
        top: (newY - offset),
        bottom: (newY + offset)
      }

      this.coords.push(boxPosition);
    })
  }

}

interface BoxPosition {
  left: number;
  right: number;
  top: number;
  bottom: number;
}
