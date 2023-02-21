import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestioneNomiComponent } from './gestione-nomi/gestione-nomi.component';
import { GestioneStudentiComponent } from './gestione-studenti/gestione-studenti.component';
import { GestioneFotoComponent } from './gestione-foto/gestione-foto.component';

@NgModule({
  declarations: [
    AppComponent,
    GestioneNomiComponent,
    GestioneStudentiComponent,
    GestioneFotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
