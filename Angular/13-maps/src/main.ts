import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import Mapboxgl from 'mapbox-gl';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

Mapboxgl.accessToken = 'pk.eyJ1IjoiYW9sdmVyYW14IiwiYSI6ImNsYTZ3YnZhaTAxZHAzcXFiajh0M2xyc3kifQ.DXlT7RExCvVHeNgYfC1kjw';

if ( !navigator.geolocation ) {
  alert('Unsupported feature from web browser');
  throw new Error('Unsupported feature from web browser');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));