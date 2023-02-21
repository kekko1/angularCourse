import { Injectable } from '@angular/core';
import { Utente } from '../models/utente';
import { utenti } from '../data/utenti';
@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor() { }
  getUtenti():Utente[]{
    return utenti;
  }
  addUtenti(u:Utente):void{
    utenti.push(u);   
  }
}
