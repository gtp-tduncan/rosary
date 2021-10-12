import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class  LayoutsComponent implements OnInit {

  private imageWidth = undefined;
  private imageHeight = undefined;

  constructor() { }

  ngOnInit(): void {
    // this.onResize(undefined);
  }

  // get imageStyle(): string {
  //   if (this.imageHeight !== undefined || this.imageWidth !== undefined) {
  //     return (this.imageWidth)
  //       ? `width: ${this.imageWidth}px`
  //       : `height: ${this.imageHeight}px`;
  //   }
  //   return '';
  // }

  // onResize(event) {
  //   const contentBorder = document.querySelector('.content-border');

  //   console.log(`contentBorder: ${contentBorder?.innerHTML}`);
  //   console.log(`classList: ${JSON.stringify(contentBorder.attributes)}`);
  //   const contentBorderRect = contentBorder.getBoundingClientRect();
  //   const width = Math.trunc(contentBorderRect.width);
  //   const height = Math.trunc(contentBorderRect.height);
  //   if (width < height) {
  //     this.imageWidth = width.toString();
  //     this.imageHeight = undefined;
  //   }
  //   else {
  //     this.imageHeight = height.toString();
  //     this.imageWidth = undefined;
  //   }
  //   console.log(`window: w=${window.innerWidth} h=${window.innerHeight} => imageWidth: ${this.imageWidth}, imageHeight: ${this.imageHeight} => ${this.imageStyle}`);
  // }
}
