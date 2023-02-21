import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-direttive',
  templateUrl: './direttive.component.html',
  styleUrls: ['./direttive.component.css']
})
export class DirettiveComponent implements OnInit {

  stile1:string="color:red;font-weight: bold;";
  colore1:string="blue";
  animali:string[];
  
  class1:string="grassetto";
  class2:string="evidenziato"

  elencoClassi:string[] = ["grassetto","evidenziato"]
  //ngstyle
  stile2:any={
    "color":"red",
    "font-weight":"bold"
  };

  oggettoClasse:any;
  constructor() {
    this.animali =  [
      "pecora","scimmia","coccodrillo","gatto","elefante"
    ];
    this.oggettoClasse={
      'evidenziato':false,
      'grassetto':false
    }
   }
   
   evidenzia(): void {
    this.oggettoClasse.evidenziato=true;
  }
   
  grassetto(): void {
    this.oggettoClasse.grassetto=true;
  }
  ngOnInit(): void {
  }
  getStyle(animale:string): any{
   
    if(animale.length > 6 ) return {
       'color':'red',
       'font-weight':'bold'
    } 
    return {} // nessuno stile
  }

  getClass(animale:string): any{
   
    return {
       'evidenziato':animale.length >6,
       'grassetto':animale.charAt(0)=='s'
    } 
    
  }
}
