import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { combineLatest, Observable, of } from 'rxjs';

import { Pais, PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  private baseUrl: string = 'https://restcountries.com/v3.1'
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(): string[] {
    return [ ...this._regiones ];
  }

  constructor( private http: HttpClient ) { }

  getPaisesPorRegion( region: string ): Observable<PaisSmall[]> {
    const url: string = `${ this.baseUrl }/region/${ region }`
    return this.http.get<PaisSmall[]>(`${ url }`);
  }
  
  getPaisPorAlpha( codigo: string ): Observable<Pais[] | null> {
    
    if( !codigo ) {
      return of(null)
    }

    const url: string = `${ this.baseUrl }/alpha/${ codigo }`
    return this.http.get<Pais[]>(`${ url }`);
  }

}
