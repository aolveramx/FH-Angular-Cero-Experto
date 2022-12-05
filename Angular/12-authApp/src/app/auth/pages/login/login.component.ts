import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import sweetAlert from 'sweetalert2'

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm: FormGroup = this.formBuilder.group({
    email: ['test2@gmail.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]]
  });

  constructor( 
    private formBuilder: FormBuilder, 
    private router: Router,
    private authService: AuthService ) { }

  login() {
    const { email, password } = this.myForm.value;
    this.authService.login( email, password )
      .subscribe( ok => {
        if( ok === true ) {
          this.router.navigateByUrl('/dashboard');
        } else {
          sweetAlert.fire('Error', ok, 'error');
        }
      });
  };
}
