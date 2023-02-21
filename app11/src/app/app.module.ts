import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ElencoRepartiComponent } from './reparti/elenco-reparti/elenco-reparti.component';
import { ElencoPazientiComponent } from './pazienti/elenco-pazienti/elenco-pazienti.component';
import { LoginComponent } from './login/login.component';
import { ErroreComponent } from './errore/errore.component';
import { CardiologiaComponent } from './reparti/cardiologia/cardiologia.component';
import { RadiologiaComponent } from './reparti/radiologia/radiologia.component';
import { DiabetologiaComponent } from './reparti/diabetologia/diabetologia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ElencoRepartiComponent,
    ElencoPazientiComponent,
    LoginComponent,
    ErroreComponent,
    CardiologiaComponent,
    RadiologiaComponent,
    DiabetologiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
