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
import { MysteryGloriousComponent } from './components/mysteries/mystery-glorious/mystery-glorious.component';
import { MysteryJoyfulComponent } from './components/mysteries/mystery-joyful/mystery-joyful.component';
import { MysteryLuminousComponent } from './components/mysteries/mystery-luminous/mystery-luminous.component';
import { MysterySorrowfulComponent } from './components/mysteries/mystery-sorrowful/mystery-sorrowful.component';
import { MysterySelectorComponent } from './components/mystery-selector/mystery-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    OurFatherComponent,
    HailMaryComponent,
    GloryComponent,
    CreedComponent,
    ClosingComponent,
    FatimaComponent,
    HailHolyQueenComponent,
    MysteryGloriousComponent,
    MysteryJoyfulComponent,
    MysteryLuminousComponent,
    MysterySorrowfulComponent,
    MysterySelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
