import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HolyRosaryHomeComponent } from './components/holy-rosary/holy-rosary-home.component';
import { HomeComponent } from './components/home/home.component';
import { BuzzFeedbackComponent } from './components/testing/buzz-feedback/buzz-feedback.component';
import { LayoutsComponent } from './components/testing/layouts/layouts.component';

const routes: Routes = [
  { path: 'holy-rosary', component: HolyRosaryHomeComponent },
  { path: '', component: HomeComponent },
  { path: 'testing/layout', component: LayoutsComponent },
  { path: 'testing/buzz', component: BuzzFeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
