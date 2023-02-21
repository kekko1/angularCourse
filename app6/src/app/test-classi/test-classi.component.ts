import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-test-classi',
  templateUrl: './test-classi.component.html',
  styleUrls: ['./test-classi.component.css']
})

export class TestClassiComponent implements OnInit {

  persona:Persona;
  elencoPersone:Persona[];

  constructor() { 
    this.persona = new Persona("Alfio","Casto",66);
    this.elencoPersone = [
      new Persona("Alfio","Casto",66),
      new Persona("Gianni","Buri",99),
      new Persona("Marco","Polli",44),
      new Persona("Tito","Gresti",12)
      
    ]
  }
  ngOnInit(): void {
    // definisco istanze della classe contenitore
/*     const c1 = new Contenitore("foglie",4);
    const c2 = new Contenitore("palline");
    
    //visualizzo il contenuto dei contenitori
    console.log(c1.contenuto + "-" + c1.peso); 
    console.log(c2.contenuto + "-" + c2.peso);
    c2.stampaDati(); */
  }
}

class Contenitore {
  // attributi
  private _contenuto:string;
  private _peso:number;
  //costruttore
  constructor(c:string,p?:number) {
    this._contenuto = c;
    this._peso = p || 0;
   }
  //metodi
  //getContenuto():string{ return this.contenuto;}
  get contenuto ():string{ return this._contenuto;}

  get peso():number{
    return this._peso;
  }

  set contenuto (c:string){
    this._contenuto = c;
  }

  set peso (p:number){
    if(p >= 0)
      this._peso = p;
    else 
      console.log();
  }

  stampaDati():void{
    console.log(this.contenuto + " " + this.peso); 
  }
}