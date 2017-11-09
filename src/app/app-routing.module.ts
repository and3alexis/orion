import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehavioursComponent } from './behaviours/behaviours.component';
import { BehaviourComponent } from './behaviour/behaviour.component';
import { UserHistoriesComponent } from './user-histories/user-histories.component';


const routes: Routes = [
  { path: '', redirectTo: '/userHistories', pathMatch: 'full' },
  { path: 'behaviour/:code', component: BehaviourComponent },
  { path: 'userHistories', component: UserHistoriesComponent },
  { path: 'userHistory/:userHistory/behaviours', component: BehavioursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
