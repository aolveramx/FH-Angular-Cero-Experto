import { Injectable } from '@angular/core';

import { Feature, PlacesResponse } from '../interfaces/places.interface';
import { PlacesApiClient } from '../api';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation?: [ number, number ];
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor(
    private mapService: MapService,
    private placesApi: PlacesApiClient ) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[ number, number ]> {
    return new Promise( (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [ coords.longitude, coords.latitude ];
          resolve( this.userLocation );
        },
        ( error ) => {
          alert( 'Internal error' );
          console.log( error );
          reject();
        }
      );
    });
  }

  getPlacesByQuery( query: string = '' ) {
    if( query.length === 0 ) {
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }

    if( !this.userLocation ) throw Error('There is no userLocation');

    this.isLoadingPlaces = true;

    this.placesApi.get<PlacesResponse>(`/${ query }.json`, {
      params: {
        proximity: this.userLocation?.join(',')
      }
    })
      .subscribe( res => {
        this.isLoadingPlaces = true;
        this.places = res.features;

        this.mapService.createMarkersFromPlaces( this.places, this.userLocation! );
      });
  }

  deletePlaces() {
    this.places = [];
  }
  
}
