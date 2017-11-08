import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroServiceService } from './hero-service.service';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { PqrsComponent } from './pqrs/pqrs.component';
import { PqrsService } from './pqrs.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule, ButtonModule, DataTableModule, DialogModule, MultiSelectModule, OverlayPanelModule } from 'primeng/primeng';
import { BehavioursComponent } from './behaviours/behaviours.component';
import { BehavioursService } from './behaviours.service';
import { BehaviourComponent } from './behaviour/behaviour.component';
import { EmotionComponent } from './emotion/emotion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    PqrsComponent,
    BehavioursComponent,
    BehaviourComponent,
    EmotionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    DataTableModule,
    ButtonModule,
    MultiSelectModule,
    OverlayPanelModule
  ],
  providers: [HeroServiceService, PqrsService, BehavioursService],
  bootstrap: [AppComponent]
})
export class AppModule { }
