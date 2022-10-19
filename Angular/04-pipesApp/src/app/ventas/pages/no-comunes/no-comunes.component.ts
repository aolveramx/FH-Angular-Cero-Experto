import { Component } from '@angular/core';
import { interval } from 'rxjs'; 

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  //i18nPlural
  clientes: string[] = ['Ari', 'Paco', 'Juan'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando',
  }
  
  cambiarCliente() {
    this.nombre = 'Ari';
    this.genero = 'masculino';
  }

  borrarCliente()  {
    this.clientes.pop();
  }

  //Keyvalue Pipe
  persona = {
    nombre: 'Ari',
    edad: 30,
    direccion: 'México'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(2000); //0, 1, 2, ...

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500); 
  });

}
