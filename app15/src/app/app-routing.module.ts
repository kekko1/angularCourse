import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioPostComponent } from './post/dettaglio-post/dettaglio-post.component';
import { ElencoPostComponent } from './post/elenco-post/elenco-post.component';
import { ModificaPostComponent } from './post/modifica-post/modifica-post.component';
import { NuovoPostComponent } from './post/nuovo-post/nuovo-post.component';


const routes: Routes = [
  {
    path:"elenco-post",
    component:ElencoPostComponent
  },
  {
    path:"dettaglio-post/:id",
    component:DettaglioPostComponent
  },
  {
    path:"nuovo-post",
    component:NuovoPostComponent
  },
  {
    path:"modifica-post/:id/modifica",
    component:ModificaPostComponent
  },
  {
    path:"home",
    pathMatch:"full",
    redirectTo:"elenco-post"
  },
  {
    path:"**",
    redirectTo:"elenco-post"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
