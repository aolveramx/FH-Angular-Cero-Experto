import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Módulo personalizado
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localES from '@angular/common/locales/es-MX';
import localFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common'

registerLocaleData(localES);
registerLocaleData(localFR);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
