import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';

import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  public baseUrl: string = 'http://localhost:3000/usuarios';

  constructor( private http: HttpClient ) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;
    console.log(email);
    return this.http.get<any[]>(`${this.baseUrl}/?q=${ email }`)
      .pipe(
        map( res => {
          return ( res.length === 0 ) 
            ? null
            : { emailTomado: true }
        })
      );
  }

}
