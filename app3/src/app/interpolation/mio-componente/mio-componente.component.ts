import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mio-componente',
  templateUrl: './mio-componente.component.html',
  styleUrls: ['./mio-componente.component.css']
})
export class MioComponenteComponent implements OnInit {

  // mostra variabili
  nome?:string;
  //calcoli
  prezzo:number = 12.9;
  pezzi:number =2;
  // chiamata metodi
  nomeUtente:string="Francesco";
  cognomeUtente:string="Aduni";
  oggi:Date= new Date();
  // percorsi dinamici
  link:string= "http://www.google.it";




  constructor() { }
  
  ngOnInit(): void {
  }

}
