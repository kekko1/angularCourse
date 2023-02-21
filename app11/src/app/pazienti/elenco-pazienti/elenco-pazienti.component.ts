import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-elenco-pazienti',
  templateUrl: './elenco-pazienti.component.html',
  styleUrls: ['./elenco-pazienti.component.css']
})
export class ElencoPazientiComponent implements OnInit {

  constructor(private us :UtenteService) { }

  ngOnInit(): void {
  }
  get utente():Utente{
    return this.us.utente;
  }
}
