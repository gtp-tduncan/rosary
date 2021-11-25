import { EventEmitter, Injectable, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivePrayerComponent } from './components/active-prayer/active-prayer.component';
import { CurrentPrayerComponent } from './components/holy-rosary-prayer/current-prayer/current-prayer.component';
import { HolyRosaryPrayerComponent } from './components/holy-rosary-prayer/holy-rosary-prayer.component';
import { MysteryDisplayComponent } from './components/holy-rosary-prayer/mystery-display/mystery-display.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutsComponent } from './components/testing/layouts/layouts.component';
import { LiturgicalDatesComponent } from './components/liturgical-dates/liturgical-dates.component';
import { MysterySelectorComponent } from './components/mystery-selector/mystery-selector.component';
import { NoticesComponent } from './components/notices/notices.component';
import { PatsBeadsComponent } from './components/pats-beads/pats-beads.component';
import { EndComponent } from './prayers/end/end.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RotateDivComponent } from './components/rotate-div/rotate-div.component';
import { BuzzFeedbackComponent } from './components/testing/buzz-feedback/buzz-feedback.component';
import { DeviceDetailsComponent } from './components/config/device-details/device-details.component';
import { MainConfigComponent } from './components/config/main-config/main-config.component';
import { AppHammerConfig } from './services/app-hammer-config';

@NgModule({
  declarations: [
    AppComponent,
    ActivePrayerComponent,
    MysterySelectorComponent,
    HolyRosaryPrayerComponent,
    NoticesComponent,
    PatsBeadsComponent,

    EndComponent,
    LiturgicalDatesComponent,
    LayoutsComponent,
    HomeComponent,
    MysteryDisplayComponent,
    CurrentPrayerComponent,
    HeaderComponent,
    NavigationComponent,
    RotateDivComponent,
    BuzzFeedbackComponent,
    DeviceDetailsComponent,
    MainConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HammerModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: AppHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
