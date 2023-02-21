import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MioComponenteComponent } from './interpolation/mio-componente/mio-componente.component';
import { PostComponent } from './interpolation/post/post.component';
import { PhotoComponent } from './interpolation/photo/photo.component';
import { EsempioComponent } from './property/esempio/esempio.component';

@NgModule({
  declarations: [
    AppComponent,
    MioComponenteComponent,
    PostComponent,
    PhotoComponent,
    EsempioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
