import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { HolyRosaryHomeComponent } from "../holy-rosary/holy-rosary-home.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('rosary')
  rosary: HolyRosaryHomeComponent;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('ngOnInit() - HomeComponent');
    this.router.navigate([ '/holy-rosary' ]);
  }

  onResetEvent(): void {
    console.log(`home reset event: ${this.rosary}`);
    if (this.rosary) {
      this.rosary.resetPrayer();
    }
  }
}
