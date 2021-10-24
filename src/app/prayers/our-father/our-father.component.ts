import { AfterViewInit, Component, ElementRef, Injectable, OnInit } from '@angular/core';
import { Prayer } from '../common-prayers';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-our-father',
  templateUrl: './our-father.component.html',
  styleUrls: ['./our-father.component.scss']
})
export class OurFatherComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.log(`C1: ${this.leader()}`);
    // console.log(`C2: ${this.response()}`);
    // console.log(`C3: ${this.all()}`);
  }
}
