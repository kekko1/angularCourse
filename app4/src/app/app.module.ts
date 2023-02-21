import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EsempioComponent } from './event/esempio/esempio.component';
import { TipiEventiComponent } from './event/tipi-eventi/tipi-eventi.component';
import { ClienteComponent } from './two-way/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    EsempioComponent,
    TipiEventiComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
