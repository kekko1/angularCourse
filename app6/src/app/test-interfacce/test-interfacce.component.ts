import { Component, OnInit } from '@angular/core';
import { Pacco } from '../models/pacco';

@Component({
  selector: 'app-test-interfacce',
  templateUrl: './test-interfacce.component.html',
  styleUrls: ['./test-interfacce.component.css']
})
export class TestInterfacceComponent implements OnInit {

  mioPacco:Pacco;
  elencoPacchi:Pacco[];
  paccoSelezionato?:Pacco;

  constructor() {
    this.mioPacco = { codice:123, contenuto:"palline", peso:1234};
    this.elencoPacchi = [
      { codice:123, contenuto:"Bulloni", peso:21,pesoImballo:10},
      { codice:334, contenuto:"Giacche", peso:667},
      { codice:221, contenuto:"Frigoriferi", peso:4433334},
      { codice:999, contenuto:"Legna", peso:223}
    ]
    //this.paccoSelezionato = this.elencoPacchi[0];
   }

  ngOnInit(): void {
    /*
    let m1 : Manager= new Manager(123,"Pioli","Aldo","Insurance");
    m1.stampaDati();
    */
  }
  
  deseleziona(): void {
    this.paccoSelezionato = undefined;
  }
  seleziona(p:Pacco): void {
    this.paccoSelezionato = p;
  }

}
// definizione interfaccia
interface Dipendente{
  matricola:number,
  cognome:string,
  nome:string,
  stampaDati():void
}

//definisco una classe che implementa l'interfaccia
class Manager implements Dipendente{
  matricola: number;
  cognome: string;
  nome: string;
  reparto:string;
  stampaDati(): void {
    console.log("sono un manager del reparto "+ this.reparto+" con matricola "+this.matricola+", mi chiamo "+this.cognome +", "+this.nome);
  }
  
  constructor(m:number,c:string,n:string,r:string){
    this.matricola=m;
    this.cognome=c;
    this.nome=n;
    this.reparto=r;
  }
}