import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElencoPostComponent } from './post/elenco-post/elenco-post.component';
import { DettaglioPostComponent } from './post/dettaglio-post/dettaglio-post.component';
import { NuovoPostComponent } from './post/nuovo-post/nuovo-post.component';
import { ModificaPostComponent } from './post/modifica-post/modifica-post.component';
import { RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ElencoPostComponent,
    DettaglioPostComponent,
    NuovoPostComponent,
    ModificaPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
