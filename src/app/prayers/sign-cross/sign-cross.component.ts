import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-cross',
  templateUrl: './sign-cross.component.html',
  styleUrls: ['./sign-cross.component.scss']
})
export class SignCrossComponent implements OnInit {

  constructor() {
    console.log(`SignCrossComponent constructor`);
  }

  ngOnInit(): void {
  }

}
