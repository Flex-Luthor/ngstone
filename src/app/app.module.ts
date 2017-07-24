import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { HeaderComponent } from './header/header.component';
import * as _ from "lodash";
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardSectionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
