import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showForkNotice = true;

  newProjectUrl = 'https://git-catholic.github.io/rosary-beads/';

  constructor() { }

  ngOnInit(): void { }

  onUseOriginalSite() {
    console.log('selected original site');
    this.showForkNotice = false;
  }

}
