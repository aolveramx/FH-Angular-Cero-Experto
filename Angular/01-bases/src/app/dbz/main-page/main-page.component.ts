import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  new: Character = {
    name: 'Mutten Roshi',
    power: 1000,
  }

  constructor( ) {}

}
