import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TipoCambioComponent} from './pages/tipo-cambio/tipo-cambio.component';
import {MaterialModulo} from './_material/material.modulo';
import {HttpClientModule} from '@angular/common/http';
import {TipoCambioEdicionComponent} from './pages/tipo-cambio/tipo-cambio-edicion/tipo-cambio-edicion.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TipoCambioComponent,
    TipoCambioEdicionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModulo,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
