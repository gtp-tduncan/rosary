import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignCrossComponent } from './prayers/sign-cross/sign-cross.component';
import { OurFatherComponent } from './prayers/our-father/our-father.component';
import { HailMaryComponent } from './prayers/hail-mary/hail-mary.component';
import { GloryComponent } from './prayers/glory/glory.component';
import { CreedComponent } from './prayers/creed/creed.component';
import { ClosingComponent } from './prayers/closing/closing.component';
import { FatimaComponent } from './prayers/fatima/fatima.component';
import { HailHolyQueenComponent } from './prayers/hail-holy-queen/hail-holy-queen.component';
import { EndComponent } from './prayers/end/end.component';
import { MysterySelectorComponent } from './components/mystery-selector/mystery-selector.component';
import { HolyRosaryPrayerComponent } from './components/holy-rosary-prayer/holy-rosary-prayer.component';
import { ActivePrayerComponent } from './components/active-prayer/active-prayer.component';
import { PatsBeadsComponent } from './components/pats-beads/pats-beads.component';
import { NoticesComponent } from './components/notices/notices.component';
import { FormsModule } from '@angular/forms';
import { LiturgicalDatesComponent } from './components/liturgical-dates/liturgical-dates.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivePrayerComponent,
    MysterySelectorComponent,
    HolyRosaryPrayerComponent,
    NoticesComponent,
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
    LiturgicalDatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
