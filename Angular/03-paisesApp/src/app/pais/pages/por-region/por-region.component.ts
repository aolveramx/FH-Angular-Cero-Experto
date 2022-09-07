import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px
    }
    `]
})
export class PorRegionComponent {

  hayError: boolean = false;
  paises  : Country[] = [];
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';

  constructor( private paisService: PaisService ) { }

  getClaseCSS( region: string ): string {
    return (region === this.regionActiva) 
            ? 'btn btn-primary' 
            : 'btn btn-outline-primary';
  }

  activarRegion( region: string ) {

    if (region === this.regionActiva) { return; }

    this.hayError = false;
    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion( region )
      .subscribe( paises => {
        this.paises = paises;
        
      }, (error) => {
        this.hayError = true;
        this.paises = [];
      });
  }

}
