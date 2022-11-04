import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { switchMap, tap } from 'rxjs';

import { PaisesServiceService } from '../../services/paises-service.service';
import { PaisSmall } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    region  : ['', Validators.required],
    pais    : ['', Validators.required],
    frontera: ['', Validators.required]
  });

  //Llenar Selectores 
  regiones : string[] = [];
  paises   : PaisSmall[] = []; 
  fronteras: string[] = []; 

  //UI
  cargando: boolean = false;

  constructor( 
    private formBuilder: FormBuilder,
    private paisesService: PaisesServiceService ) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

  //Cuando cambie la region
  this.miFormulario.get('region')?.valueChanges
    .pipe(
      tap( ( _ ) => {
        this.miFormulario.get('pais')?.reset('');
        this.cargando = true;
      }),
      switchMap(region => this.paisesService.getPaisesPorRegion( region ))
    )
    .subscribe( paises => {
      this.paises = paises;
      this.cargando = false;
    });

  //Cuando cambie el país
  this.miFormulario.get('pais')?.valueChanges
  .pipe(
    tap( ( _ ) => {
      this.fronteras = [];
      this.miFormulario.get('frontera')?.reset('');
      this.cargando = true;
    }),
    switchMap( codigo => this.paisesService.getPaisPorAlpha( codigo )),
    )
    .subscribe( pais => {
      pais?.find( pais => this.fronteras = pais.borders || []);
      this.cargando = false;
    });

  }

  guardar() {
    console.log(this.miFormulario.value);
  }

}
