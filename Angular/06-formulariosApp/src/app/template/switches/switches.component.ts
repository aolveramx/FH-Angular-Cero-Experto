import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent {

  persona = {
    genero: 'F',
    notification: true
  };

  terminosCondiciones: boolean = false;

}
