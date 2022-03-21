import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/scroller-container/home/home.component';
import { section2Component } from './components/scroller-container/section2/section2.component';
import { ScrollerContainerComponent } from './components/scroller-container/scroller-container.component';
import { Section3Component } from './components/scroller-container/section3/section3.component';
import { Section4Component } from './components/scroller-container/section4/section4.component';
import { Section5Component } from './components/scroller-container/section5/section5.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    section2Component,
    ScrollerContainerComponent,
    Section3Component,
    Section4Component,
    Section5Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
