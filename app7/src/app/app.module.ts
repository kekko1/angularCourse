import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestioneOrologiComponent } from './gestione-orologi/gestione-orologi.component';
import { GestionePulsantiComponent } from './gestione-pulsanti/gestione-pulsanti.component';
import { PulsanteComponent } from './shared/pulsante/pulsante.component';
import { GestioneFilmComponent } from './gestione-film/gestione-film.component';
import { FilmComponent } from './gestione-film/film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    GestioneOrologiComponent,
    GestionePulsantiComponent,
    PulsanteComponent,
    GestioneFilmComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
