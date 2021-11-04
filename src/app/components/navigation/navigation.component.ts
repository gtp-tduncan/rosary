import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output()
  onNextClickEvent = new EventEmitter<string>();

  @Output()
  onPreviousClickEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onNext() {
    this.onNextClickEvent.emit('next');
  }

  onPrevious() {
    this.onPreviousClickEvent.emit('prev');
  }

}
