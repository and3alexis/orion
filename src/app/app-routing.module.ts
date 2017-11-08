import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PqrsComponent } from './pqrs/pqrs.component';
import { BehavioursComponent } from './behaviours/behaviours.component';
import { BehaviourComponent } from './behaviour/behaviour.component';
import { UserHistoriesComponent } from './user-histories/user-histories.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'pqrs', component: PqrsComponent },
  { path: 'behaviour/:code', component: BehaviourComponent },
  { path: 'userHistories', component: UserHistoriesComponent },
  { path: 'userHistory/:userHistory/behaviours', component: BehavioursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
