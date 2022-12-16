import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DirecctionsApiClient extends HttpClient {
  public baseURL: string = 'https://api.mapbox.com/directions/v5/mapbox/driving';

  constructor( handler: HttpHandler ) {
    super(handler)
  }

  public override get<T>( url: string ) {

    url = this.baseURL + url;

    return super.get<T>( url, {
      params: {
        alternatives: false,
        geometries: 'geojson',
        language: 'en',
        overview: 'simplified',
        steps: false,
        access_token: environment.apiKey
      }
    });

  } 
}