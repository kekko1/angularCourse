import { Component, OnInit } from '@angular/core';
import { Studente } from '../models/studente';
import { StudenteService } from '../services/studente.service';

@Component({
  selector: 'app-gestione-studenti',
  templateUrl: './gestione-studenti.component.html',
  styleUrls: ['./gestione-studenti.component.css']
})
export class GestioneStudentiComponent implements OnInit {

  elencoStudenti: Studente[];
  studente?:Studente;
  constructor(private ns:StudenteService ) {
    this.elencoStudenti=[];
   
  }

  ngOnInit(): void {
    this.elencoStudenti=this.ns.getStudenti();
  }

  aggiungiMatricola(matricola:any,cognome:any,nome:any,media:any){
    this.studente = {
      "matricola":matricola.value,
      "cognome":cognome.value,
      "nome":nome.value,
      "media":media.value,

    }
    this.ns.addStudente(this.studente);
  }
}
