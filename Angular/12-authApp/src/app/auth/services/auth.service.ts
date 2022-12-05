import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AuthResponse, User } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = environment.baseURL;
  private _user!: User;

  get user() {
    return { ...this._user };
  }

  constructor( private http: HttpClient ) { }

  register( name: string, email: string, password: string ) {
    const url = `${ this.baseURL }/auth/new`;
    const body = { name, email, password };

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( ({ ok, token }) => {
          if( ok ) {
            localStorage.setItem( 'token', token! );
          };
        }),
        map( valid => valid.ok ),
        catchError( error => of(error.error.msg) )
      );
  };

  login( email: string, password: string ) {
    const url = `${ this.baseURL }/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( res => {
          if( res.ok ) {
            localStorage.setItem( 'token', res.token! );
          };
        }),
        map( valid => valid.ok ),
        catchError( error => of(error.error.msg) )
      );
  };

  tokenValidator(): Observable<boolean> {
    const url = `${ this.baseURL }/auth/renew`;
    const headers = new HttpHeaders()
      .set( 'x-token', localStorage.getItem('token') || '' );

    return this.http.get<AuthResponse>( url, { headers } )
      .pipe(
        map( res => {
          localStorage.setItem( 'token', res.token! );
          this._user = {
            name: res.name!,
            email: res.email!,
            uid: res.uid!
          };
          return res.ok;
        }),
        catchError( error => of(false) )
      );
  };

  logout() {
    localStorage.clear();
  };
}
