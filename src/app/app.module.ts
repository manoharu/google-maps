import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCkrPVSxUnikEhtleFfmDhAdM92Sb5XSg8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
