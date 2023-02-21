import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestione-pulsanti',
  templateUrl: './gestione-pulsanti.component.html',
  styleUrls: ['./gestione-pulsanti.component.css']
})
export class GestionePulsantiComponent  {

  testiPulsanti:string[];
  constructor() { 
    this.testiPulsanti = [
      "elimina",
      "salva",
      "aggiungi"
    ];
  }

  onClick(testo:string): void {
    console.log(" " + testo);
  }
  onClickFiglio(testo:string): void {
    
    console.log("Messaggio dal figlio " + testo);
  }
}
