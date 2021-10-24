import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivePrayerComponent } from './components/active-prayer/active-prayer.component';
import { CurrentPrayerComponent } from './components/holy-rosary-prayer/current-prayer/current-prayer.component';
import { HolyRosaryPrayerComponent } from './components/holy-rosary-prayer/holy-rosary-prayer.component';
import { MysteryDisplayComponent } from './components/holy-rosary-prayer/mystery-display/mystery-display.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { LiturgicalDatesComponent } from './components/liturgical-dates/liturgical-dates.component';
import { MysterySelectorComponent } from './components/mystery-selector/mystery-selector.component';
import { NoticesComponent } from './components/notices/notices.component';
import { PatsBeadsComponent } from './components/pats-beads/pats-beads.component';
import { EndComponent } from './prayers/end/end.component';


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
    CurrentPrayerComponent
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
