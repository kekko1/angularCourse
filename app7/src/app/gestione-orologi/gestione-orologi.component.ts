import { Component, OnInit } from '@angular/core';
import { Orologio } from './orologio';

@Component({
  selector: 'app-gestione-orologi',
  templateUrl: './gestione-orologi.component.html',
  styleUrls: ['./gestione-orologi.component.css']
})
export class GestioneOrologiComponent implements OnInit {

  elencoOrologi :Orologio[];

  constructor() {
    this.elencoOrologi=[
        new Orologio(23,30),
        new Orologio(1,30),
        new Orologio(9,0)
    ];
  }

  ngOnInit(): void {}
  
  aumenta(o:Orologio): void {
    
    // aumento lorario di 5 minuti
    if(o.minuti <= 55 )
      o.minuti = o.minuti + 5;
    if(o.minuti > 55 ){
      o.minuti = o.minuti  -60;
      if( o.ore == 23){
        o.ore = o.ore -23;
      }
      else
        o.ore = o.ore + 1;
     

      
    }
  }
}
