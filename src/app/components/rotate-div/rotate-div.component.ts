import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rotate-div',
  templateUrl: './rotate-div.component.html',
  styleUrls: ['./rotate-div.component.scss']
})
export class RotateDivComponent implements OnInit, AfterViewInit {

  @ViewChild('targetElement')
  targetElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.refreshImageDimensions();
  }

  private refreshImageDimensions(): void {
    if (this.targetElement) {
      const element = this.targetElement.nativeElement as HTMLElement;
      console.log(`rect: ${JSON.stringify(element.getBoundingClientRect())}`);
      console.log(`html: ${this.targetElement.nativeElement.innerHTML}`);
      console.log(`id: ${this.targetElement.nativeElement.id}`);
      console.log(`width: ${this.targetElement.nativeElement.offsetWidth}`);
      console.log(`height: ${this.targetElement.nativeElement.offsetHeight}`);
    }
  }

}
