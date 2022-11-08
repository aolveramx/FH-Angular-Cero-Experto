import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!:  ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 17;
  center: [ number, number ] = [ -99.16629991989943, 19.427585968513483 ];

  constructor() { }

  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.mapa.on('zoom', (e) => this.zoomLevel = this.mapa.getZoom());

    this.mapa.on('zoomend', (e) => {
      if( this.mapa.getZoom() > 18 ) {
        this.mapa.zoomTo(18);
      }
    });

    this.mapa.on('move', (e) => {
      const { lng, lat } = e.target.getCenter();
      this.center = [ lng, lat ];
    });
  }

  zoomOut() {
    this.mapa.zoomOut();
  }

  zoomIn() {
    this.mapa.zoomIn();
  }

  zoomCambio( valor: string ) {
    this.mapa.zoomTo( Number(valor) );
  }

}
