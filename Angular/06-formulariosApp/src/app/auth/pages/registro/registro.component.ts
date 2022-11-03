import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { EmailValidatorService } from '../../../shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern )]],
    email: ['', [Validators.required, Validators.pattern( this.validatorService.emailPattern )], [this.emailValidator]],
    username: ['', [ Validators.required, this.validatorService.noPuedeSerApodo ]],
    password: ['', [ Validators.required, Validators.maxLength(6) ]],
    password2: ['', [ Validators.required ]]
  }, {
    validators: [ this.validatorService.camposIguales('password', 'password2') ]
  });

  get emailErrorMsg():string  {

    const errors = this.miFormulario.get('email')?.errors;

    if(errors?.['required']) {
      return 'Email obligatorio';
    } else if (errors?.['pattern']) {
      return 'El valor imgresado no tiene formato de correo electrónico';
    } else if(errors?.['emailTomado']) {
      return 'El correo electrónico ya fue tomado';
    }

    return '';
  }

  constructor( 
    private emailValidator: EmailValidatorService,
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Ari Olvera',
      email: 'test1@test.com',
      username: 'aolvera',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid
          && this.miFormulario.get(campo)?.touched;
  }

  enviarFomrulario() {
    this.miFormulario.markAllAsTouched();
  }

}
