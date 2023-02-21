import { getLocaleDateTimeFormat } from '@angular/common';
import { Injectable } from '@angular/core';
import { atleti } from '../data/atleti';
import { Atleta } from '../models/atleta';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  constructor() {
    
   }
   getAtleti():Atleta[]{
    return atleti;
  }
   inserisciAtleta(a:Atleta):void{
    this.getAtleti().push(a);
    
  }

  getAtletaById(id:number):any{
    let atleta = undefined;
    atleta = atleti.find( a=>a.id==id
    );
    return atleta;
  }
  modificaAtleta(atletaModificato:Atleta):void{

    let i = atleti.findIndex(
      a => a.id == atletaModificato.id
    );

    if( i >= 0 ){
      atleti[i]=atletaModificato;
    }
  }
  eliminaAtleta(id:number):void{
    
   
    let i = atleti.findIndex(
      a => a.id == id
    );
    if( i >= 0 ){
      atleti.splice(i,1);
    }
    console.log(atleti);
    //this.router.navigateByUrl("atleti");
  }
}
