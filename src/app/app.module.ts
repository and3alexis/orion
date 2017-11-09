import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule, ButtonModule, DataTableModule, DialogModule, MultiSelectModule, OverlayPanelModule, AccordionModule } from 'primeng/primeng';
import { BehavioursComponent } from './behaviours/behaviours.component';
import { BehavioursService } from './behaviours.service';
import { BehaviourComponent } from './behaviour/behaviour.component';
import { EmotionComponent } from './emotion/emotion.component';
import { ParamsComponent } from './params/params.component';
import { ColorComponent } from './color/color.component';
import { UserHistoriesComponent } from './user-histories/user-histories.component';
import { UserHistoriesService } from './user-histories.service';


@NgModule({
  declarations: [
    AppComponent,
    BehavioursComponent,
    BehaviourComponent,
    EmotionComponent,
    ParamsComponent,
    ColorComponent,
    UserHistoriesComponent
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
    OverlayPanelModule,
    AccordionModule
  ],
  providers: [BehavioursService, UserHistoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
