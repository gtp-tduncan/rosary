import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppConfigService } from 'src/app/services/app-config.service';

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

  @Output()
  onEnableNavigationEvent = new EventEmitter<boolean>();

  @Output()
  onToggleViewEvent = new EventEmitter<boolean>();

  @ViewChild('navEnabledChkbox')
  navEnabledChkbox: ElementRef;

  constructor(public appConfig: AppConfigService) { }

  ngOnInit(): void { }

  onStartNew() {
    this.onResetEvent.emit(true);
  }

  onEnableNavigation(): void {
    console.log(`header nav flag: ${this.navEnabledChkbox?.nativeElement?.checked}`);
    this.onEnableNavigationEvent.emit(this.navEnabledChkbox?.nativeElement?.checked);
  }

  onToggleView(): void {
    this.onToggleViewEvent.emit(true);
  }

  toggleViewButtonClassName(): string {
    return (this.appConfig.isFullscreen)
      ? 'arrows-btn-inward'
      : 'arrows-btn-outward';
  }
}
