import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroreComponent } from './errore/errore.component';
import { ControlloPazientiGuard } from './guards/controllo-pazienti.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ElencoPazientiComponent } from './pazienti/elenco-pazienti/elenco-pazienti.component';
import { CardiologiaComponent } from './reparti/cardiologia/cardiologia.component';
import { DiabetologiaComponent } from './reparti/diabetologia/diabetologia.component';
import { ElencoRepartiComponent } from './reparti/elenco-reparti/elenco-reparti.component';
import { RadiologiaComponent } from './reparti/radiologia/radiologia.component';

const routes: Routes = [
 
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"reparti",
    component:ElencoRepartiComponent,
    children:[

      {
        path:"cardiologia",
        component:CardiologiaComponent
      },
      {
        path:"radiologia",
        component:RadiologiaComponent
      },
      {
        path:"diabetologia",
        component:DiabetologiaComponent
      },
      {
        path:"",
        redirectTo:"radiologia",
        pathMatch:"full"
      }
    ]

  },
  {
    path:"pazienti",
    component:ElencoPazientiComponent,
    canActivate:[ControlloPazientiGuard]
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"

  },
  {
    path:"**",
    component:ErroreComponent
  }
];

@NgModule({
  //principale forRoot 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
