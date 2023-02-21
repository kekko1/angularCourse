import { Component, OnInit, ViewChild, ɵExtraLocaleDataIndex } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-riferimenti',
  templateUrl: './riferimenti.component.html',
  styleUrls: ['./riferimenti.component.css']
})
export class RiferimentiComponent {

  numero: number = 10;
  elencoPersone: Persona[];
  @ViewChild ("paragrafo") paragrafo:any;

  constructor() {
    this.elencoPersone=[
      new Persona("Marco","Neri"),
      new Persona("Luca","Gialli"),
      new Persona("Giulio","Verdi"),
      new Persona("Andrea","Rossi")
    ];
   }

  leggiNome(casella:any):void{
    alert(casella.value);
  }
  inserisci(nomePersona:any,cognomePersona:any):void{
    this.elencoPersone.push(new Persona(nomePersona.value,cognomePersona.value));
    this.paragrafo.nativeElement.innerHTML +=
    "inserita nuova persona "+nomePersona.value+""+cognomePersona.value;
  }
  
  elimina(i:number):void{
    this.elencoPersone.splice(i,1);
  }
}
