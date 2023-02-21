import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { AllineamentoTestoComponent } from './allineamento-testo/allineamento-testo.component';
import { BadgeComponent } from './badge/badge.component';
import { BordiComponent } from './bordi/bordi.component';
import { CollegamentiComponent } from './collegamenti/collegamenti.component';
import { ColonneFisseComponent } from './colonne-fisse/colonne-fisse.component';
import { ColonneResponsiveComponent } from './colonne-responsive/colonne-responsive.component';
import { ColonneComponent } from './colonne/colonne.component';
import { ColoriComponent } from './colori/colori.component';
import { ContainerComponent } from './container/container.component';
import { DisplayComponent } from './display/display.component';
import { DisposizioneComponent } from './disposizione/disposizione.component';
import { HomeComponent } from './home/home.component';
import { ImmaginiComponent } from './immagini/immagini.component';
import { ListeComponent } from './liste/liste.component';
import { PulsantiComponent } from './pulsanti/pulsanti.component';
import { SpaziatureComponent } from './spaziature/spaziature.component';
import { TabelleComponent } from './tabelle/tabelle.component';
import { VisibilitaComponent } from './visibilita/visibilita.component';

const routes: Routes = [
 
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"container",
    component:ContainerComponent
  },
  {
    path:"colonne",
    component:ColonneComponent
  },
  {
    path:"colonne-fisse",
    component:ColonneFisseComponent
  },
  {
    path:"colonne-responsive",
    component:ColonneResponsiveComponent
  },
  {
    path:"visibilita",
    component:VisibilitaComponent
  },
  {
    path:"colori",
    component:ColoriComponent
  },
  {
    path:"bordi",
    component:BordiComponent
  },
  {
    path:"display",
    component:DisplayComponent
  },
  {
    path:"allineamento-testo",
    component:AllineamentoTestoComponent
  },
  {
    path:"spaziature",
    component:SpaziatureComponent
  },
  {
    path:"disposizione",
    component:DisposizioneComponent
  },
  {
    path:"immagini",
    component:ImmaginiComponent
  },
  {
    path:"tabelle",
    component:TabelleComponent
  },
  {
    path:"collegamenti",
    component:CollegamentiComponent
  },
  {
    path:"pulsanti",
    component:PulsantiComponent
  },
  {
    path:"badge",
    component:BadgeComponent
  },
  {
    path:"liste",
    component:ListeComponent
  },
  {
    path:"alert",
    component:AlertComponent
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"

  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
