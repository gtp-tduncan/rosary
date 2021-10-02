import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MysterySelectorComponent } from './components/mystery-selector/mystery-selector.component';
import { HolyRosaryPrayerComponent } from './components/holy-rosary-prayer/holy-rosary-prayer.component';
import { ActivePrayerComponent } from './components/active-prayer/active-prayer.component';
import { PatsBeadsComponent } from './components/pats-beads/pats-beads.component';
import { ClosingComponent } from './prayers/closing/closing.component';
import { CreedComponent } from './prayers/creed/creed.component';
import { EndComponent } from './prayers/end/end.component';
import { FatimaComponent } from './prayers/fatima/fatima.component';
import { GloryComponent } from './prayers/glory/glory.component';
import { HailHolyQueenComponent } from './prayers/hail-holy-queen/hail-holy-queen.component';
import { HailMaryComponent } from './prayers/hail-mary/hail-mary.component';
import { OurFatherComponent } from './prayers/our-father/our-father.component';
import { SignCrossComponent } from './prayers/sign-cross/sign-cross.component';
import { NoticesComponent } from './components/notices/notices.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivePrayerComponent,
    MysterySelectorComponent,
    HolyRosaryPrayerComponent,
    PatsBeadsComponent,

    SignCrossComponent,
    CreedComponent,
    OurFatherComponent,
    HailMaryComponent,
    GloryComponent,
    FatimaComponent,
    HailHolyQueenComponent,
    ClosingComponent,
    EndComponent,
    NoticesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // ,
    // PrayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
