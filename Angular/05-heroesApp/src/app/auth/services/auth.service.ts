import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, map, Observable, of } from 'rxjs';

import { Auth } from '../interfaces/auth.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth: Auth | undefined;
  private baseURL: string = environment.baseUrl;

  get auth(): Auth {
    return { ...this._auth! };
  }

  constructor(
    private http: HttpClient
  ) { }

  verificaAutenticacion(): Observable<boolean> {
    if(!localStorage.getItem('token')) {
      return of(false);
    }

    return this.http.get<Auth>(`${ this.baseURL }/usuarios/1`)
      .pipe(
        map( auth =>  {
          this._auth = auth;
          return true;
        })
      );
  }

  login() {
    return this.http.get<Auth>(`${ this.baseURL }/usuarios/1`)
      .pipe(
        tap( auth => this._auth = auth ),
        tap( auth => localStorage.setItem('token', auth.id) )
      )
  }

  logout() {
    this._auth = undefined;
  }
}
