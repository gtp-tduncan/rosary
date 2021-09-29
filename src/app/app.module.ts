import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OurFatherComponent } from './prayers/our-father/our-father.component';
import { HailMaryComponent } from './prayers/hail-mary/hail-mary.component';
import { GloryComponent } from './prayers/glory/glory.component';
import { CreedComponent } from './prayers/creed/creed.component';
import { ClosingComponent } from './prayers/closing/closing.component';
import { FatimaComponent } from './prayers/fatima/fatima.component';
import { HailHolyQueenComponent } from './prayers/hail-holy-queen/hail-holy-queen.component';
import { MysterySelectorComponent } from './components/mystery-selector/mystery-selector.component';
import { HolyRosaryPrayerComponent } from './components/holy-rosary-prayer/holy-rosary-prayer.component';
import { ActivePrayerComponent } from './components/active-prayer/active-prayer.component';
import { PatsBeadsComponent } from './components/pats-beads/pats-beads.component';
import { SignCrossComponent } from './prayers/sign-cross/sign-cross.component';
import { EndComponent } from './prayers/end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivePrayerComponent,
    OurFatherComponent,
    HailMaryComponent,
    GloryComponent,
    CreedComponent,
    ClosingComponent,
    FatimaComponent,
    HailHolyQueenComponent,
    MysterySelectorComponent,
    HolyRosaryPrayerComponent,
    PatsBeadsComponent,
    SignCrossComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
