import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsAngularModule } from 'google-maps-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
