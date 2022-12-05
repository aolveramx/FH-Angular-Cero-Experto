import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import sweetAlert from 'sweetalert2'

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  myForm: FormGroup = this.formBuilder.group({
    name: ['Test 2', [Validators.required]],
    email: ['test2@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor( 
    private formBuilder: FormBuilder, 
    private router: Router,
    private authService: AuthService ) { }

  register() {
    const { name, email, password } = this.myForm.value;
    this.authService.register( name, email, password )
      .subscribe( ok => {
        if( ok === true) {
          this.router.navigateByUrl('/dashboard');
        } else {
          sweetAlert.fire('Error', ok), 'error';
        };
      });
  };
}
