import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestioneCommentiComponent } from './gestione-commenti/gestione-commenti.component';
import { CoomentoComponent } from './coomento/coomento.component';
import { CommentoComponent } from './commento/commento.component';

@NgModule({
  declarations: [
    AppComponent,
    GestioneCommentiComponent,
    CoomentoComponent,
    CommentoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
