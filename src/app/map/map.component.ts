import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyDvthRvKZT2xrDC2XwN6ImhhUFEnooQQsQ',
    });
    loader.load().then(() => {
      const myLatLng = { lat: 34.052235, lng: -118.243683 };
      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center: myLatLng,
          zoom: 4.5,
        }
      );
      new google.maps.Marker({
        position: myLatLng,
        map,
        title: 'City: Los Angeles\nState: California',
      });
      new google.maps.Marker({
        position: {
          lat: 47.620422,
          lng: -122.349358,
        },
        map,
        title: 'City: Seattle\nState: Washington',
      });
      new google.maps.Marker({
        position: {
          lat: 39.952583,
          lng: -75.165222,
        },
        map,
        title: 'City: Philadelphia\nState: Pennsylvania',
      });
      new google.maps.Marker({
        position: {
          lat: 32.89748,
          lng: -97.040443,
        },
        map,
        title: 'City: Dallas\nState: Texas',
      });
      new google.maps.Marker({
        position: {
          lat: 43.0,
          lng: -75.0,
        },
        map,
        title: 'City: New York\nState: New York State',
      });
      new google.maps.Marker({
        position: {
          lat: 36.114647,
          lng: -115.172813,
        },
        map,
        title: 'City: Las Vegas\nState: Nevada',
      });
      new google.maps.Marker({
        position: {
          lat: 41.881832,
          lng: -87.623177,
        },
        map,
        title: 'City: Chicago\nState: Illinois',
      });
      new google.maps.Marker({
        position: {
          lat: 33.448376,
          lng: -112.074036,
        },
        map,
        title: 'City: Phoenix\nState: Arizona',
      });
      new google.maps.Marker({
        position: {
          lat: 42.348495,
          lng: -83.060303,
        },
        map,
        title: 'City: Detroit\nState: Michigan',
      });
      new google.maps.Marker({
        position: {
          lat: 37.733795,
          lng: -122.446747,
        },
        map,
        title: 'City: San Francisco\nState: California',
      });
    });
  }
}
