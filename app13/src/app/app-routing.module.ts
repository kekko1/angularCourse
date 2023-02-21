import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { ElencoUtentiComponent } from './esercizio/elenco-utenti/elenco-utenti.component';
import { NuovoUtenteComponent } from './esercizio/nuovo-utente/nuovo-utente.component';
import { Html5Component } from './html5/html5.component';
import { ReactiveFormBuilderComponent } from './reactive-form-builder/reactive-form-builder.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {
    path:"",
    component:Html5Component
  },
  {
    path:"bootstrap",
    component:BootstrapFormComponent
  },
  {
    path:"template",
    component:TemplateFormComponent
  },
  {
    path:"esercizio",
    component:ElencoUtentiComponent
  },
  {
    path:"esercizio/nuovo",
    component:NuovoUtenteComponent
  },
  {
    path:"reactive",
    component:ReactiveFormComponent
  },
  {
    path:"builder",
    component:ReactiveFormBuilderComponent
  },
 
  {
    path:"**",
    redirectTo:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
