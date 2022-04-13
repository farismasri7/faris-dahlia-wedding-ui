import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/scroller-container/home/home.component';
import { Section2Component } from './components/scroller-container/section2/section2.component';
import { ScrollerContainerComponent } from './components/scroller-container/scroller-container.component';
import { Section3Component } from './components/scroller-container/section3/section3.component';
import { Section4Component } from './components/scroller-container/section4/section4.component';
import { Section5Component } from './components/scroller-container/section5/section5.component';
import { Section6Component } from './components/section6/section6.component';
import { Section7Component } from './components/section7/section7.component';
import { AuthService } from './services/auth/auth.service';
import { GuestsService } from './services/guests/guests.service';
import { RsvpService } from './services/rsvp/rsvp.service';
import { Section8Component } from './components/scroller-container/section8/section8.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AdminGuard } from './guards/admin.guard';




const appRoutes: Routes = [
  { path: '', component: ScrollerContainerComponent },
  { path: 'login', component: Section6Component },
  { path: 'guests', component: Section7Component, canActivate: [AdminGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ScrollerContainerComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    Section8Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    PdfViewerModule
  ],
  providers: [AuthService, GuestsService, RsvpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

