import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuovoComponent } from './nuovo/nuovo.component';
import { BoxComponent } from './shared/box.component';

@NgModule({
  declarations: [
    AppComponent,
    NuovoComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
