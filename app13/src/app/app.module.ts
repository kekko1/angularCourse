import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Html5Component } from './html5/html5.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElencoUtentiComponent } from './esercizio/elenco-utenti/elenco-utenti.component';
import { NuovoUtenteComponent } from './esercizio/nuovo-utente/nuovo-utente.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormBuilderComponent } from './reactive-form-builder/reactive-form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    Html5Component,
    BootstrapFormComponent,
    TemplateFormComponent,
    ElencoUtentiComponent,
    NuovoUtenteComponent,
    ReactiveFormComponent,
    ReactiveFormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
