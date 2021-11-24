import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-config',
  templateUrl: './main-config.component.html',
  styleUrls: ['./main-config.component.scss']
})
export class MainConfigComponent implements OnInit {

  activeTab = 'device';

  @Output()
  onCloseConfigViewEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  onActivateTab(activateTab: string): void {
    this.activeTab = activateTab;
  }

  onClose(): void {
    this.onCloseConfigViewEvent.emit(true);
  }

  tabStateClass(tabName: string): string {
    return (this.activeTab && this.activeTab === tabName)
      ? 'selected-tab'
      : 'unselected-tab';
  }
}
