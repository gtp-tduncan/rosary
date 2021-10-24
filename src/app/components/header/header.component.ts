import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  prayerName: string;

  @Input()
  isPrayerSequenceDone: boolean;

  @Output()
  onResetEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void { }

  onStartNew() {
    this.onResetEvent.emit(true);
  }

}
