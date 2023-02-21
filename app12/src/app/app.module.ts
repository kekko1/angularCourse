import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container/container.component';
import { ColonneComponent } from './colonne/colonne.component';
import { ColonneFisseComponent } from './colonne-fisse/colonne-fisse.component';
import { ColonneResponsiveComponent } from './colonne-responsive/colonne-responsive.component';
import { VisibilitaComponent } from './visibilita/visibilita.component';
import { ColoriComponent } from './colori/colori.component';
import { BordiComponent } from './bordi/bordi.component';
import { DisplayComponent } from './display/display.component';
import { AllineamentoTestoComponent } from './allineamento-testo/allineamento-testo.component';
import { SpaziatureComponent } from './spaziature/spaziature.component';
import { DisposizioneComponent } from './disposizione/disposizione.component';
import { ImmaginiComponent } from './immagini/immagini.component';
import { TabelleComponent } from './tabelle/tabelle.component';
import { CollegamentiComponent } from './collegamenti/collegamenti.component';
import { PulsantiComponent } from './pulsanti/pulsanti.component';
import { BadgeComponent } from './badge/badge.component';
import { ListeComponent } from './liste/liste.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContainerComponent,
    ColonneComponent,
    ColonneFisseComponent,
    ColonneResponsiveComponent,
    VisibilitaComponent,
    ColoriComponent,
    BordiComponent,
    DisplayComponent,
    AllineamentoTestoComponent,
    SpaziatureComponent,
    DisposizioneComponent,
    ImmaginiComponent,
    TabelleComponent,
    CollegamentiComponent,
    PulsantiComponent,
    BadgeComponent,
    ListeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
