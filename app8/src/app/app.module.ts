import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirettiveComponent } from './direttive/direttive.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { PulsanteComponent } from './pulsante/pulsante.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { RiferimentiComponent } from './riferimenti/riferimenti.component';
import { AutoComponent } from './auto/auto.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    DirettiveComponent,
    ContentProjectionComponent,
    PulsanteComponent,
    ArticoloComponent,
    RiferimentiComponent,
    AutoComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
