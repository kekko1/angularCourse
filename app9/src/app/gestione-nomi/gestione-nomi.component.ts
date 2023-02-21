import { Component, OnInit } from '@angular/core';
import { NomeService } from './nome.service';

@Component({
  selector: 'app-gestione-nomi',
  templateUrl: './gestione-nomi.component.html',
  styleUrls: ['./gestione-nomi.component.css']
})
export class GestioneNomiComponent implements OnInit {
  nomi:string[];
  //inietto il servizio come dipendenza di questo componente
  constructor(private ns:NomeService) {
    //this.nomi = ["Alberto","Antonio","Carlo","Efisio"];
    this.nomi = [];
  }

  ngOnInit(): void {
    this.nomi = this.ns.getElencoNomi();
  }
  inserisciNome(n:any):void{
    //chiedere al servizio di aggiungere il nome in elenco
    this.ns.addNome(n.value);

    // svuotare la casella nome
    n.value="";
    
  }

}
