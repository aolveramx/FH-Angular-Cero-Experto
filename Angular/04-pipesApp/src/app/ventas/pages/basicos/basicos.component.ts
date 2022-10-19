import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'ari';
  nombreUpper: string = 'ARI';
  nombreCompleto: string = 'aRi OlvEra';

  fecha: Date = new Date();

}
