import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'google-maps';
  latLong: any;
  markers: any[];
  locationDetails: any;

  center: any;
  constructor(

  ) {
    this.latLong = {
      lat: 17.450,
      lng: 78.380
    };
    this.markers = [ {
      lat: 17.48451091733678,
      long: 78.38884818215061,
      type: "Sujana Forum Mall",
      labelDetails: {
        text: "Sujana Forum Mall",
        fontWeight: "normal",
        fontSize: "14px",
        color: "white"
      }
    }, {
      lat: 17.437845524609074,
      long: 78.40058293982317,
      labelDetails: {
        text: "Tonique Road No 36",
        fontWeight: "normal",
        fontSize: "14px",
        color: "white"
      }
    }, {
      lat: 17.413259805393615,
      long: 78.46559992447634,
      labelDetails: {
        text: "Prasads Imax",
        fontWeight: "normal",
        fontSize: "14px",
        color: "white"
      }
    }];
  }

}
